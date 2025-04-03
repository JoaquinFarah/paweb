import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {

  return (
    // style={{ backgroundColor: '#e5771b' }}
    <nav style={{ backgroundColor: '#e5771b' }} className="shadow-md fixed w-full z-50">
      <div className="w-full mx-0 px-1 sm:px-1 lg:px-2">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo leftside */}
          <div className="flex items-center flex-grow ml-10">
            <Link href="/">
              <Image                    
                src="/logo fondo negro.png"
                alt="logo"
                width={350}
                height={350}
                className="object-contain max-h-16"
                priority
              />
            </Link>
          </div>
          
          {/* Links rightside */}
          <div className="flex items-center justify-end space-x-6 mr-52">

            <Link href="/pages/servicepage" className="no-underline decoration-2 transition-all duration-200 hover:underline hover:decoration-blue-400 text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 191, 255, 1)' }}>
            Sombreado
            </Link>     
          
            <Link href="/pages/about" className="no-underline decoration-2 transition-all duration-200 hover:underline hover:decoration-blue-400">
            Nosotros
            </Link>

            <Link href="/pages/servicepage" className="no-underline decoration-2 transition-all duration-200 hover:underline hover:decoration-blue-400">
            Servicios
            </Link>

            <Link href="/pages/productpage" className="no-underline decoration-2 transition-all duration-200 hover:underline hover:decoration-blue-400">
            Visión
            </Link>

          </div>
        </div>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-white via-amber-400 to-white"></div>
      {/* <div className="h-1 bg-gradient-to-r from-green-800 via-white to-red-800"></div> */}
    </nav>
  );
};

export default Navbar;
