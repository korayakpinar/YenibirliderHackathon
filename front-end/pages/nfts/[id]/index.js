import Header from 'components/Marketplace/Header';
import Foto from 'public/yan3.jpg';
import Image from 'next/image';
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
function index({ bilgis }) {
  return (
    <div className='bg-[#111827] h-screen overflow-hidden'>
      <Header />
      <div className='grid w-full mt-16'></div>
      <div className='grid m-2'>
        <div className='grid grid-cols-3 gap-2 mt-10'>
          <div className='grid place-items-center h-full col-span-2 row-span-3 overflow-hidden dark:border-gray-700 dark:border-2 rounded-lg'>
            <div className='grid dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-md h-full place-items-center'>
              <div className='grid w-3/4 h-3/4 place-items-center overflow-hidden rounded-lg'>
                <img
                  src='https://wallpaperaccess.com/full/7228837.jpg'
                  width='512'
                  height='512'
                  className='object-cover animate-pulse rounded-lg'
                />
              </div>
            </div>
          </div>
          <div className='grid  dark:border-gray-700 rounded-lg h-[150px]'>
            <div className='grid'>
              <div className='grid m-6'>
                <p className='font-roboto text-xl font-[800] dark:text-white'>
                  {bilgis.ad}
                </p>
                <div className='mt-2'>
                  <p className='font-sans dark:text-white'>Sahibi:</p>
                  <p className='font-roboto font-bold dark:text-white'>
                    korayakpinar
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='dark:bg-gray-800 shadow-md rounded-lg h-[150px]'>
            <div className='grid m-6'>
              <p className='font-poppins text-white font-bold text-lg'>
                Listelemeler
              </p>
              <center>
                <p className='mt-5 font-sans text-white font-medium text-m'>
                  Hiç listeleme olmamış...
                </p>
              </center>
            </div>
          </div>

          <div className='dark:bg-gray-800 shadow-md rounded-lg  h-[150px]'>
            <div className='grid m-6 place-items-center'>
              <button className='font-poppins w-3/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Teklif Gönder
              </button>
              <button className='font-poppins mt-3 w-3/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Direkt Satın Al
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex  w-full'>
        <div className='flex m-2  w-full'>
          <div className='w-full dark:border-gray-700 border-2 overflow-auto shadow-md rounded-lg h-[150px]'>
            <div className='grid m-3'>
              <p className='text-white text-lg font-bold ml-5 font-poppins'>
                Açıklama
              </p>
              <div className=''>
                <p className='font-roboto break-all m-5 text-white text-l'>
                  Merhaba
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async (id) => {
  const bilgis = [
    {
      id: '1',
      ad: 'Buz Küpü',
      aciklama: 'Eriyorum yok mu yetişen',
      ucret: '0.05',
      sure: '5 gün',
      olusturan: 'Koray AKPINAR',
    },
    {
      id: '2',

      ad: 'Dondurma Kabı',
      aciklama: 'Merhaba paşam',
      ucret: '0.05',
      sure: '5 gün',
      olusturan: 'Koray AKPINAR',
    },
    {
      id: '3',
      ad: 'Şampiyon fenerbahçe',
      aciklama: 'Merhaba paşam',
      ucret: '0.05',
      sure: '5 gün',
      olusturan: 'Koray AKPINAR',
    },
  ];
  return {
    props: {
      bilgis,
    },
  };
};
export const getStaticPaths = async () => {
  const bilgiler = [
    {
      id: '1',
      ad: 'Buz Küpü',
      aciklama: 'Eriyorum yok mu yetişen',
      ucret: '0.05',
      sure: '5 gün',
      olusturan: 'Koray AKPINAR',
    },
    {
      id: '2',

      ad: 'Dondurma Kabı',
      aciklama: 'Merhaba paşam',
      ucret: '0.05',
      sure: '5 gün',
      olusturan: 'Koray AKPINAR',
    },
    {
      id: '3',
      ad: 'Şampiyon fenerbahçe',
      aciklama: 'Merhaba paşam',
      ucret: '0.05',
      sure: '5 gün',
      olusturan: 'Koray AKPINAR',
    },
  ];
  const paths = bilgiler.map((nft) => {
    return {
      params: {
        id: nft.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default index;
