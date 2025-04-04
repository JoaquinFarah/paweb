// import React from 'react';
// import Image from 'next/image';
// import Navbar from '../../components/Navbar';
// import Whatsapp from '@/app/components/Whatsapp';

// export default function About() {
//   return (
//     <div>      
//       <Navbar />
//       <Whatsapp />
//     <div className="relative h-screen bg-gray-50 ">
//             <Image 
//               src="/escalera.jpg" 
//               alt="Icono" 
//               width={2000} 
//               height={2000} 
//               className="absolute top-0 left-0 w-full h-full object-cover" 
//             />
                   
//             <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
//               <p className="uppercase ">Impulsando el Éxito de tu Proyecto con Soluciones Prácticas</p>
//             </div>
//           </div>
//     <div>
//     <h1 className="text-5xl flex justify-center items-center mt-20">Por que elegirnos?</h1>
//     <p className="text-2xl flex justify-center items-center mt-10">En Proalianza, nos enorgullece ofrecer soluciones de alta calidad que satisfacen las necesidades de nuestros clientes. Con años de experiencia en el sector, nos hemos consolidado como líderes en el campo de la seguridad laboral.</p>
//     <p className="text-2xl flex justify-center items-center mt-10">En un mundo donde la seguridad y la eficiencia son primordiales, ofrecemos soluciones prácticas que garantizan el éxito de tu proyecto. Nuestra experiencia en el sector nos permite brindar un servicio integral, adaptándonos a tus necesidades específicas y asegurando resultados óptimos.</p>
//     <p className="text-2xl flex justify-center items-center mt-10">Nos destacamos por nuestra atención al cliente, compromiso con la calidad y un enfoque proactivo en la resolución de problemas. Con nosotros, no solo obtienes un proveedor, sino un socio estratégico que impulsa el éxito de tu proyecto.</p>
    
    
    


    
    
//     </div>



//     </div>
//   )
// }


import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';

export default function About() {
  return (
    <div>      
      <Navbar />
      <Whatsapp />
      <div className="relative h-screen bg-gray-50">
        <Image 
          src="/escalera.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
          <p className="uppercase">Impulsando el Éxito de tu Proyecto con Soluciones Prácticas</p>
        </div>
      </div>
      <div className="">
        <h1 className="text-5xl flex justify-center items-center mt-20">Por qué elegirnos?</h1>
        <p className="text-2xl flex justify-center items-center mt-10">En Proalianza, nos enorgullece ofrecer soluciones de alta calidad que satisfacen las necesidades de nuestros clientes. Con años de experiencia en el sector, nos hemos consolidado como líderes en el campo de la seguridad laboral.</p>
        <p className="text-2xl flex justify-center items-center mt-10">En un mundo donde la seguridad y la eficiencia son primordiales, ofrecemos soluciones prácticas que garantizan el éxito de tu proyecto. Nuestra experiencia en el sector nos permite brindar un servicio integral, adaptándonos a tus necesidades específicas y asegurando resultados óptimos.</p>
        <p className="text-2xl flex justify-center items-center mt-10">Nos destacamos por nuestra atención al cliente, compromiso con la calidad y un enfoque proactivo en la resolución de problemas. Con nosotros, no solo obtienes un proveedor, sino un socio estratégico que impulsa el éxito de tu proyecto.</p>
        
        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Risk.svg" 
              alt="High Risk Company 1" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Gestión de Riesgos</h2>
            <p className="mt-3 text-lg">Ofrecemos soluciones avanzadas para identificar y mitigar riesgos en entornos laborales de alto peligro.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Protectionico.svg" 
              alt="High Risk Company 2" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Seguridad Industrial</h2>
            <p className="mt-3 text-lg">Implementamos estrategias de seguridad industrial que protegen a los trabajadores y optimizan la productividad.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Special.svg" 
              alt="High Risk Company 3" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Capacitación Especializada</h2>
            <p className="mt-3 text-lg">Brindamos formación especializada para garantizar que los equipos estén preparados para enfrentar desafíos críticos.</p>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Risk.svg" 
              alt="High Risk Company 1" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Gestión de Riesgos</h2>
            <p className="mt-3 text-lg">Ofrecemos soluciones avanzadas para identificar y mitigar riesgos en entornos laborales de alto peligro.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Protectionico.svg" 
              alt="High Risk Company 2" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Seguridad Industrial</h2>
            <p className="mt-3 text-lg">Implementamos estrategias de seguridad industrial que protegen a los trabajadores y optimizan la productividad.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/Special.svg" 
              alt="High Risk Company 3" 
              width={100} 
              height={100} 
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-5">Capacitación Especializada</h2>
            <p className="mt-3 text-lg">Brindamos formación especializada para garantizar que los equipos estén preparados para enfrentar desafíos críticos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}