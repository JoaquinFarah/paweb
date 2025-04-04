import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Device from './components/Device';
import Services from './components/Services';

export default function Index() {
  return (
    <div className="relative bg-gray-50">
      <Navbar />
      <Whatsapp />
      
      {/* Contenedor del video */}
      {/* <div className="relative h-screen">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="ingenieria1.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video> */}
        
        {/* Mensaje sobre el video */}
        {/* <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center">
          <p className="uppercase">Soluciones integrales con gran impacto para brigadas y equipos de seguridad laboral</p>
        </div>
      </div> */}

      <div className="relative h-screen bg-gray-50">
        <Image 
          src="/tunel.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
               
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
          <p className="uppercase">Soluciones integrales con gran impacto para brigadas y equipos de seguridad laboral</p>
        </div>
      </div>


      <div className="mt-20 bg-gray-50">
        
        <h1 className="text-5xl flex justify-center items-center mt-20">¿Que hacemos?</h1>

        <Services />
        <Device />
      </div>





    </div>


  );
}
