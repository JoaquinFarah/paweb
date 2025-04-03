import React from 'react';
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';

export default function Index() {
  return (
    <div className="relative">
      <Navbar />
      <Whatsapp />
      
      {/* Contenedor del video */}
      <div className="relative h-screen">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="edificio.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        
        {/* Mensaje sobre el video */}
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center">
          <p className="uppercase">Soluciones integrales con gran impacto para brigadas y equipos de seguridad laboral</p>
        </div>
      </div>

      {/* Otros contenidos */}
      <h1 className="mt-20">PAGINA index</h1>


    </div>


  );
}
