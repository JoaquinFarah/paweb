import React from 'react';
import Image from 'next/image';

const callout = [   
  {
    name: 'Venta de productos y Accesorios para trabajos en altura',      
    description: 'Nuestros equipamientoss de altura son ideales para trabajos en espacios confinados, como túneles y pozos. Ofrecemos soluciones personalizadas para cada necesidad, garantizando la seguridad y eficiencia en el trabajo.',
    imageSrc: '/altura.jpg',
    imageAlt: 'serv1',
    width: 1000,
    height: 1000,    
  }, 
  {
    name: 'Capacitación trabajos en altura con elementos de X-URBAN',
    description: 'Capacitamos a los brigadistas en el uso de nuestros productos y brindamos asesoramiento técnico para garantizar su correcto funcionamiento. Nuestro equipo de expertos está disponible para resolver cualquier duda o inquietud que puedan tener nuestros clientes.',
    imageSrc: '/xurban.jpg',
    imageAlt: 'serv2',
    width: 1000,
    height: 1000,
  },  
  {
    name: 'Capacitación en Espacios Confinados',
    description: 'Ofrecemos capacitación especializada en espacios confinados, brindando a los brigadistas las herramientas necesarias para trabajar de manera segura y eficiente. Nuestros cursos incluyen teoría y práctica, asegurando que los participantes adquieran los conocimientos necesarios para enfrentar situaciones de riesgo.',    
    imageSrc: '/bajando.jpg',
    imageAlt: 'serv3',
    width: 1000,
    height: 1000,
  },  
  {
    name: 'Capacitación sobre uso de Equipos Autónomos',      
    description: 'En situaciones donde son requeridos equipos autónomos, como en espacios confinados, ofrecemos capacitación especializada para el uso de estos equipos. Nuestros cursos incluyen teoría y práctica, asegurando que los participantes adquieran los conocimientos necesarios para enfrentar situaciones de riesgo.',
    imageSrc: '/espaciosconfinados2.jpg',
    imageAlt: 'serv1',
    width: 1000,
    height: 1000,    
  }, 
  {
    name: 'Mantenimiento preventivo y prueba hidráulica de cilindros E.R.A.',      
    description: 'Contamos con especialistas de mantenimiento de cilindros E.R.A. para garantizar el correcto funcionamiento de los equipos. Realizamos pruebas hidráulicas y mantenimiento preventivo, asegurando la seguridad y eficiencia en el trabajo.',
    imageSrc: '/hidraulica.jpg',
    imageAlt: 'serv1',
    width: 1000,
    height: 1000,    
  }, 
  {
    name: 'Alquiler de equipos detectores de Gases personales',      
    description: 'Cuando los brigadistas deben trabajar en espacios confinados, ofrecemos equipos detectores de gases personales para garantizar la seguridad de los trabajadores. Nuestros equipos son de última tecnología y cumplen con los estándares de seguridad requeridos.',
    imageSrc: '/detector.webp',
    imageAlt: 'serv1',
    width: 1000,
    height: 1000,    
  }, 
  {
    name: 'Calibración y Mantenimiento preventivo de Equipos detector de gas',      
    description: 'Siempre al dia con los últimos avances en tecnología de detección de gases, ofrecemos calibración y mantenimiento preventivo de equipos detectores de gas. Nuestros técnicos especializados garantizan el correcto funcionamiento de los equipos, asegurando la seguridad de los trabajadores.',
    imageSrc: '/calibracion.jpg',
    imageAlt: 'serv1',
    width: 1000,
    height: 1000,    
  }, 
  ]
  
  export default function NewsSection() {
    
    return (
      <div className="py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mt-3 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-5">
              {callout.map((callout) => (
                <div key={callout.name} className="bg-gray-50 group relative rounded-lg px-6 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80">
                  <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      width={callout.width}
                      height={callout.height}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-5 text-2xl text-indigo-500 items-center text-center font-semibold leading-7">
                    <p>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </p>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 mb-6 text-left px-8 mt-5">{callout.description}</p>
                </div>
              ))}
            </div>

        </div>
      </div>
    ) 
  }
  