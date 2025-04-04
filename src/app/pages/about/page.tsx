import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';

export default function About() {
  return (
    <div>      
      <Navbar />
      <Whatsapp />
    <div className="relative h-screen bg-gray-50 ">
            <Image 
              src="/escalera.jpg" 
              alt="Icono" 
              width={2000} 
              height={2000} 
              className="absolute top-0 left-0 w-full h-full object-cover" 
            />
                   
            <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
              <p className="uppercase ">Impulsando el Éxito de tu Proyecto con Soluciones Prácticas</p>
            </div>
          </div>
    



    </div>
  )
}
