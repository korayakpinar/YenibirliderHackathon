import react from "react"
import { AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'
import { ethers } from "ethers"
import abi from '../back-end/constants/abi.json';

const Modal1 = ({ setModal1On, set1Choice }) => {

    const handleOKClick = () => {
        set1Choice(true)
        setModal1On(false)
        WarnCon()
    }
    const handleCancelClick = () => {
        set1Choice(false)
        setModal1On(false)
    }

    const Warn = [
        { baslik: "Uygunsuz Baslik", id: "1" },
        { baslik: "Uygunsuz Resim", id: "3" },
        { baslik: "Uygunsuz Icerik", id: "4" },
        { baslik: "Spam", id: "5" },
        { baslik: "Nefret soylemi", id: "6" },
        { baslik: "Diger", id: "6" },
      ]
    async function WarnCon() {
    /*eğer topicler BigNumber gelmiyorsa
    for (let index = 0; index < topics.length; index++) {
      topics[index] = ethers.BigNumber.from(topics[index]);
      
    }*/

    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = '0x8E4Ab153732b3a818C0fB19ce472F6abb1cbc7CE';
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);
    var warning = await contract.warnWriting(
      "0x036708BBe9E5AcC9602653ea9169b77EAac51EaF",
      ethers.BigNumber.from(0),
      ethers.BigNumber.from(1),
      "Bu bir uyarı mesajıdır"
    );

    //test edilmedi
  }
    return (

        <div className="   bg-zinc-700 fixed bg-opacity-80 inset-0 z-50   ">
            
            <div className="flex h-screen op justify-center items-center ">
                <div className='flex justify-center bg-slate-800 rounded-l-full border-2 border-slate-700 border-dashed p-2 max-h-9 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <AiOutlineClose onClick={handleCancelClick} className=' text-red-500'/>
                </div>
                <div className='flex justify-end bg-slate-800 border-2 border-slate-700 border-dashed p-2 max-h-9 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <AiOutlineCheck onClick={handleOKClick} className='text-[#4caf50]'/>
                </div>
                <div className="flex-col justify-center bg-slate-800 border-2 border-slate-700 border-dashed rounded-xl ">

                    <div className="font-poppins flex w-auto m-3 h-auto">
                        <div className="flex-row">
                        <h3 class="mb-4 font-semibold text-gray-900 dark:text-red-500">Bildir</h3>
                            
                            <ul class="grid place-items-center grid-cols-2 w-auto h-auto text-sm font-medium text-gray-900 bg-white rounded-lg border  dark:bg-slate-900 dark:border-gray-600 dark:text-white">
                                { Warn.map((Warn)=> (
                                <li class="w-auto rounded-t-lg">
                                    <div class="m-4 flex items-center pl-3">
                                        <input id={Warn.id} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="vue-checkbox" class="py-3 ml-2 w-full text-sm font-bold text-gray-900 dark:text-white font-poppins">{Warn.baslik}</label> 
                                    </div>
                                </li>
                                ))}
                                
                            </ul>
                        <div>
                            <textarea cols={55} rows={10} placeholder='Detaylar' className="p-2 mt-2 focus:ring-2 bg-gradient-to-r from-slate-700 to-slate-800 ring-2 border-dashed rounded-sm font-poppins resize-none text-white"></textarea>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}


export default Modal1