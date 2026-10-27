import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Sirve las funciones de /api durante `npm run dev`, imitando a Vercel,
// para poder probar el formulario de contacto en local.
function vercelApiDev() {
  return {
    name: 'vercel-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/', async (req, res, next) => {
        const name = req.url.split('?')[0].replace(/^\//, '')
        if (!/^[\w-]+$/.test(name)) return next()

        let mod
        try {
          mod = await server.ssrLoadModule(`/api/${name}.js`)
        } catch {
          return next()
        }

        let raw = ''
        for await (const chunk of req) raw += chunk
        try {
          req.body = raw ? JSON.parse(raw) : {}
        } catch {
          req.body = {}
        }

        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
          return res
        }

        try {
          await mod.default(req, res)
        } catch (err) {
          console.error(err)
          res.statusCode = 500
          res.end()
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Expone las variables de .env (RESEND_API_KEY, etc.) a la función en desarrollo
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), vercelApiDev()],
    optimizeDeps: {
      include: ['swiper'],
    },
  }
})
