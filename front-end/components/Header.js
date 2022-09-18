import Link from "next/link"
import Logo from "public/beyazlogo.svg"
function Headir() {
  return (
    <>
      <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 m-0">
        <nav
          aria-label="Global"
          className="mx-auto max-w-container px-4 sm:px-6 lg:px-8"
        >
          <div className="relative flex items-center py-[1rem]">
            <a className="mr-auto flex-none text-slate-900">
              <Logo height={50} width={50}  />
            </a>
            <div className="font-poppins hidden lg:flex lg:items-center text-slate-200">
              <a href="/categories">Kategoriler</a>
              <Link href="faq">
                <a className="ml-8">Nasıl Kullanılır?</a>
              </Link>
              <Link href={'https://blockchaindeu.com/'}>
                <a className="ml-8">
                  Hakkımızda
                </a>              
              </Link>

            </div>

            <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
              <Link href="/post">
                <a className="font-poppins inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8">
                  <span>
                    Yazı yaz <span aria-hidden="true">→</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Headir
