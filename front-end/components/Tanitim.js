import Link from "next/link";
import Image from "next/image";
function Tanit() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 z-10 overflow-hidden pl-[50%]">
        <img
          src="header.png"
          alt=""
          className="-ml-[39rem] w-[113.125rem] max-w-none"
        />
      </div>
      <div className="relative -mt-[5.75rem] overflow-hidden pt-12 md:pt-[5.75rem]">
        <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('../public/header.png')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block"></div>
        <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
          <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
            <h1 className="font-poppins text-base font-semibold leading-7 text-sky-500">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-400">
                Özgür olmak senin elinde.
              </span>
            </h1>
            <p className="font-poppins mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl sm:leading-[3.5rem]">
              Dessay ile{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                fikir özgürlüğü
              </span>{" "}
              artık senin ellerinde
            </p>

            <p className="font-roboto mt-4 text-base leading-7 text-slate-300">
              Dessay fikirlerini özgürce belirtip, anonimliğini kaybetmeden
              özgürce yazılar ve makaleler paylaşabileceğin merkeziyetsiz bir
              platformdur.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="home">
                <a className="font-poppins animate-bounce inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-800 text-white hover:bg-slate-700">
                  <span>Yazıları incele</span>
                </a>
              </Link>
              <Link href="post">
                <a className="font-poppins inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 border dark:border-black dark:bg-white text-slate-900 ring-1 ring-slate-900/10 dark:hover:scale-105 ease-in duration-100 hover:ring-slate-900/15 ">
                  <span>
                    Hemen yazmaya başla
                    <span
                      aria-hidden="true"
                      className="text-black/25 sm:inline"
                    >
                      →
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="mt-6 flex">
              <div className="relative flex-shrink-0 p-4">
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative z-10 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5">
                  <img className="h-[404px] w-[336px]" src="yan2.jpg" />
                </div>
                <div className="z-0">
                  <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-14 flex-shrink-0 p-4">
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5">
                  <img className="h-[404px] w-[336px]" src="yan1.jpg" />
                </div>
                <div>
                  <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute right-0 -top-20 -bottom-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute top-[calc(100%-1px)] right-10 -mb-px flex h-8 items-start overflow-hidden">
                    <div className="flex -mt-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0 p-4">
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5">
                  <img className="h-[404px] w-[336px]" src="yan3.jpg" />
                </div>
                <div>
                  <div className="absolute -left-12 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 sm:z-auto">
          <div className="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
            <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="flex">
                <div className="p-0.5"></div>
                <div className="ml-6">
                  <h2 className="font-poppins text-sm font-semibold leading-6 text-slate-300">
                    Eşit bir dünya
                  </h2>
                  <p className="font-poppins mt-2 text-sm leading-6 text-slate-400">
                    Dünyada egitime ulaşamadığından boşa harcanan binlerce kişinin eğitime sansürsüz ve maddi desteklerle ulaşamasını sağlamayı amaçlıyoruz.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="p-0.5"></div>
                <div className="ml-6">
                  <h2 className="font-poppins text-sm font-semibold leading-6 text-slate-300">
                    Kim olduğun önemli değil
                  </h2>
                  <p className="font-poppins mt-2 text-sm leading-6 text-slate-400">
                    Dessay'de ırk ve cinsiyet gibi etiketlerden ötesini sadece bilginin önemsendiği bir yer.  
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="p-0.5"></div>
                <div className="ml-6">
                  <h2 className="font-poppins text-sm font-semibold leading-6 text-slate-300">
                    Kimseden çekinme
                  </h2>
                  <p className="font-poppins mt-2 text-sm leading-6 text-slate-400">
                    Hiç bir otorite altında kalmadan toplum için toplum tarafından yapılmış Dessay'de çekinmeden bildiklerini söyleyebilirsin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
      </div>
    </>
  );
}

export default Tanit;
