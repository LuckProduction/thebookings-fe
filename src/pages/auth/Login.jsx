import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

function Login() {
  // const navigate = useNavigate();
  return (
    <section className="bg-white flex h-screen overflow-hidden flex-row-reverse">
      <div className="h-screen flex-1 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-white">
        <div className="w-full bg-white rounded-lg shadow-md border border-color-primary-100 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-color-primary-500 md:text-2xl">
              Masuk ke akun anda
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-color-primary-500">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-color-primary-300 text-color-primary-800 sm:text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-color-primary-600 focus:border-color-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-color-primary-500 ">Kata Sandi</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-color-primary-300 text-color-primary-800 sm:text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-color-primary-600 focus:border-color-primary-600 block w-full p-2.5" required="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-color-primary-500">Ingat saya</label>
                  </div>
                </div>
                <a href="asdas" className="text-sm font-medium text-color-primary-500 hover:underline">Lupa kata sandi?</a>
              </div>
              <Button className="w-full" color="primary">
                Masuk
              </Button>
              <p className="text-sm font-light text-color-primary-500">
                Belum Punya Akun?
                {' '}
                <Link to="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Daftar</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-color-primary-500 flex-1 h-screen lg:flex items-center justify-center relative hidden">
        <img src="/world.png" alt="mockup" className="w-4/5" />
        <img src="/rocket-fly.png" alt="mockup" className="w-1/5 absolute top-24 -right-16 -rotate-[32deg]" />
      </div>
    </section>
  );
}

export default Login;
