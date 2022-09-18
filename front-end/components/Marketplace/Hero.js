import Link from "next/link"
function Hero() {
  return (
    <div className="relative">
      <div className="before:content-[''] before:bg-slate-700 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-100 before:blur-lg before:brightness-50">
        <div className="flex h-screen relative justify-center flex-wrap items-center">
          <div className="w-1/2">
            <div className="relative text-white text-[46px] font-semibold">
              Oku,beğen,kazan,sat
            </div>
            <div className="text-[#EBC7E8] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]">
              Dessay Rozet Marketi ile kazandığın rozetleri satabilir veya
              satışta olanları satın alabilirsin.
            </div>
            <div className="flex">
              <Link href="nfts/explore">
                <a>
                  <button className="relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer">
                    Keşfet
                  </button>
                </a>
              </Link>
              <Link href='/badges'>
                <a>
                  <button className="relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer">
                   Satışa Sun
                  </button>
                </a>
              </Link>

            </div>
          </div>
          <div className="rounded-[3rem] mt-8">
            <img
              classNameName="rounded-t-lg"
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <div className="h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white">
              <img
                classNameName="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className="flex flex-col justify-center ml-4">
                <div className="">Deniz Kızının Doğuşu</div>
                <a className="text-[#1868b7]">Koray Akpınar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
