'use client';

import { EnvelopeIcon, MapPinIcon, PhoneIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';

export default function ContactForm() {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Left side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Contáctenos</h2>
          <p className="text-lg text-gray-600">
            Nuestros horarios de atención son de lunes a viernes de 9:00 a 18:00. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estaremos encantados de ayudarte.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6 mt-1 text-gray-500" />
              <div>
                <p>Coronel rodriguez 257</p>
                <p>Luján, Mendoza, CP.5500</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <p>+54 (261)-578891</p>
            </div>
            <div className="flex items-center gap-3">
              <DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
              <p>+549261889542</p>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-gray-500" />
              <p>infopa@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="space-y-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Apellido</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Celular</label>
            <input
              type="tel"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
