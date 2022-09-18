import Header from "components/Navbar"
import Head from "next/head"
import Sidebar from "components/Sidebar"
import Rightbar from "components/Rightbar"
import Kartlar from "components/Kategoriler"
function categories() {
  return (
    <>
      <Head>
        <title>Dessay- Kategoriler</title>
      </Head>

      <div className="dark:bg-[#111827]">
        <Header />
        <div className="w-full max-w-screen-xl mx-auto px-6 dark:bg-[#111827]">
          <div className="lg:flex -mx-6">
            <Sidebar />
            <div
              id="content-wrapper"
              className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5"
            >
              <div id="content" className="z-10">
                <div id="app" className="flex">
                  <div className="pb-10 w-full lg:pt-20">
                    <div className="flex">
                      <div className="markdown px-6 xl:px-12 mr-0 ml-0 w-full max-w-3xl mx-auto lg:ml-0 pl-8">
                        <div className="ml-5 relative overflow-hidden mb-8 mt-5 ">
                          <div className="mb-5">
                            <center>
                              <p className="text-2xl font-bold font-poppins text-white">
                                Kategoriler
                              </p>
                            </center>
                          </div>
                          <Kartlar />
                        </div>
                      </div>
                      <Rightbar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default categories
