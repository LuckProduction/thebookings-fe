import React from 'react';
import Button from '../components/button/Button';

function Homepage() {
  return (
    <section className="bg-color-primary-500 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-poppins font-bold md:text-5xl xl:text-6xl dark:text-white">
            <span className="text-color-warning-500">
              TheBook.ings
            </span>
            {' '}
            <br />
            Aplikasi rental ruangan
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-color-primary-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Booking hotel, Booking tempat konser, sampai booking gedung nikah, semua mudah dengan
            {' '}
            <span className="text-color-warning-300">TheBook.ings</span>
          </p>
          <Button size="large">
            Learn More
          </Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
          <div className="hidden lg:block max-w-56 p-5 bg-white rounded-lg shadow absolute bottom-10 transition hover:rotate-2">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-color-primary-600">Booking hotel</h5>
            <p className="font-normal text-color-primary-700 text-xs">Pilih hotel favorit, nikmati penawaran menarik</p>
          </div>
          <div className="hidden lg:block max-w-56 p-5 bg-white rounded-lg shadow absolute right-2 top-6 transition hover:rotate-2">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-color-primary-600">Stage konser</h5>
            <p className="font-normal text-color-primary-700 text-xs">Konser? Gass!!!</p>
          </div>
          <div className="hidden lg:block max-w-56 p-5 bg-white rounded-lg shadow absolute top-20 -left-10 transition hover:rotate-2">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-color-primary-600">Gedung Nikah</h5>
            <p className="font-normal text-color-primary-700 text-xs">Cie Cieeeee!!!!</p>
          </div>
          <img src="/rocket.png" alt="mockup" className="" />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
