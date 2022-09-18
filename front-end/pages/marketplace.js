import Header from 'components/Marketplace/Header';
import Hero from 'components/Marketplace/Hero';
import { useEffect, useState } from 'react';
import Head from 'next/head';
export default function Marketplace() {
  return (
    <div className='overflow-hidden'>
      <>
        <Head>
          <title>Dessay Market - Ana Sayfa</title>
        </Head>
        <Header />
        <Hero />
      </>
      {/* (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42]">
          <button
            className="border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-white"
            onClick={() => connectWallet("injected")}
          >
            Cüzdana Bağlan
          </button>
          <div className="text-lg text-center text=[#282b2f] font-semibold mt-4">
            Cihazınızda Metamask&apos;in indirilmiş olması gerekmektedir.
          </div>
        </div>
      ) */}
    </div>
  );
}
