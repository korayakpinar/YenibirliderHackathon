import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Comments from "components/Comments";
import Rightbar from "components/Rightbar";
import { ethers } from "ethers";
import abi from "../../back-end/constants/abi.json";
import Link from "next/link";
import { Provider } from "@ethersproject/providers";

function yazikarti() {
  const router = useRouter();
  const { id } = router.query;
  /**
   * struct Writing {
        string header;
        string ipfsaddress;
        Topics[] topics;
        address publisher;
        uint comments;
        uint tstamp;
        uint index;
        uint id;
        uint upvoteAmount;
        uint upvoteCount;
        uint replyCount;
        uint warnCount;
        uint badgeThreshold;
   */
  const [baslik, setBaslik] = useState("");
  const [yazar, setYazar] = useState("");
  const [ipfs, setIPFS] = useState("");
  const [upvoteCount, setUpvoteCount] = useState("");
  const [yorumCount, setYorumCount] = useState("");
  const [yorumYok, setYorumYok] = useState(false);
  const [timestamp, setTimeStamp] = useState("");
  const [warn, setWarn] = useState("");
  const [yuklendi, setYuklendi] = useState(false);
  async function yaziBilgiGetir(profileid) {
    const contractAddress = "0x8E4Ab153732b3a818C0fB19ce472F6abb1cbc7CE";
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com/v1/03edd52eb45ab36f0c10f11bee4d3bbdaa080fea"
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    try {
      const yazigetir = await contract.getWritingForID(
        ethers.BigNumber.from(profileid)
      );

      setBaslik(yazigetir.header);
      setYazar(yazigetir.publisher);
      setIPFS(yazigetir.ipfsaddress);
      setYorumCount(parseInt(yazigetir.replyCount, 16));
      setUpvoteCount(parseInt(yazigetir.upvoteCount, 16));
      setTimeStamp(parseInt(yazigetir.tstamp), 16);
      if (parseInt(yazigetir.replyCount, 16) == 0) {
        setYorumYok(true);
        console.log("Bu çalıştı");
      }
      setYuklendi(true);
    } catch (error) {
      console.log(error);
    }
  }
  const [yorumlar, setYorumlar] = useState([]);
  async function yorumGetir(yaziid) {
    const contractAddress = "0x8E4Ab153732b3a818C0fB19ce472F6abb1cbc7CE";
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com/v1/03edd52eb45ab36f0c10f11bee4d3bbdaa080fea"
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    try {
      const yorumgetir = await contract.getComments(
        ethers.BigNumber.from(yaziid)
      );
      setYorumlar(yorumgetir);
      console.log(yorumgetir);
    } catch (error) {
      console.log(error);
    }
  }
  const [state, setState] = useState(0);
  async function getProfileAdr(adres) {
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com/v1/03edd52eb45ab36f0c10f11bee4d3bbdaa080fea"
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    try {
      const profilgetir = await contract.getProfile(adres);
      setState(profilgetir);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (router.isReady) {
      yaziBilgiGetir(id);
      yorumGetir(id);
    } else {
      return;
    }
  }, [router.isReady]);
  /* useEffect(() => {
    if (yorumlar == '') {
      console.log('Yorumlar 0');
    }
  }, [yorumlar]); */

  const [advar, setAdvar] = useState(false);
  useEffect(() => {
    if (state.Name !== "") {
      setAdvar(true);
    }
  }, [state]);
  useEffect(() => {
    if (yazar !== "") {
      getProfileAdr(yazar);
    } else return;
  }, [yazar]);
  const [zaman, setZaman] = useState("");

  useEffect(() => {
    if (timestamp > 0) {
      const zaman = timeConverter(timestamp);
      setZaman(zaman);
    }
  }, [timestamp]);
  const [show, setShow] = useState(false);

  const ac = () => {
    setShow((current) => !current);
  };
  /*   var bilgigetir = await contract.getWritingForID(
    ); */

  /**
   * 
    struct Writing {
        string header;
        string ipfsaddress;
        Topics[] topics;
        address publisher;
        uint comments;
        uint tstamp;
        uint index;
        uint id;
        uint upvoteAmount;
        uint upvoteCount;
        uint replyCount;
        uint warnCount;
        uint badgeThreshold;
   */
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
  if (!yuklendi) {
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="dark:bg-[#111827]">
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto px-6 dark:bg-[#111827]">
        <div className="lg:flex -mx-6">
          <Sidebar />
          <div
            id="content-wrapper"
            className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5"
          >
            <div id="content" className="z-10">
              <div id="app" className="flex">
                <div className="pb-16 w-full pt-24 lg:pt-28">
                  <div className="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4"></div>
                  <div className="flex">
                    <div className="markdown px-6 xl:px-12 mr-0 ml-0 w-full max-w-3xl mx-auto lg:ml-0 pl-8">
                      <div className="ml-5 relative overflow-y-auto overflow-x-hidden mb-8 mt-5 bg-[#212f4d] shadow-md p-4 rounded-lg shadow-md h-auto">
                        <div className="flex flex-row w-full justify-center p-4 leading-normal">
                          <div className="leading-normal flex items-center align-middle content-center">
                            <a onClick={ac}>
                              <p className="text-white text-xl font-bold text-center">
                                Uyarı göster
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          !show
                            ? "hidden ml-5 relative overflow-y-auto overflow-x-hidden mb-8 mt-5 bg-[#212f4d]  p-4 rounded-lg shadow-md h-auto"
                            : "ml-5 relative overflow-y-auto overflow-x-hidden mb-8 mt-5 bg-[#212f4d]  p-4 rounded-lg shadow-md h-auto"
                        }
                      >
                        <div className="flex flex-row w-full justify-center p-4 leading-normal">
                          <img
                            src="https://mti.com/wp-content/uploads/2019/01/alert-png-1.png"
                            className="m-2 w-10 h-10"
                          ></img>
                          <div className="leading-normal flex items-center align-middle content-center">
                            <p className="text-white text-xl font-bold text-center">
                              Bu yazı problemli olabilir.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex pl-5 ml-10 my-8 flex-col items-center rounded-lg shadow-md md:flex-row md:max-w-xl ">
                        <div className="flex flex-col w-full justify-between p-4 leading-normal items-center">
                          <p className="text-white font-medium text-m">
                            Bu yazıda rozet bulunmuyor...
                          </p>
                        </div>
                      </div>
                      <div className="ml-5 relative overflow-y-auto overflow-x-hidden mb-8 mt-5 bg-[#212f4d]  p-4 rounded-lg shadow-md h-auto">
                        <div className="flex flex-col w-full justify-between p-4 leading-normal">
                          <div className="flex space-x-4  gap-0 items-center">
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-white">
                                {!advar
                                  ? state.Name
                                  : yazar.slice(0, 5) +
                                    "...." +
                                    yazar.slice(-5)}
                              </p>
                            </div>
                            <div className=" w-1/2 h-[30px]">
                              <div className="flex-shrink-0 h-full">
                                <p className="text-white font-medium font-sans text-right">
                                  {zaman}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="overflow-hidden">
                            <p className="break-all text-white font-medium text-3xl">
                              {baslik}
                            </p>
                            <p className="mt-5 break-all text-gray font-light font-serif text-white text-xl">
                              {ipfs}
                            </p>
                            <p className="mt-5 font-poppins text-white">
                              {upvoteCount} Beğeni
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 relative overflow-y-auto overflow-x-hidden mb-8 text-xl mt-5 p-4 rounded-lg shadow-md h-auto">
                        <p className=" text-white font-bold font-poppins">
                          Yorumlar ({yorumCount})
                        </p>
                      </div>

                      {yorumYok
                        ? ""
                        : yorumlar?.map((yorum, i) => (
                            <Comments
                              tarih={zaman}
                              yazar={yorum.publisher}
                              yorum={yorum.content}
                              key={i}
                            />
                          ))}
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
  );
}

export default yazikarti;
