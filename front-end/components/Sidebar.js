import {
  BiHomeCircle,
  BiCategory,
  BiShoppingBag,
  BiNotification,
} from "react-icons/bi"
import Link from "next/link"
import { BsBookmarks, BsPeople } from "react-icons/bs"
import { VscSettingsGear } from "react-icons/vsc"
function Sidebar() {
  return (
    <div
      id="sidebar"
      className="font-poppins fixed inset-0 h-full dark:bg-[#111827] bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden pt-16"
    >
      <div
        id="navWrapper"
        className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white"
      >
        <nav
          id="nav"
          className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)"
        >
          <div className="relative -mx-2 w-24 mb-8 lg:hidden">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
          <div className="mb-10">
            <Link href="/home">
              <a className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium text-gray-600">
                <BiHomeCircle size={20} className="dark:text-white" />
                <span className="ml-3 dark:text-white">Ana Sayfa</span>
              </a>
            </Link>
            <Link href="/categories">
              <a className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium mt-3 lg:mt-1 text-gray-600">
                <BiCategory size={20} className="dark:text-white" />
                <span className="ml-3 dark:text-white">Kategoriler</span>
              </a>
            </Link>
            <Link href="/marketplace">
              <a className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium mt-3 lg:mt-1 text-gray-600">
                <BiShoppingBag size={20} className="dark:text-white" />
                <span className="ml-3 dark:text-white">Rozet Mağazası</span>
              </a>
            </Link>
            <Link href="/notifications">
              <a className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium mt-3 lg:mt-1 text-gray-600">
                <BiNotification size={20} className="dark:text-white" />
                <span className="ml-3 dark:text-white">Bildirimler</span>
              </a>
            </Link>

            <Link href="/bookmarks">
              <a className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium mt-3 lg:mt-1 text-gray-600">
                <BsBookmarks size={20} className="dark:text-white" />
                <span className="ml-3 dark:text-white">Yer İmleri</span>
              </a>
            </Link>
          </div>
          <div className="mb-8">
            <Link href={'/faq'}>
              <a>
                <h5 className="mb-3 lg:mb-2  uppercase tracking-wide font-bold text-sm text-gray-500 dark:text-white hover:scale-105 ease-in duration-100">
                  Nasil Kullanilir?
                </h5>
              </a>
            </Link>

            
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
