export default function Navbar () {
    return (
      <header className="shadow-md">
        <nav className="container mx-auto p-4 flex justify-between items-center pl-[8%] px-5 md:px-0">
          <div className="text-2xl font-bold">
            {/* Logotipo para desktop */}
            <img src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390894/images/Logo_lkdzsg.png" alt="Logotipo de Paradigma Seeds Desktop" className="w-[60%] h-[60%] hidden md:block" />
            {/* Logotipo para mobile */}
            <img src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727392658/images/PS_simbolo_blanco_Preferente_o7ilqx.png" alt="Logotipo de Paradigma Seeds Mobile" className="w-[75%] h-[75%] block md:hidden" />
          </div>
  
          <div className="md:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
  
            <ul id="mobile-menu" className="hidden flex-col space-y-4 p-4 absolute left-0 right-0 shadow-md bg-white z-10">
              <li><a href="#nosotros" className="text-gray-100 hover:text-blue-500 font-bold">Nosotros</a></li>
              <li><a href="#servicios" className="text-gray-100 hover:text-blue-500 font-bold">Servicios</a></li>
              <li><a href="#contacto" className="text-gray-100 hover:text-blue-500 font-bold">Contacto</a></li>
            </ul>
          </div>
  
          <ul className="hidden md:flex space-x-6">
            <li><a href="#nosotros" className="text-gray-100 hover:text-gray-500 font-bold">Nosotros</a></li>
            <li><a href="#servicios" className="text-gray-100 hover:text-gray-500 font-bold">Servicios</a></li>
            <li><a href="#contacto" className="text-gray-100 hover:text-gray-500 font-bold">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
  };