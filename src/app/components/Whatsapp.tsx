import React from 'react';
import Image from 'next/image';

export default function Whatsapp() {
  return (
    
    <div className="fixed bottom-3 right-1/25 z-50 w-20 h-16">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group">
            <Image 
            src="/whatsapp.png" 
            alt="Icono" 
            width={520} 
            height={520} 
            className="w-5 h-5 mb-2 group-hover:opacity-80"
            />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Whatsapp</span>
            </button>
            
        </div>
    </div>
  )
}
