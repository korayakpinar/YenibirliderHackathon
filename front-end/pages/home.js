import {
  BiHomeCircle,
  BiCategory,
  BiShoppingBag,
  BiNotification,
} from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";
import Navbar from "components/Navbar";
import Card from "components/Cards";
import Sidebar from "components/Sidebar";
import Rightbar from "components/Rightbar";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import Head from "next/head";
import { BigNumber, ethers } from "ethers";
import abi from "../back-end/constants/abi.json";
import { data } from "autoprefixer";

export default function home() {
  const [yuklemeDurumu, setYuklemeDurumu] = useState("yuklenmedi");
  const [yazilar, setYazilar] = useState([]);
  const [yaziVar, setYaziVar] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(false);
  const [signer, setSigner] = useState();
  const [isConnecting, setIsConnecting] = useState(false);
  const [correctNetwork, setCorrectNetwork] = useState(false);

  useEffect(() => {
    getFeed();
  }, []);
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

        setIsConnecting(true);
        await ethereum.request({
          method: "eth_requestAccounts",
        });
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

<<<<<<< HEAD
        const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
=======
        const contractAddress = '0xF328A893eeB9d99Dd5cfF86F7EB94CD61a6946fB';
>>>>>>> refs/remotes/origin/main
        const contract = new ethers.Contract(contractAddress, abi, ourSigner);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  useEffect(() => {
    getFeed();
  }, []);
  /*
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
      } 
    */
  /*const [baslik, setBaslik] = useState('');
  const [ipfs, setIPFS] = useState('');
  const [liked, setLiked] = useState('');
  const [comments, setComments] = useState(''); */
  async function Reply(publisher, content, writingId) {
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

    var txResponse = await contract.reply(publisher, content, writingId);
    console.log(txResponse);
  }

  async function getFeed() {
<<<<<<< HEAD
    const contractAddress = "0xdeFe743a1127074f5F5308f78ABD0F247544f52E";
=======
    const contractAddress = '0xF328A893eeB9d99Dd5cfF86F7EB94CD61a6946fB';
>>>>>>> refs/remotes/origin/main
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com/v1/03edd52eb45ab36f0c10f11bee4d3bbdaa080fea"
    );
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const data = await contract.getFeedFromInfura();
    //
    const tumyazilar = await Promise.all(
      data.map(async (i) => {
        let yaziicerik = {
          id: i.id,
          baslik: i.header,
          ipfs: i.ipfsaddress,
          yorumsayi: parseInt(i.replyCount, 16),
          upvotesayi: parseInt(i.upvoteCount, 16),
          yazar: i.publisher.toString(),
          index: parseInt(i.index),
          timestamp: parseInt(i.tstamp),
        };
        return yaziicerik;
      })
    );
    setYazilar(tumyazilar);
    setYuklemeDurumu("yuklendi");
    /* 
  const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
  let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();

    const contractAddress = '0x250C7E772dd59E3BE7Da248F4752Ca52f8a2d2Fe';
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);

    const feed = await contract.getFeed(2);
    console.log(feed); // İçinde yazı bulunan bir array dönmeli*/
  }
  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" &&
      window.localStorage.getItem("connected")
    ) {
      connect();
    }
  }, []);
  if (yuklemeDurumu === "yuklenmedi" && !yazilar.length)
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-gray-800 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-white rounded-full"></div>
          <div class="w-3 h-3 bg-white rounded-full"></div>
          <div class="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    );
  return (
    <>
      <Head>
        <title>Dessay - Özgür, Merkeziyetsiz Platform</title>
        <meta
          name="description"
          content="Dessay - Merkeziyetsiz yazı ve makale paylaş"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
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
                  <div className="pb-10 w-full lg:pt-20">
                    <div className="flex">
                      <div className="markdown px-6 xl:px-12 mr-0 ml-0 w-full max-w-3xl mx-auto lg:ml-0 pl-8">
                        <div className="ml-5 relative overflow-hidden mb-8 mt-5 ">
                          {yazilar
                            .slice(0)
                            .reverse()
                            .map((yazi, i) => (
                              <Card key={i} yazilar={yazi} />
                            ))}
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
/*
export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const writes = await res.json();

  return {
    props: {
      writes,
    },
  };
}; */
