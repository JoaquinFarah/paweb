import React from 'react';

import Image from 'next/image';

const callout = [   
  {
    name: 'Innovacion y tecnologia',      
    description: 'La tecnología de nuestros productos es innovadora y de alta calidad, lo que garantiza su eficacia y durabilidad. Utilizamos materiales de última generación y técnicas avanzadas para ofrecer soluciones efectivas y confiables.',
    imageSrc: '/escalera.jpg',
    imageAlt: 'serv1',
    width: 1000,
    height: 1000,
    
  }, 
  {
    name: 'Capacitaciones',
    description: 'Capacitamos a los brigadistas en el uso de nuestros productos y brindamos asesoramiento técnico para garantizar su correcto funcionamiento. Nuestro equipo de expertos está disponible para resolver cualquier duda o inquietud que puedan tener nuestros clientes.',
    imageSrc: '/tunel1.jpg',
    imageAlt: 'serv2',
    width: 1000,
    height: 1000,
  },  
  {
    name: 'Venta y alquiler de equipos',
    description: 'Ofrecemos una amplia gama de productos para la seguridad laboral, incluyendo equipos de protección personal, sistemas de rescate y evacuación, y herramientas de trabajo en altura. Nuestros productos están diseñados para cumplir con los más altos estándares de calidad y seguridad.',    
    imageSrc: '/bajando.jpg',
    imageAlt: 'serv3',
    width: 1000,
    height: 1000,
    href: '/pages/news/uncuyo',
  },  
  ]
  
  export default function NewsSection() {
    
    return (
      <div className="bg-gray-50 py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
              {callout.map((callout) => (
                <div key={callout.name} className="group relative rounded-lg px-1 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80">
                  <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      width={callout.width}
                      height={callout.height}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-2xl text-indigo-500 items-center text-center font-semibold leading-6">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 mb-6 text-left px-4 mt-10">{callout.description}</p>
                </div>
              ))}
            </div>

        </div>
      </div>
    ) 
  }
  