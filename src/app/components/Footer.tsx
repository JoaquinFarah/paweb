import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (    
    <footer style={{ backgroundColor: '#e5771b' }} className="relative bg-gradient-to-b from-gray-50 mt-10 pt-8 pb-6">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
        <div className="flex items-center flex-grow ml-10">
            <Link href="/">
              <Image                    
                src="/logonitido.png"
                alt="logo"
                width={350}
                height={350}
                className="object-contain max-h-16"
                priority
              />
            </Link>
          </div>
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Proalianza</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Contamos con una amplia experiencia en el ámbito industrial, lo que nos convierte en su mejor elección.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-github"></i>
            </button>
            </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Servicios</span>
                <ul className="list-unstyled">
                <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Capacitaciones</a>
                </li>
                <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Servicio Técnico</a>
                </li>
                <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Asesoramiento</a>
                </li>
                <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Alquileres</a>
                </li>
                </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contacto</span>
                <ul className="list-unstyled">
                <li>
                <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">fijo - 261578891</p>
                </li>
                <li>
                <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Coronel rodriguez 257, Luján, Mendoza</p>
                </li>
                <li>
                <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">infopa@gmail.com</p>
                </li>
                <li>
                <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">wsp - 261889542</p>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        {/* <hr className="my-6 border-blueGray-300">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by
            <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>.
            </div>
        
        </div>
        </div> */}
    </div>
    </footer>
  )
}
