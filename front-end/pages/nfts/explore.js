import Header from 'components/Marketplace/Header';
import ExploreCard from 'components/Marketplace/ExploreCard';
import Head from 'next/head';
import { useState } from 'react';

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
    sure: '3 gün',
    olusturan: 'Koray AKPINAR',
  },
  {
    id: '3',
    ad: 'Şampiyon fenerbahçe',
    aciklama: 'Merhaba paşam',
    ucret: '0.05',
    sure: '2 gün',
    olusturan: 'Koray AKPINAR',
  },
];
function explore() {
  const [query, setQuery] = useState('');
  return (
    <>
      <Head>
        <title>Dessay Market - Keşfet</title>
      </Head>
      <div className='overflow-hidden'>
        <Header />
        <div className='font-outfit dark:bg-[#0e182b] min-h-screen  '>
          <div className='pt-[100px] flex items-center justify-center'>
            <p className=' text-2xl font-poppins text-white font-bold'>
              Keşfet
            </p>
          </div>
          <div className='flex mt-5 py-5 px-20 h-[100px] rounded-lg bg-[#111827] shadow-md'>
            <div className='flex-none mx-5 w-1/4 ml-5 h-[50px]'>
              <input
                id='aramakutusu'
                className='p-4 rounded-lg h-full w-full text-white font-poppins bg-gray-800'
                placeholder='Rozet Ara...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className='grow'></div>
            <div className='mt-2 flex-none w-[200px]'>
              <button
                type='button'
                class='dark:bg-gray-700 inline-flex w-full justify-center rounded-md bg-white px-2 p-2 text-sm font-medium text-white shadow-sm  focus:outline-none '
                id='menu-button'
                aria-expanded='true'
                aria-haspopup='true'
              >
                Filtrele
                <svg
                  className='-mr-1 ml-2 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-4  gap-5 place-items-center ml-5 mr-5 pt-[30px]'>
            {bilgiler
              .filter((bilgi) => bilgi.ad.toLowerCase().includes(query))
              .map((bilgi) => (
                <ExploreCard
                  id={bilgi.id}
                  ad={bilgi.ad}
                  aciklama={bilgi.aciklama}
                  ucret={bilgi.ucret}
                  sure={bilgi.sure}
                  olusturan={bilgi.olusturan}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default explore;
