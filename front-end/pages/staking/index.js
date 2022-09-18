import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Header from "components/Navbar";
import Sidebar from "components/Sidebar";
import Rightbar from "components/Rightbar";
import Logo from "public/logo.svg";
import { BigNumber, ethers } from "ethers";
import abi from "../../back-end/constants/abi.json";
import { useState } from "react";

const index = () => {
  async function stakeToken(amount) {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);
    try {
      const txResponse = await contract.stakeToken(amount);
    } catch (error) {
      console.log(error);
    }
  }

  async function unstakeToken(amount) {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);
    try {
      const txResponse = await contract.unstakeToken(amount);
    } catch (error) {
      console.log(error);
    }
  }
  const [miktar, setMiktar] = useState("");
  async function getStakedToken() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);

    const txResponse = await contract.getStakedBalance(accounts[0]);
    setMiktar(parseInt(txResponse, 16));
  }
  const [likit, setLikit] = useState("");
  async function getLiquidToken() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);

    const txResponse = await contract.balanceOf(accounts[0]);
    setLikit(parseInt(txResponse, 16));
  }
  const [rewards, setRewards] = useState([]);
  async function calcRewards() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);

    const txResponse = await contract.calcRewards();
    setRewards(txResponse);
  }

  async function claimRewards() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);

    const txResponse = await contract.claimRewards();
    console.log(txResponse);
  }
  const inputRef = useRef(null);
  async function unstakeClick() {
    if (inputRef.current.value == "") {
    } else {
      unstakeToken(ethers.BigNumber.from(inputRef.current.value));
    }
  }
  async function stakeClick() {
    if (inputRef.current.value == "") {
    } else {
      stakeToken(ethers.BigNumber.from(inputRef.current.value));
    }
  }
  useEffect(() => {
    if (rewards !== "") {
      //
    }
  }, [rewards]);
  useEffect(() => {
    if (miktar !== "") {
      //
    }
  }, [miktar]);
  useEffect(() => {
    if (likit !== "") {
      //
    }
  }, [likit]);
  useEffect(() => {
    getStakedToken();
    getLiquidToken();
    calcRewards();
  }, []);
  return (
    <>
      <Head>
        <title>Dessay- Yer İmleri</title>
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
                            <p className=" text-2xl font-bold font-poppins text-white flex justify-center">
                              Stake
                            </p>
                            <div className=" bg-slate-700 w-auto h-auto mt-[15px] rounded-xl p-2">
                              <div>
                                <p className="font-poppins m-3 ml-[15px] dark:text-slate-100">
                                  Toplanabilir Ödüller
                                </p>
                              </div>
                              <div className=" flex gap-4 mx-2 p-3">
                                <div className=" border border-slate-500  bg-slate-700 w-[200px] h-auto rounded-2xl p-1 ">
                                  <div className=" mt-1">
                                    <p className=" text-slate-200 text-sm ml-1 p-2">
                                      Kilitli Token
                                    </p>
                                  </div>
                                  <div className="flex justify-end p-2">
                                    <p className=" text-slate-200 mr-3">
                                      {((parseInt(rewards.writerRewards) +
                                        parseInt(rewards.userRewards)) *
                                        3) /
                                        4}
                                    </p>
                                    <Logo
                                      className=" bg-yellow-500 rounded-full"
                                      height={25}
                                      width={25}
                                    />
                                  </div>
                                </div>
                                <div className=" border border-slate-500  bg-slate-700 w-[200px] h-auto rounded-2xl p-1 ">
                                  <div className=" mt-1">
                                    <p className=" text-slate-200 text-sm ml-1 p-2">
                                      Likit Token
                                    </p>
                                  </div>
                                  <div className="flex justify-end p-2">
                                    <p className=" text-slate-200 mr-3">
                                      {((parseInt(rewards.writerRewards) +
                                        parseInt(rewards.userRewards)) *
                                        1) /
                                        4}
                                    </p>
                                    <Logo
                                      className=" bg-yellow-500 rounded-full"
                                      height={25}
                                      width={25}
                                    />
                                  </div>
                                </div>
                                <div className=" border border-slate-500  bg-slate-700 w-[200px] h-auto rounded-2xl p-1 ">
                                  <div className=" mt-1">
                                    <p className=" text-slate-200 text-sm ml-1 p-2">
                                      Yazar ödülleri
                                    </p>
                                  </div>
                                  <div className="flex justify-end p-2">
                                    <p className=" text-slate-200 mr-3">
                                      {parseInt(rewards.writerRewards, 16)}
                                    </p>
                                    <Logo
                                      className=" bg-yellow-500 rounded-full"
                                      height={25}
                                      width={25}
                                    />
                                  </div>
                                </div>
                                <div className=" border border-slate-500  bg-slate-700 w-[200px] h-auto rounded-2xl p-1 ">
                                  <div className=" mt-1">
                                    <p className=" text-slate-200 text-sm ml-1 p-2">
                                      Kullanıcı ödülleri
                                    </p>
                                  </div>
                                  <div className="flex justify-end p-2">
                                    <p className=" text-slate-200 mr-3">
                                      {parseInt(rewards.userRewards, 16)}
                                    </p>
                                    <Logo
                                      className=" bg-yellow-500 rounded-full"
                                      height={25}
                                      width={25}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="  bg-slate-700  h-[100px] rounded-xl p-2  flex  items-center justify-end mr-10 ">
                                  <div className=" ">
                                    <div className=" hover:scale-105 ease-in duration-100  cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-[15px] w-[200px] ">
                                      <p className="font-poppins flex justify-center text-white text-xl">
                                        Talep et
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" flex">
                              <div className=" mt-[20px] bg-slate-700 w-full h-[250px] rounded-xl p-2 flex flex-row justify-evenly">
                                <div className="flex flex-col justify-evenly ">
                                  <div className="flex justify-center">
                                    <p className="font-poppins dark:text-white text-2xl mb-[10px]">
                                      Stake/Unstake
                                    </p>
                                  </div>
                                  <div>
                                    <div className="flex flex-col items-center justify-center ">
                                      <div className=""></div>
                                      <div className="flex flex-col">
                                        <input
                                          ref={inputRef}
                                          type={"number"}
                                          className=" border border-slate-400 bg-slate-600  rounded-[8px] h-12  text-white text-center"
                                        ></input>
                                        <div className="flex justify-evenly">
                                          <button onClick={stakeClick}>
                                            <div className=" hover:scale-105 ease-in duration-100  cursor-pointer bg-blue-600  p-3 rounded-[15px] w-[100px] m-3 ">
                                              <p className="flex justify-center text-white text-xl">
                                                Stake
                                              </p>
                                            </div>
                                          </button>
                                          <button onClick={unstakeClick}>
                                            <div className=" hover:scale-105 ease-in duration-100  cursor-pointer bg-[#E64848] p-3 rounded-[15px] w-[100px] m-3 ">
                                              <p className="flex justify-center text-white text-xl">
                                                Unstake
                                              </p>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-evenly"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center  justify-evenly border-l border-slate-500 ml-10 px-10">
                                  <div>
                                    <div className="mr-[30px] ">
                                      <p className="  bg-clip-text text-white text-2xl ">
                                        Wallet Info
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex flex-col justify-evenly mb-[20px]">
                                    <div className="mr-[30px] ">
                                      <p className="  bg-clip-text text-white text-ll mb-[10px] p-3">
                                        Staked Token: {miktar}
                                      </p>
                                    </div>
                                    <div className="mr-[30px] ">
                                      <p className="  bg-clip-text text-white text-l mb-[10px] p-3">
                                        Likit Token: {likit}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
  );
};

export default index;
