import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FaRegHeart, FaEdit } from "react-icons/fa";
import Cards from "./profile/[id]/Cards";
import { ethers } from "ethers";
import abi from "../back-end/constants/abi.json";

import { useState, useEffect } from "react";
import Modal1 from "./profile/[id]/Modal1";
import Modal2 from "./profile/[id]/Modal2";
import Modal3 from "./profile/[id]/Modal3";
import Header from "components/Navbar";

const Profilex = () => {
  const [modal1On, setModal1On] = useState(false);
  const [choice1, set1Choice] = useState(false);

  const clicked1 = () => {
    setModal1On(true);
  };

  const [modal2On, setModal2On] = useState(false);
  const [choice2, set2Choice] = useState(false);

  const clicked2 = () => {
    setModal2On(true);
  };

  const [modal3On, setModal3On] = useState(false);
  const [choice3, set3Choice] = useState(false);

  const clicked3 = () => {
    setModal3On(true);
  };

  /*useEffect(() => {
    if (!isConnected) {
      location.replace('/home');
    } else {
      setLoaded(true);
    }
  }, []);
  if (!loaded) {
    return <div></div>;
  } */
  const [loaded, setLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(false);
  const [signer, setSigner] = useState();
  const [isConnecting, setIsConnecting] = useState(false);
  const [correctNetwork, setCorrectNetwork] = useState(false);
  async function connect() {
    if (typeof window.ethereum !== undefined) {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log("Metamask mevcut değil!");
          return;
        }
        let chainId = await ethereum.request({ method: "eth_chainId" });
        const mumbaiChainId = "0x13881";
        if (mumbaiChainId !== chainId) {
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        setCurrentAccount(accounts[0]);
        setIsConnecting(true);

        window.localStorage.setItem("connected", "injected");
        setIsConnecting(false);
        setIsConnected(true);
        /*let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );*/
        //setSigner(await connectedProvider.getSigner());

        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        const ourSigner = await connectedProvider.getSigner();

        const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
        const contract = new ethers.Contract(contractAddress, abi, ourSigner);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  /**
   * pp,name,bio,followers,followed,writings
   */

  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [followed, setFollowed] = useState("");
  const [biyografi, setBiyografi] = useState("");
  const [writingCount, setWritingCount] = useState("");
  const [yazivar, setYaziVar] = useState(false);
  const [yazilar, setYazilar] = useState([]);
  const [fotograf, setFotograf] = useState("");
  async function getProfileForUser() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);

    const ourProfile = await contract.getProfile(accounts[0]);
    setWritingCount(parseInt(ourProfile[5]));
    setFollowed(parseInt(ourProfile[4]));
    setFotograf(ourProfile[0]);
    setFollowers(parseInt(ourProfile[3]));
    if (ourProfile[2] == "") {
      var biyografiornek =
        "Sağ üst köşedeki butona tıklayarak biyografini güncelle. Mesela nelerden hoşlandığını yazabilirsin...";
      setBiyografi(biyografiornek);
    } else {
      setBiyografi(ourProfile[2]);
    }

    if (ourProfile[1] == "") {
      var adilk = accounts[0].slice(0, 5);
      var adiki = accounts[0].slice(-4);
      setUsername(`${adilk}...${adiki}`);
    } else {
      setUsername(ourProfile[1]);
    }

    const tags = await contract.getTopicsForAddress(accounts[0]);
    console.log(parseInt(tags[1]));
    const Writes = await contract.getWrites(accounts[0]);
    console.log(Writes);
    console.log(Writes.toString());
    if (Writes.length < 1) {
      setYaziVar(false);
    } else {
      setYaziVar(true);
      setYazilar(Writes);
    }
  }

  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" &&
      window.localStorage.getItem("connected")
    ) {
      connect();
      getProfileForUser();
    }
  }, []);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        connect();
      });
    }
  }, []);

  const tags = [
    {
      id: "1",
      tagad: "NFT",
    },
    {
      id: "2",
      tagad: "Blokzincir",
    },
    {
      id: "3",
      tagad: "Doğa",
    },
  ];
  return (
    <>
      <Head>
        <title>Dessay - Profil</title>
      </Head>
      <div className="bg-[#111827] overflow-y-auto h-screen flex justify-between">
        <Header />
        <div>
          <div className=" mt-[120px] flex justify-center bg-slate-700 ml-[90px] rounded-lg p-2 ">
            <div className=" flex justify-center grid-cols-2 ">
              <div className=" bg-slate-600 rounded-lg w-[300px] border-2 border-cyan-600 hover:scale-105 ease-in duration-100">
                <Link href="/profile">
                  <a>
                    <p className="font-poppins flex justify-center font-bold dark:text-white">
                      Yazılarım
                    </p>
                  </a>
                </Link>
              </div>
              <div className="bg-slate-600 rounded-lg w-[300px] ml-[70px] hover:scale-105 ease-in duration-100">
                <Link href="/badges">
                  <a>
                    <p className="font-poppins flex justify-center font-bold dark:text-white">
                      Rozetlerim
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="items-center grid grid-cols-2 grid-rows-2 h-auto w-auto ml-12 ">
            {yazivar ? (
              yazilar?.map((yazi) => (
                <Cards
                  header={yazi.header}
                  ipfs={yazi.ipfsaddress}
                  id={yazi.id}
                />
              ))
            ) : (
              <div className="flex ml-10 mt-8 mb-1 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-[100px]">
                <div className="text-xl w-full">
                  <center>
                    <p className="text-white font-poppins">Hiç yazın yok...</p>
                  </center>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-10 h-full sticky mt-[80px] w-[480px]">
          <div className="w-400 h-150 m-auto bg-slate-800 rounded-xl flex p-4">
            {/* Profile Photo */}
            <div
              onClick={clicked2}
              className="  z-50 absolute right-12 bg-slate-700 border-2 border-slate-600 border-dashed rounded-full p-2 max-h-9 w-max flex-row items-center cursor-pointer hover:scale-105 ease-in duration-100"
            >
              <FaEdit className="text-white" />
            </div>
            {modal2On && (
              <Modal2 setModal2On={setModal2On} set2Choice={set2Choice} />
            )}
            <img
              className="rounded-b-full  hover:scale-105 ease-in duration-100"
              src={`${fotograf}`}
              alt="/"
              width={75}
              height={75}
            />
            {/* User Name and Follow Data */}
            <div>
              <div className="flex p-4">
                <p className="dark:text-white font-poppins">
                  {isConnected ? username : "Zedit#3131"}
                </p>
                {/* <FaRegHeart className=' ml-20' size={25}/> */}
              </div>
              {/* Follow data */}
              <div className=" grid grid-cols-3 grid-rows-1 ">
                <div className=" mr-4">
                  <p className=" p-4 font-poppins text-xs dark:text-white hover:scale-105 ease-in duration-100 ">
                    Followers
                  </p>
                  <p className=" font-poppins text-xs dark:text-white flex justify-center">
                    {followers}
                  </p>
                </div>
                <div className=" mr-4">
                  <p className=" p-4 font-poppins text-xs dark:text-white hover:scale-105 ease-in duration-100">
                    Followed
                  </p>
                  <p className=" font-poppins text-xs dark:text-white flex justify-center">
                    {followed}
                  </p>
                </div>
                <div className=" mr-4">
                  <p className=" p-4 font-poppins text-xs dark:text-white hover:scale-105 ease-in duration-100 ">
                    Writings
                  </p>
                  <p className=" font-poppins text-xs dark:text-white flex justify-center">
                    {writingCount}
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          {/* Bio */}
          <div className="w-400 h-150 m-auto bg-slate-800 rounded-xl flex justify-center p-4 mt-2">
            <div>
              <div
                onClick={clicked1}
                className="z-50 absolute right-12 bg-slate-700 border-2 border-slate-600 border-dashed rounded-full p-2 max-h-9 w-max flex-row items-center cursor-pointer hover:scale-105 ease-in duration-100"
              >
                <FaEdit className="text-white" />
              </div>
              <p className="font-poppins dark:text-white max-w-xs text-xs">
                {biyografi}
              </p>
              {modal1On && (
                <Modal1 setModal1On={setModal1On} set1Choice={set1Choice} />
              )}
            </div>
          </div>
          {/* Tags */}
          <div>
            <div className=" h-150  bg-slate-700 rounded-xl flex justify-center p-4 mt-2">
              <div
                onClick={clicked3}
                className=" z-50 absolute right-12 bg-slate-600 border-2 border-slate-500 border-dashed rounded-full p-2 max-h-9 w-max flex-row items-center cursor-pointer hover:scale-105 ease-in duration-100"
              >
                <FaEdit className="text-white" />
              </div>
              {modal3On && (
                <Modal3 setModal3On={setModal3On} set3Choice={set3Choice} />
              )}
              <div className="o dive overflow-auto overflow-x-hidden">
                <p className=" text-lg font-bold font-poppins text-white">
                  #Tags
                </p>
                <div className="grid grid-cols-3 grid-rows-2 mt-2 place-items-stretch">
                  {tags.map((tagler) => (
                    <Link href="/succubus">
                      <a>
                        <p className="mr-2 w-auto h-auto text-white font-poppins m-auto bg-slate-600 rounded-xl flex justify-center p-1 hover:scale-105 ease-in duration-100">
                          {tagler.tagad}
                        </p>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className='flex justify-end'>
                <div className='w-max h-auto bg-slate-500 rounded-3xl p-3 shadow-sm shadow-slate-300'>
                    <Link href='/succubus'>
                        <a>
                            Edit Your Profile
                        </a>
                    </Link>
                </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Profilex;
