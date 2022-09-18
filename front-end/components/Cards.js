import Image from "next/image";
import Link from "next/link";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiFillWarning,
} from "react-icons/ai";
import abi from "../back-end/constants/abi.json";
import { FaComment, FaComments, FaShare, FaBookmark } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { ImArrowUp } from "react-icons/im";
import { useEffect, useState } from "react";
import ModalWarning from "./ModalWarn";
import { ethers } from "ethers";
import { useRouter } from "next/router";

import Router from "next/router";
function Cards({ yazilar }) {
  const [isActive, setIsActive] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [modal1On, setModal1On] = useState(false);
  const [choice1, set1Choice] = useState(false);

  const clicked1 = () => {
    setModal1On(true);
  };
  const yorumac = () => {
    setIsActive((current) => !current);
  };

  const [liked, setLiked] = useState(false);

  const begen = () => {
    setLiked((current) => !current);
  };

  const [saved, setSaved] = useState(false);

  const kaydet = () => {
    setSaved((current) => !current);
  };
  const [yorumicerik, setYorumIcerik] = useState("");
  const yoruminput = (event) => {
    setYorumIcerik(event.target.value);
  };
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

        await ethereum.request({
          method: "eth_requestAccounts",
        });
        window.localStorage.setItem("connected", "injected");
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setSigner(connectedProvider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  const [yukleme, setYuklemeDurumu] = useState(false);
  const [yorumYok, setYorumYok] = useState(false);
  const [sending, setSending] = useState(false);
  async function yorumGonder() {
    /**
     * yorum varsa giriş yapılmadıysa
     * yorum yoksa giriş yapıldıysa
     */
    if (yorumicerik !== "" && !isConnected) {
      await connect();
    } else {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      let connectedProvider = new ethers.providers.Web3Provider(
        window.ethereum
      );
      const ourSigner = connectedProvider.getSigner();

<<<<<<< HEAD
      const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
=======
      const contractAddress = '0xF328A893eeB9d99Dd5cfF86F7EB94CD61a6946fB';
>>>>>>> refs/remotes/origin/main
      const contract = new ethers.Contract(contractAddress, abi, ourSigner);
      let sender = accounts[0];
      let content = yorumicerik;
      let postid = yazilar.id;

      /**
       * @arguments: publisher addres,
       * content, post id
       */
      try {
        const yorumgonder = await contract.reply(sender, content, postid);
        setSending(true);
        setSending(false);
      } catch (error) {
        console.log(error);
      }
    }
  }
  const [profil, setProfil] = useState(0);
  async function profilCek(profilid) {
<<<<<<< HEAD
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
=======
    const contractAddress = '0xF328A893eeB9d99Dd5cfF86F7EB94CD61a6946fB';
>>>>>>> refs/remotes/origin/main
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com/v1/03edd52eb45ab36f0c10f11bee4d3bbdaa080fea"
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const veri = await contract.getProfile(profilid);
    setProfil(veri);
    setYuklemeDurumu(true);
  }
  const [state, setState] = useState(0);
  async function badgeCek(id) {
<<<<<<< HEAD
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
=======
    const contractAddress = '0xF328A893eeB9d99Dd5cfF86F7EB94CD61a6946fB';
>>>>>>> refs/remotes/origin/main
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com/v1/03edd52eb45ab36f0c10f11bee4d3bbdaa080fea"
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const data = await contract.getBadgeFromId(ethers.BigNumber.from(id));
    setState(data);
  }
  const [tarih, setTarih] = useState("");
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + " " + month + " " + year;
    return time;
  }
  async function Upvote(writingId, percentage) {
    console.log("writingID" + writingId, " ", percentage);
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
<<<<<<< HEAD
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
=======
    const contractAddress = '0xF328A893eeB9d99Dd5cfF86F7EB94CD61a6946fB';
>>>>>>> refs/remotes/origin/main
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);

    var userPower = await contract.getUserPower(accounts[0]);
    var amount = userPower * percentage;

    var txResponse = await contract.upvote(
      ethers.BigNumber.from(amount),
      ethers.BigNumber.from(writingId),
      ethers.BigNumber.from(percentage)
    );
    console.log(txResponse);
  }
  useEffect(() => {
    const tarihdeger = timeConverter(yazilar.timestamp);
    setTarih(tarihdeger);
  }, [yazilar.timestamp]);
  useEffect(() => {
    if (yazilar.id !== "undefined") {
      badgeCek(yazilar.id);
    }
  }, [yazilar.id]);
  useEffect(() => {
    if (yazilar.yazar !== "undefined") {
      profilCek(yazilar.yazar);
    }
  }, [yazilar.yazar]);
  const [advar, setAdvar] = useState(false);
  useEffect(() => {
    if (profil.Name !== "") {
      setAdvar(true);
    } else {
      return;
    }
  }, [profil]);
  function yazigit(veri) {
    console.log(veri);
    //  Router.push(`/writes?id=${veri.id}&writingIndex=${veri.index}`);
  }
  /**
  *  address creator;
  uint collectionID;
  uint count;
  uint kalan;
  string collectionName;
  string collectionDesc;
  string collectionPp;
  address[] owners;
  */
  if (!yukleme) {
  } else
    return (
      <>
        <div
          className={
            isActive
              ? "flex ml-10 my-8 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-[270px]"
              : "flex ml-10 my-8 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-[250px]"
          }
        >
          <img
<<<<<<< HEAD
            className="object-fill w-full lg:h-full rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://www.w3schools.com/html/img_girl.jpg"
            alt=""
=======
            className='object-cover w-full lg:h-full rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg'
            style={{
              backgroundImage: `url('/categories/${yazilar.id}.jpg')`,
            }}
            alt=''
>>>>>>> refs/remotes/origin/main
          />

          <div className="flex flex-col justify-between overflow-hidden overflow-ellipsis px-4 leading-normal w-full">
            <div className="">
              <div
                className={
                  isActive || liked
                    ? "shadow-md w-[50px] h-[30px] text-center hidden"
                    : "shadow-md w-[50px] h-[30px] text-center"
                }
              >
                <p
                  className={
                    !liked
                      ? "text-white font-bold "
                      : "text-white font-bold hidden"
                  }
                >
                  {parseInt(state.kalan) + "/" + parseInt(state.count)}
                </p>
              </div>
              <div className="mb-5">
                <div
                  className={!liked ? "grid grid-cols-2" : "grid-cols-2 hidden"}
                >
                  <div className="">
                    <p className="dark:text-white font-sans font-medium my-2">
                      {!advar
                        ? profil.Name
                        : yazilar.yazar.slice(0, 6) +
                          "...." +
                          yazilar.yazar.slice(-4)}
                    </p>
                  </div>
                  <div className="m-2">
                    <p className="text-white font-medium text-right">{tarih}</p>
                  </div>
                </div>
              </div>
              <Link href={`/writes/[id]`} as={`/writes/${yazilar.id}`}>
                <a onClick={() => yazigit(yazilar)}>
                  <h5 className="truncate overflow-hidden mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {yazilar.baslik}
                  </h5>
                </a>
              </Link>
            </div>
            <Link href="/writes/[id]" as={`/writes/${yazilar.id}`}>
              <a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {yazilar.ipfs}
                </p>
              </a>
            </Link>
            <div className="bg-[#111827] min-w-full shadow-md grid grid-cols-5 rounded-lg place-items-center h-[50px]">
              <div className="h-3/4 rounded-lg">
                <button onClick={begen} className="flex flex-row items-center ">
                  <center>
                    <ImArrowUp
                      className={
                        !liked
                          ? "my-3 mx-2 text-white"
                          : "my-3 mx-2 text-blue-500"
                      }
                      height={64}
                      width={64}
                    />
                  </center>
                  <p className="text-white">{yazilar.upvotesayi}</p>
                </button>
              </div>
              <button onClick={yorumac}>
                <div className=" h-3/4 rounded-lg  flex flex-row items-center">
                  <FaComment
                    className={
                      !isActive ? "m-2 text-white" : "m-2 text-[#E64848]"
                    }
                    height={64}
                    width={64}
                  />
                  <p className="text-white ">{yazilar.yorumsayi}</p>
                </div>
              </button>
              <button>
                <div className="h-3/4 rounded-lg  w-1/3">
                  <FaShare className="m-3 text-white" />
                </div>
              </button>
              <button onClick={kaydet}>
                <div className="h-3/4 rounded-lg  w-1/3">
                  <FaBookmark
                    className={
                      !saved
                        ? "m-3 text-white"
                        : "animate-zipla m-3 text-blue-500"
                    }
                  />
                </div>
              </button>
              <button>
                <div className="h-3/4 rounded-lg  w-1/3" onClick={clicked1}>
                  <AiFillWarning className="m-3 text-red-500" />
                </div>
              </button>
              {modal1On && (
                <ModalWarning
                  setModal1On={setModal1On}
                  set1Choice={set1Choice}
                />
              )}
            </div>
            {/* 
          gizlenebilir div
          */}
            <div
              className={
                !liked
                  ? "mt-3 mb-2 rounded-lg border border-[#293462] hidden"
                  : "mt-3 mb-2 rounded-lg border border-[#293462] "
              }
            >
              <div className="m-2">
                <div className="grid place-items-center grid-cols-6">
                  <div>
                    <button
                      onClick={() => Upvote(parseInt(yazilar.id), 5)}
                      className=" font-poppins text-[#F1F1F1] p-2 rounded-lg"
                    >
                      5%
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => Upvote(parseInt(yazilar.id), 10)}
                      className=" font-poppins text-[#F1F1F1] p-2 rounded-lg"
                    >
                      10%
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => Upvote(parseInt(yazilar.id), 25)}
                      className=" font-poppins text-[#F1F1F1] p-2 rounded-lg"
                    >
                      25%
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => Upvote(parseInt(yazilar.id), 50)}
                      className=" text-[#F1F1F1] font-poppins p-2 rounded-lg"
                    >
                      50%
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => Upvote(parseInt(yazilar.id), 75)}
                      className=" font-poppins text-[#F1F1F1] p-2 rounded-lg"
                    >
                      75%
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => Upvote(parseInt(yazilar.id), 100)}
                      className=" font-poppins text-[#F1F1F1] p-2 rounded-lg"
                    >
                      100%
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                isActive
                  ? "mt-5 mb-2 visible rounded-lg"
                  : "mt-5 mb-2 hidden rounded-lg"
              }
            >
              <div className="m-2">
                <form>
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                    Yorum yap
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <FaComments size={20} className="text-white" />
                    </div>
                    <input
                      onChange={yoruminput}
                      type="text"
                      id="yorum"
                      className="placeholder:font-poppins font-poppins block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Yorum giriniz..."
                      required
                      spellCheck="false"
                    />
                    <button
                      disabled={sending}
                      onClick={() => yorumGonder()}
                      type="button"
                      className="text-white absolute right-2.5 bottom-[5px] shadow-md hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1   dark:focus:ring-blue-800"
                    >
                      <center>
                        <IoSend size={20} className="text-white" />
                      </center>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/*
      <div
        className="rounded-t-lg overflow-hidden  px-3 py-10 flex justify-center z-0"
        id="postCard"
      >
        <div className="w-full max-w-xs">
          <Link href="writes/[id]" as={`/writes/${write.id}`}>
            <a
              href="#"
              className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {write.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {write.body}
              </p>
            </a>
          </Link>
        </div>
      </div> */}
      </>
    );
}
export default Cards;
