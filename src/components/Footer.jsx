export default function Footer  () {
    return (
      <footer className="bg-black text-gray-100 p-5 md:p-20">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center mb-4 h-10">
            <img src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390894/images/Logo_lkdzsg.png" alt="Logotipo de Paradigma Seeds" className="h-10" />
          </div>
  
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4">
            <li><a href="#nosotros" className="hover:text-blue-500 font-bold">Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-blue-500 font-bold">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-blue-500 font-bold">Contacto</a></li>
          </ul>
  
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.783 0 0 .783 0 1.775v20.45C0 23.217.783 24 1.775 24h21.45C23.217 24 24 23.217 24 22.225V1.775C24 .783 23.217 0 22.225 0zM12 24h-3.61v-9.2H6.59V12h1.81V9.6c0-1.8 1.04-2.8 2.72-2.8.78 0 1.52.06 2.17.1v2.49h-1.51c-1.18 0-1.41.56-1.41 1.39V12h2.96l-.39 2.8h-2.57V24H12z"/></svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.149 0 3.539.012 4.785.069 1.236.057 2.244.25 3.096.54.74.274 1.377.634 1.948 1.205.571.571.931 1.208 1.205 1.948.291.852.482 1.86.539 3.096.057 1.246.069 1.636.069 4.785s-.012 3.539-.069 4.785c-.057 1.236-.25 2.244-.54 3.096-.274.74-.634 1.377-1.205 1.948-.571.571-1.208.931-1.948 1.205-.852.291-1.86.482-3.096.539-1.246.057-1.636.069-4.785.069s-3.539-.012-4.785-.069c-1.236-.057-2.244-.25-3.096-.539-.74-.274-1.377-.634-1.948-1.205-.571-.571-.931-1.208-1.205-1.948-.291-.852-.482-1.86-.539-3.096C2.175 15.702 2.163 15.312 2.163 12s.012-3.539.069-4.785c.057-1.236.25-2.244.54-3.096.274-.74.634-1.377 1.205-1.948C3.875 2.497 4.512 2.037 5.252 1.763c.852-.291 1.86-.482 3.096-.539C8.461 2.175 8.851 2.163 12 2.163zm0-2.163C8.63 0 8.25.012 7.032.06c-1.265.053-2.42.236-3.528.505-1.067.261-2.064.63-2.94 1.122-1.353.82-2.34 1.84-3.159 3.159C.63 3.89.261 4.887.06 5.954-.012 7.25 0 7.63 0 12s.012 4.75.06 5.946c.201 1.067.57 2.064 1.122 2.94.82 1.353 1.84 2.34 3.159 3.159.876.492 1.873.86 2.94 1.122 1.108.269 2.263.452 3.528.505 1.218.048 1.608.06 4.785.06s3.539-.012 4.785-.06c1.265-.053 2.42-.236 3.528-.505 1.067-.261 2.064-.63 2.94-1.122 1.353-.82 2.34-1.84 3.159-3.159.492-.876.86-1.873 1.122-2.94.269-1.108.452-2.263.505-3.528.048-1.218.06-1.608.06-4.785s-.012-3.539-.06-4.785c-.053-1.265-.236-2.42-.505-3.528-.261-1.067-.63-2.064-1.122-2.94-.82-1.353-1.84-2.34-3.159-3.159-.876-.492-1.873-.86-2.94-1.122C14.42.236 13.265.053 12 0zm0 5.839A6.161 6.161 0 1 0 18.161 12 6.168 6.168 0 0 0 12 5.839zm0 10.321A4.162 4.162 0 1 1 16.162 12 4.169 4.169 0 0 1 12 16.16zm4.781-10.959a1.003 1.003 0 1 0 1.003 1.003 1.003 1.003 0 0 0-1.003-1.003z"/></svg>
            </a>
          </div>
        </div>
  
        <div className="text-center mt-4">
          <p className="text-gray-400">© 2024 Paradigma Seeds. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };
  