import Link from 'next/link';

function Kategoriler() {
  const kategoriler = [
    { baslik: 'Felsefe', id: '1' },
    { baslik: 'Bilim Kurgu', id: '2' },
    { baslik: 'Teknoloji', id: '3' },
    { baslik: 'Bilim', id: '4' },
    { baslik: 'Sanat', id: '5' },
    { baslik: 'Müzik', id: '6' },
    { baslik: 'Programlama', id: '7' },
    { baslik: 'Biyoloji', id: '8' },
    { baslik: 'Fizik', id: '9' },
    { baslik: 'Kimya', id: '10' },
    { baslik: 'Matematik', id: '11' },
    { baslik: 'Evrim', id: '12' },
    { baslik: 'Havacılık', id: '13' },
    { baslik: 'Coğrafya', id: '14' },
    { baslik: 'Film İncelemesi', id: '15' },
    { baslik: 'Bilgisayar Bilimleri', id: '16' },
    { baslik: 'Kripto', id: '17' },
  ];
  return (
    <div>
      <div className='mt-[50px] grid grid-cols-3 grid-rows-3 gap-x-8  gap-y-5 w-full h-full'>
        {kategoriler.map((kategori) => (
          <Link href='/category/[id]' as={`/category/${kategori.id}`}>
            <a>
              <div
                style={{
                  backgroundImage: `url('/categories/${kategori.id}.jpg')`,
                }}
                className=' w-[170px] ml-[11px] h-[170px] border-2 shadow-sm shadow-slate-300 transition ease-in-out hover:scale-105 duration-10 grid place-items-center dark:border-gray-700 bg-center bg-cover rounded-t-lg'
              ></div>
              <p className='text-white shadow-sm shadow-cyan-500 font-bold flex justify-center border-2 border-slate-700 border-b-cyan-700 font-poppins'>
                {kategori.baslik}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Kategoriler;
