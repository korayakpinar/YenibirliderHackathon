import Head from "next/head";
import Header from "components/Navbar";
import { useEffect, useState, useRef } from "react";
import Sidebar from "components/Sidebar";
import Rightbar from "components/RightbarPost";
import { AiOutlineFileImage } from "react-icons/ai";
import { ethers } from "ethers";
import abi from "../back-end/constants/abi.json";
import { RiAddBoxLine } from "react-icons/ri";
import ModalT from "components/ModalT";
import { create as ipfsHttpClient } from "ipfs-http-client";

function post() {
  const [modal3On, setModal3On] = useState(false);
  const [choice3, set3Choice] = useState(false);

  const clickedT = () => {
    setModal3On(true);
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const headerChange = (event) => {
    setTitle(event.target.value);
  };
  const bodyChange = (event) => {
    setBody(event.target.value);
  };
  const PostClick = (event) => {
    event.preventDefault();
    /* console.log(title.toString());
    console.log(body.toString());
    console.log(rozetSinir.toString());
    console.log(rozetNum.toString());
    console.log(rozetAciklama.toString());
    console.log(rozetBas.toString()); */

    const ourIpfsAddr = getIPFS(body.toString());

    if (ourIpfsAddr != null && ourIpfsAddr != undefined && ourIpfsAddr != NaN) {
      enterWriting(
        title.toString(),
        ourIpfsAddr.toString(),
        rozetSinir.toString(),
        rozetNum.toString(),
        rozetBas.toString(),
        rozetAciklama.toString(),
        "asdsadaskoadsk"
      );
    }
    /**
     *  header,
        ipfsadres,
        rozetsinir,
        rozetsayi,
        rozetbaslik,
        rozetaciklama,
        rozetgorsel
     */
  };
  const [rozetBas, setRozetBas] = useState("");
  const [rozetAciklama, setRozetAciklama] = useState("");
  const [rozetNum, setRozetNum] = useState("");
  const [rozetSinir, setRozetSinir] = useState("");
  const rozetBaslikChange = (event) => {
    setRozetBas(event.target.value);
  };
  const rozetAciklamaChange = (event) => {
    setRozetAciklama(event.target.value);
  };
  const rozetSayiChange = (event) => {
    setRozetNum(event.target.value);
  };
  const rozetAlChange = (event) => {
    setRozetSinir(event.target.value);
  };

  async function getIPFS(bodyString) {
    // this is a secret key, do not share it!
    const auth =
      "Basic " +
      Buffer.from(projectId + ":" + projectSecret).toString("base64");

    const client = ipfsHttpClient({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: auth,
      },
    });

    console.log("client", client);
    const ourCID = await client.add(body.toString());
    console.log("ourCID", ourCID.path);
    const cid = ourCID.path;
    return cid.toString();
  }

  const inputRef = useRef(null);
  const gorselRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDis, setIsDis] = useState(true);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      setIsDis(true);
    }
    if (fileObj) {
      setIsDis(false);
      getIPFS(fileObj);

      /**
       * resim yükleme kodu
       */
      //toBase64(fileObj).then((response) => console.log(response));
      console.log(fileObj);
      console.log(fileObj.name);
    }
  };
  const gorselClick = () => {
    gorselRef.current.click();
  };

  const gorselFileChange = (event) => {
    const fileObj2 = event.target.files && event.target.files[0];
    if (!fileObj2) {
    }

    console.log("fileObj isa", fileObj2);
    copyImagetoCanvas(fileObj2);
    event.target.value = null;
    console.log(event.target.files);

    console.log(fileObj2);
    console.log(fileObj2.name);
  };

  function onCheck(e) {
    const checked = e.target.checked;

    if (checked) {
      setIsDisabled(false);
    }
    if (!checked) {
      setIsDisabled(true);
    }
  }

  async function enterWriting(
    header,
    ipfsadres,
    rozetsinir,
    rozetsayi,
    rozetbaslik,
    rozetaciklama,
    rozetgorsel
  ) {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    await ethereum.request({
      method: "eth_requestAccounts",
    });
    window.localStorage.setItem("connected", "injected");
    setIsConnected(true);
    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const oursigner = connectedProvider.getSigner();
    setSigner(oursigner);
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const contract = new ethers.Contract(contractAddress, abi, oursigner);
    try {
      const txResponse = await contract.enterWriting(
        header,
        ipfsadres,
        [ethers.BigNumber.from(5)],
        rozetsinir,
        rozetsayi,
        rozetbaslik,
        rozetaciklama,
        rozetgorsel
      );
      console.log(txResponse);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Resim yükleme kodu
   */
  /* const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    }); */
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
        console.log(`Bağlanılan zincir: ${chainId}`);
        const mumbaiChainId = "0x13881";
        if (mumbaiChainId !== chainId) {
          console.log("Bu ağ polygon mumbai değil");
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        setIsConnecting(true);
        await ethereum.request({
          method: "eth_requestAccounts",
        });
        window.localStorage.setItem("connected", "injected");
        setIsConnecting(false);
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
  const checkCorrectNetwork = async () => {
    const { ethereum } = window;
    let chainId = await ethereum.request({ method: "eth_chainId" });
    const mumbaiChainId = "0x13881";
    if (chainId !== mumbaiChainId) {
      setCorrectNetwork(false);
    } else {
      setCorrectNetwork(true);
    }
  };
  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" &&
      window.localStorage.getItem("connected")
    ) {
      connect();
    }
  }, []);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        connect();
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dessay - Yazı paylaş</title>
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
                            <p className="text-2xl font-bold font-poppins text-white">
                              Yazı Paylaş
                            </p>
                          </div>
                          <div className="w-full px-2 py-4 h-[70px]">
                            <div className="w-full">
                              <input
                                onChange={headerChange}
                                className="text-white dark:bg-[#374151] rounded-lg my-2 w-full p-4 font-medium font-poppins placeholder:font-poppins placeholder:font-bold"
                                placeholder="Başlık yaz..."
                              ></input>
                            </div>
                          </div>
                          <div className="mt-5 w-full px-2 py-4">
                            <div className="w-full">
                              <textarea
                                onChange={bodyChange}
                                className="rounded-lg placeholder:font-bold text-white font-medium resize-none p-4 my-2 w-full h-[200px] font-poppins placeholder:font-poppins dark:bg-[#374151]"
                                placeholder="İçinden geçenleri paylaş..."
                              ></textarea>
                            </div>
                            <div className="flex items-center w-full px-2 justify-between">
                              <div>
                                <input
                                  onChange={onCheck}
                                  id="rozetbox"
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="rozetbox"
                                  className="font-poppins font-bold ml-2 text-sm  text-gray-900 dark:text-gray-300"
                                >
                                  Rozet eklemek istiyorum.
                                </label>
                              </div>
                              <div>
                                <div
                                  className="flex cursor-pointer"
                                  onClick={clickedT}
                                >
                                  <RiAddBoxLine className=" text-cyan-400 mt-[2px]" />
                                  <p className="font-poppins font-bold ml-2 text-sm  text-gray-900 dark:text-gray-300">
                                    Etiket eklemek istiyorum
                                  </p>
                                </div>
                                {modal3On && (
                                  <ModalT
                                    setModal3On={setModal3On}
                                    set3Choice={set3Choice}
                                  />
                                )}
                              </div>
                            </div>
                            <div className={isDisabled ? "hidden" : "visible"}>
                              <div className="h-[100px] mt-3 py-4 gap-1  w-full place-items-center grid-cols-2 rounded-lg grid ">
                                <div className="grid h-3/4 w-3/4 items-center">
                                  <input
                                    className="font-poppins p-4 block w-full text-sm text-gray-900 bg-gray-50 h-[50px] rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    ref={inputRef}
                                    type="file"
                                    onChange={handleFileChange}
                                  />

                                  {/* <button
                                    onClick={handleClick}
                                    className='text-white font-poppins font-semibold h-full rounded-lg dark:bg-blue-600'
                                  >
                                    Rozet Görseli Yükle
                                </button> */}
                                </div>

                                <div className="grid h-3/4 w-3/4 items-center">
                                  <input
                                    onChange={rozetBaslikChange}
                                    placeholder="Rozet Başlığı"
                                    className="h-full w-full px-4 text-white dark:bg-[#374151] rounded-lg    font-medium font-poppins placeholder:font-poppins placeholder:font-bold"
                                  />
                                </div>
                              </div>
                              <div className="h-[100px] mt-3 py-4 gap-1  w-full place-items-center grid-cols-2 rounded-lg grid ">
                                <div className="grid h-3/4 w-3/4 items-center">
                                  <input
                                    className="hidden"
                                    ref={inputRef}
                                    type="file"
                                    onChange={handleFileChange}
                                  />
                                  <input
                                    placeholder="Rozet Alma Sınırı"
                                    onChange={rozetAlChange}
                                    type="number"
                                    className="h-full w-full px-4 text-white dark:bg-[#374151] rounded-lg    font-medium font-poppins placeholder:font-poppins placeholder:font-bold"
                                  />
                                </div>

                                <div className="grid h-3/4 w-3/4 items-center">
                                  <input
                                    type="number"
                                    onChange={rozetSayiChange}
                                    placeholder="Rozet Sayısı"
                                    className="h-full w-full px-4 text-white dark:bg-[#374151] rounded-lg    font-medium font-poppins placeholder:font-poppins placeholder:font-bold"
                                  />
                                </div>
                              </div>
                              <div className="h-[100px] mt-3 py-4 px-10 w-full place-items-center rounded-lg grid">
                                <div className="grid h-3/4 w-full items-center">
                                  <textarea
                                    onChange={rozetAciklamaChange}
                                    placeholder="Rozet Açıklaması gir..."
                                    className="resize-none h-full w-full p-4 text-white dark:bg-[#374151] rounded-lg    font-medium font-poppins placeholder:font-poppins placeholder:font-bold"
                                  />
                                </div>
                              </div>
                              <div className="grid h-3/4 w-3/4 items-center">
                                <canvas className="ml-5"></canvas>
                              </div>
                            </div>
                          </div>
                          <div className="grid px-2 gap-1 py-4 place-items-center grid-cols-2 h-[100px] w-full">
                            <div className="grid h-3/4 w-3/4 items-center">
                              <input
                                className="hidden"
                                ref={gorselRef}
                                type="file"
                                onChange={gorselFileChange}
                              />

                              <button
                                onClick={gorselClick}
                                disabled={!isConnected}
                                className="items-center text-white font-poppins font-semibold h-full rounded-lg dark:bg-green-700"
                              >
                                Görsel Ekle
                              </button>
                            </div>
                            <div className="grid items-center h-3/4 w-3/4">
                              {isConnected ? (
                                <button
                                  onClick={PostClick}
                                  className="text-white font-poppins font-semibold h-full rounded-lg dark:bg-blue-600"
                                >
                                  Paylaş
                                </button>
                              ) : (
                                <button
                                  onClick={connect}
                                  className="text-white font-poppins font-semibold h-full rounded-lg dark:bg-blue-600"
                                >
                                  Paylaşmak için giriş yap
                                </button>
                              )}
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
}

export default post;
