import react, { useRef,useState,useEffect } from "react"
import { AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'
import { ethers } from "ethers";
import abi from '../../../back-end/constants/abi.json';
const Modal1 = ({ setModal1On, set1Choice }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    async function connect() {
        if (typeof window.ethereum !== undefined) {
          try {
            const { ethereum } = window;
            if (!ethereum) {
              console.log('Metamask mevcut değil!');
              return;
            }
            let chainId = await ethereum.request({ method: 'eth_chainId' });
            const mumbaiChainId = '0x13881';
            if (mumbaiChainId !== chainId) {
              return;
            }
            const accounts = await ethereum.request({
              method: 'eth_requestAccounts',
            });
            console.log(accounts[0]);
            
            setIsConnecting(true);
            await ethereum.request({
              method: 'eth_requestAccounts',
            });
            window.localStorage.setItem('connected', 'injected');
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
            const contractAddress = '0xdeFe743a1127074f5F5308f78ABD0F247544f52E';
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
      const biodegistir = async(deger)=> {
        await ethereum.request({
            method: 'eth_requestAccounts',
          });
          let connectedProvider = new ethers.providers.Web3Provider(
            window.ethereum
          );
          const ourSigner = await connectedProvider.getSigner();
  
<<<<<<< HEAD
          const contractAddress = '0xdeFe743a1127074f5F5308f78ABD0F247544f52E';
=======
          const contractAddress = '0xF328A893eeB9d99Dd5cfF86F7EB94CD61a6946fB';
>>>>>>> refs/remotes/origin/main
          const contract = new ethers.Contract(contractAddress, abi, ourSigner);
         try{
          const txResponse = await contract.updateBio(deger);
          console.log(txResponse);}
          catch(error) {
            console.log(error)
          }
      }
      const bioRef = useRef(null)
    const handleOKClick = async()  => {
        set1Choice(true)
        await biodegistir(bioRef.current.value)
        setModal1On(false)

    }
    const handleCancelClick = () => {
        set1Choice(false)
        setModal1On(false)
    }
    useEffect(() => {
        if (
          typeof window.ethereum !== 'undefined' &&
          window.localStorage.getItem('connected')
        ) {
          connect();
        }
      }, []);
    return (

        <div className="   bg-zinc-700 fixed bg-opacity-80 inset-0 z-50   ">
            
            <div className="flex h-screen op justify-center items-center ">
                <div className='flex justify-center bg-slate-800 rounded-l-full border-2 border-slate-700 border-dashed p-2 max-h-9 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <AiOutlineClose onClick={handleCancelClick} className=' text-rose-500'/>
                </div>
                <div className='flex justify-end bg-slate-800 border-2 border-slate-700 border-dashed p-2 max-h-9 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <AiOutlineCheck onClick={handleOKClick} className=' text-[#4caf50]'/>
                </div>
                <div className="flex-col justify-center bg-slate-800 border-2 border-slate-700 border-dashed rounded-xl ">

                    <div className="flex w-auto m-3 h-auto">
                        <textarea 
                        ref={bioRef}
                        cols={40} rows={10} placeholder='Biyografin' className="p-2 focus:ring-2 bg-gradient-to-r from-slate-700 to-slate-800 ring-2 border-dashed rounded-sm font-poppins resize-none text-white"></textarea>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal1