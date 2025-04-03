import React from 'react';
import Image from 'next/image';

export default function Whatsapp() {
  return (
    <div className="fixed bottom-10 right-10 z-50 w-20 h-16">
      <div className="flex items-center justify-center">
        <button type="button" className="inline-flex flex-col items-center justify-center p-2 rounded-4xl shadow-xl group">
          <Image 
            src="/whatsapp.png" 
            alt="Icono" 
            width={50} 
            height={50} 
            className="w-12 h-12 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"
          />
          <span className="text-s font-semibold text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Whatsapp
          </span>
        </button>
      </div>
    </div>
  );
}
