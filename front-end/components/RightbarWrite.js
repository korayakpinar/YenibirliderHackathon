import { AiFillAccountBook } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"
import { FaShare } from "react-icons/fa"
function RightbarWrite() {
  return (
    <div className="font-poppins hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
      <div className="rounded-b-lg bg-gray-800"></div>
      <div className="h-full flex flex-col items-center justify-between sticky pt-12 pb-4 -mt-12 top-16">
        <div className="mb-8 fixed">
          <div className="flex flex-col items-center pb-10">
            <button className="mb-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Yazı Paylaş
            </button>
            <img
              src="https://flowbite.com/docs/images/examples/image-4@2x.jpg"
              className="m-5 w-24 h-24 rounded-full shadow-lg"
            ></img>
            <p className="font-sans text-white font-bold">Koray Akpınar</p>
            <center>
              <p className="mt-5 font-sans text-white font-medium">
                &quot; Dokuz eylül cs okumayı severim &quot;
              </p>
            </center>
            <div className="mt-5 gap-1 grid w-full grid-cols-2 bg-[#111827] overflow-hidden">
              <div className=" m-4 w-full">
                <button className="w-full h-[50px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Takip Et
                </button>
              </div>
              <div className=" m-4 w-full">
                <button className="ml-2 w-[50px] h-full text-white shadow-md border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2.5 text-center dark:bg-[#111827] dark:hover:bg-blue-700 ">
                  <BsShareFill className="mr-2" size={20} />
                </button>
              </div>
              <div></div>
            </div>
            {/*
            Div gerekirse diye, görüşürüz
            <div className="grid w-full h-[100px] grid-cols-3 bg-red-500 mt-8 gap-3 place-items-center"></div>
        */}
          </div>
        </div>

        {/* <div id="widget">
          <p className="mt-4 text-gray-700">
            <a href="" className="text-gray-700 dark:text-white">
              Seni sınırlayan tek şey "düşüncelerin"
            </a>
          </p>
          <div className="mt-2">
            <a
              href=""
              className="text-sm text-gray-800 font-semibold hover:underline dark:text-white"
            >
              Daha Fazla →
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default RightbarWrite
