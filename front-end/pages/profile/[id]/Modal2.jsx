import react from "react"
import { AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'
import { ethers } from "ethers"
import abi from '../../../back-end/constants/abi.json';
import { useRef,useState,useEffect } from "react"
import Resizer from "react-image-file-resizer"

const Modal2 = ({ setModal2On, set2Choice }) => {
  const [fotografData,setFotografData] = useState('')
  const [yeniData,setYeniData] = useState("")
    const[isDis,setIsDis] = useState(true)
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
            setIsConnecting(true);
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
      const isimdegistir = async(deger)=> {
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
          const txResponse = await contract.updateName(deger);
          console.log(txResponse);}
          catch(error) {
            console.log(error)
          }
      }
      async function fotografdegistir(fotografinput){
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
        const txResponse = await contract.updatePp(fotografinput);
        console.log(txResponse);}
        catch(error) {
          console.log(error)
        }
      }
const resimRef=useRef(null)
const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      setIsDis(true);
    }
    if (fileObj) {
      setIsDis(false);
      console.log('fileObj ', fileObj);
      try{
        Resizer.imageFileResizer(
          fileObj,
          75,
          120,
          "JPEG",
          99,
          0,
          (uri)=>{
            console.log(uri)
            setYeniData(uri)
          },
          "base64",
          50,
          50
        )
      }catch(err){
        console.log(err)
      }
      /**
       * resim yükleme kodu
       */
      // toBase64(yeniData).then((response) => {console.log(yeniData)});
    }
    
  };
  const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
/**
 * resim varsa input yoksa resim deploy et
 * resim varsa input varsa ikisini de deploy et
 * resim yoksa input varsa input deploy et :yapıldı
 */

    const inputRef = useRef(null)
    const handleOKClick = async () => {
        set2Choice(true)
        if(isDis == true && inputRef.current.value !== "") {
        await isimdegistir(inputRef.current.value)}
        if(isDis == false) {
        
          await fotografdegistir(yeniData)
          
        }
        setModal2On(false)
    }
    const handleCancelClick = () => {
        set2Choice(false)
        setModal2On(false)
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
                      <AiOutlineClose onClick={handleCancelClick} className= ' text-red-500 '/>
                </div>
                <div className='flex justify-end bg-slate-800 border-2 border-slate-700 border-dashed p-2 max-h-9 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <AiOutlineCheck onClick={handleOKClick} className='text-[#4caf50] '/>
                </div>
                <div className="flex-col justify-center bg-slate-800 border-2 h-[250px] border-slate-700 border-dashed rounded-xl ">

                    <div className=" flex flex-col w-auto mx-3 my-10 h-auto">
                        <p className=' text-center text-white border-b-2 border-dotted border-cyan-400 font-poppins'> Profil Fotoğrafı Ekle</p>
                        <div className="mt-5 flex flex-col justify-evenly">
                            <input type={'file'} 
                            ref={resimRef}
                            onChange={handleFileChange}
                            className=' block w-full text-sm text-white bg-gray-50 rounded-lg border dark:text-white border-gray-300 cursor-pointer font-poppins focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ' ></input>
                            <p className="mt-1 text-sm text-gray-500 dark:text-white font-poppins">PNG, JPG formatları yüklenebilir.</p>
                            <p className="mt-3 text-sm text-gray-500 dark:text-white font-poppins">Kullanıcı Adı Değiştir</p>
                            <input 
                            ref={inputRef}
                            id="adinput" type="text" placeholder="Yeni kullanıcı adı..." className="mt-3 font-poppins dark:text-white font-small placeholder:text-gray rounded-lg pl-[14px] dark:bg-gray-700 dark:border-gray-600  border"/>
                        </div>

                    
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal2