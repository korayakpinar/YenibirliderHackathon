import Header from "components/Navbar";
import Head from "next/head";
import Sidebar from "components/Sidebar";
import Rightbar from "components/Rightbar";
import Liste from "components/Notif";
import { ethers } from "ethers";
import abi from "../back-end/constants/abi.json";
function notifications() {
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
        console.log(accounts[0]);
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

  //  async function getNotif() {}

  return (
    <>
      <Head>
        <title>Dessay- Bildirimler </title>
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
                              Bildirimler
                            </p>
                          </div>
                          <Liste />
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

export default notifications;
