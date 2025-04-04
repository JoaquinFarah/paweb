import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {

  return (
    // style={{ backgroundColor: '#e5771b' }}
    <nav  className="bg-gradient-to-br from-20% to-white shadow-md fixed w-full z-50 backdrop-blur-sm">
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
          
            <Link href="/pages/about" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Nosotros
            </Link>

            <Link href="/pages/servicepage" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Servicios
            </Link>

            <Link href="/pages/productpage" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Visión
            </Link>

            <Link href="/pages/servicepage" className="no-underline decoration-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-blue-400" style={{ textShadow: '2px 2px 4px #e5771b' }}>
            Misión
            </Link>  

          </div>
        </div>
      </div>
      {/* <div className="h-0.5 bg-gradient-to-r from-amber-600 via-white to-amber-600"></div>
      <div className="h-0.5 bg-gradient-to-r from-white via-amber-600 to-white"></div> */}
      
    </nav>
  );
};

export default Navbar;
