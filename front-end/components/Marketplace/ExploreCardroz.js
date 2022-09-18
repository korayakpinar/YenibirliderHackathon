import Link from "next/link"
import Modalroz from "pages/badges/Modalroz"
import { useState } from "react"
function ExploreCard() {
  const [modalrozOn, setModalrozOn] = useState(false)
  const [choiceroz, setrozChoice] = useState(false)

  const clickedroz = () => {
    setModalrozOn(true)
  }
  return (
    <div className=" m-2">
      <section className="bg-dark-blue-card-bg p-5  rounded-xl max-w-xs shadow-2xl dark:bg-[#15253f]">
        <Link href="[id]" as={"1"}>
          <a className="group block relative rounded-md overflow-hidden">
            <div className="invisible group-hover:visible absolute inset-0 bg-cyan/50">
              <img
                src="https://raw.githubusercontent.com/boedegoat/nft-card/a27e706cf0a9df791e1bc2c1f04cd1287ca1ccf6/images/icon-view.svg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt="eye icon"
              />
            </div>
            <img
              src="https://github.com/boedegoat/nft-card/blob/main/images/image-equilibrium.jpg?raw=true"
              alt="equilibrium"
            />
          </a>
        </Link>
        <h1>
          <a
            href="#"
            className="block text-white my-4 font-semibold text-lg hover:text-cyan"
          >
            Buz Küpü 3429/5000
          </a>
        </h1>

        <p className="text-soft-blue font-light dark:text-white">
          Bazen Go Programlar bazen solidity yazar
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex text-cyan space-x-2">
            <img
              src="https://raw.githubusercontent.com/boedegoat/nft-card/a27e706cf0a9df791e1bc2c1f04cd1287ca1ccf6/images/icon-ethereum.svg"
              alt="ethereum icon"
              width={"30px"}
            />
            <p className="dark:text-white font-bold">0.041 ETH</p>
          </div>
          <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
            <img
              src="https://raw.githubusercontent.com/boedegoat/nft-card/a27e706cf0a9df791e1bc2c1f04cd1287ca1ccf6/images/icon-clock.svg"
              alt="clock icon"
            />
            <p className="dark:text-white font-bold">3 gün kaldı</p>
          </div>
        </div>

        <hr className="border-dark-blue-line mt-6" />

        <div className="flex items-center space-x-2 mt-4">
          <img
            src="https://raw.githubusercontent.com/boedegoat/nft-card/main/images/image-avatar.png"
            alt="avatar"
            className="w-8 h-8"
          />
          <p className="text-white">
            <span className="text-soft-blue font-bold">Oluşturucu:</span>
            <a href="#" className="hover:text-cyan">
              Koray Akpınar (0xecd....1907)
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 justify-center">
          <button
            onClick={clickedroz}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-3/4"
          >
            Satışa Çıkar
          </button>
          {modalrozOn && (
            <Modalroz
              setModalrozOn={setModalrozOn}
              setrozChoice={setrozChoice}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default ExploreCard
