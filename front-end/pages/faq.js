import Head from "next/head"
import Header from "components/Navbar"
import Sidebar from "components/Sidebar"
import Rightbar from "components/Rightbar"
import Link from "next/link"

const stil = {
  diskutu: `p-4 mt-10 dark:border-white border rounded-lg`,
  yazilar: `text-white font-poppins mt-2`,
  h2: `text-xl font-poppins text-white`,
}
function faq() {
  return (
    <>
      <Head>
        <title>SSS</title>
        <meta
          name="description"
          content="Dessay - Merkeziyetsiz yazı ve makale paylaş"
        />
        <link rel="icon" href="/logo.ico" />
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
                      <div class="max-w-2xl mx-auto  p-16 rounded">
                        <div id="accordion-collapse" data-accordion="collapse">
                          <h2 id="accordion-collapse-heading-1">
                            <button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Yazılar</span>
                            <svg data-accordion-icon class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                          </h2>
                          <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                              <p class="mb-2 text-gray-500 dark:text-gray-400">Yazıları oluşturmak için sağdaki bardaki yazı paylaş butonunu kullanabilirsin resimler ile yazıyı destekleyip okuyucular için NFT şeklinde olan rozetlerı ekleyebilirsin.</p>
                              <p class="text-gray-500 dark:text-gray-400"> Yazıları <a
                                  href="home"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"> ana sayfadan</a> okuyabilirsin <a
                                  href="categories"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"> kategorilere </a> gidip ilgilendiğin katagorilerden istediklerini okuyabilirsin
                                </p>
                            </div>
                          </div>
                          <h2 id="accordion-collapse-heading-2">
                            <button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>Rozetler</span>
                            <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                          </h2>
                          <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div class="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
                              <p class="mb-2 text-gray-500 dark:text-gray-400">Rozetler Dessay'ın işlevsel nftleridir yazarlar bunları çeşitli işlevler için yaratabilir, isterseniz nft flip(al sat) isterseniz işlevselliğini kullanmak için <a
                                  href="marketplace"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"> rozet mağazasını</a> kullanabilirsiniz.</p>
                              <p class="text-gray-500 dark:text-gray-400"> Rozetlerin dağıtımını yazar istediği şekilde yapabilir düşürdüğün rozetleri <a
                                  href="badges"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"> rozetlerim </a> kısmından satabilirsin</p>
                            </div>
                          </div>
                          <h2 id="accordion-collapse-heading-3">
                            <button type="button" class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Stake</span>
                            <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                          </h2>
                          <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                            <div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
                              <p class="mb-2 text-gray-500 dark:text-gray-400"> Dessay power kazanmak için Dessay token staklemen gerekir <a
                                  href="staking"
                                  class="text-blue-600 dark:text-blue-500 hover:underline">Stake</a> sayfasından stake miktarı arttırabilir ve kazandığın tokenleri görebilirsin.</p>
                              <p class="mb-2 text-gray-500 dark:text-gray-400"> Dessay'da kesilen feeler bir havuzda toplanıp tekrar Dessay'a katkı sağlayanlara döner ve bu şekilde Dessay kullanıcıları her hareketiyle bir birini desteklemiş olurlar. </p>

                            </div>
                          </div>
                          
                        </div>


                        <script src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"></script>
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

export default faq
