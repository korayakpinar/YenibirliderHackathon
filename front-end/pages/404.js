import Link from 'next/link';
import Head from 'next/head';
import Resim from '../public/yazi.png';
import Image from 'next/image';
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Nereye Hemşerim</title>
      </Head>
      <div className='h-screen dark:bg-gray-800'>
        <div className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 dark:bg-gray-800 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
          <div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
            <div className='relative'>
              <div className='absolute'>
                <div className=''>
                  <h1 className='my-2 font-poppins text-[#FF7777] font-bold text-2xl'>
                    Hoop! Hemşerim nereye?
                  </h1>
                  <p className='font-bold font-poppins my-2 text-[#FF7777]'>
                    Galiba hatalı bir sayfaya girmeye çalıştın. Seni doğru
                    yönlendirmek bizim işimiz.
                  </p>
                  <Link href='home'>
                    <a>
                      <button className=' font-poppins font-bold sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50'>
                        Ana Sayfa
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
