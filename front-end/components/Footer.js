import Link from "next/link"
import Logo from "public/beyazlogo.svg"
function Footer() {
  return (
    <footer className="font-poppins mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="py-10">
        <center>
          <a>
            <Logo width={100} height={100} />
          </a>
        </center>
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2022 Dessay - Tüm Hakları Saklıdır.
        </p>
        <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <Link href="privacy/">
            <a>Gizlilik Politikası</a>
          </Link>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <Link href="/">
            <a>API</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
