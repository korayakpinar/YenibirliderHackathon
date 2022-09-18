import react from "react"
import { AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'

const Modal3 = ({ setModal3On, set3Choice }) => {

    const handleOKClick = () => {
        set3Choice(true)
        setModal3On(false)
    }
    const handleCancelClick = () => {
        set3Choice(false)
        setModal3On(false)
    }

    const kategoriler = [
        { baslik: "Felsefe", id: "1" },
        { baslik: "Bilim Kurgu", id: "2" },
        { baslik: "Teknoloji", id: "3" },
        { baslik: "Bilim", id: "4" },
        { baslik: "Sanat", id: "5" },
        { baslik: "Müzik", id: "6" },
        { baslik: "Programlama", id: "7" },
        { baslik: "Biyoloji", id: "8" },
        { baslik: "Fizik", id: "9" },
        { baslik: "Kimya", id: "10" },
        { baslik: "Matematik", id: "11" },
        { baslik: "Evrim", id: "12" },
        { baslik: "Havacılık", id: "13" },
        { baslik: "Coğrafya", id: "14" },
        { baslik: "Film İncelemesi", id: "15" },
        { baslik: "Bilgisayar Bilimleri", id: "16" },
        { baslik: "Kripto", id: "17" },
      ]
    
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
                        <h3 class="mb-4 font-semibold text-gray-900 border-b-2 border-dotted border-cyan-500 flex justify-center dark:text-white">Etiket ekle</h3>
                            
                            <ul class="grid place-items-center grid-cols-4 w-auto h-auto text-sm font-medium text-gray-900 bg-white rounded-lg border  dark:bg-slate-900 dark:border-gray-600 dark:text-white">
                                { kategoriler.map((kategori)=> (
                                <li class="w-auto rounded-t-lg">
                                    <div class="m-4 flex items-center pl-3">
                                        <input id={kategori.id} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="vue-checkbox" class="py-3 ml-2 w-full text-sm font-bold text-gray-900 dark:text-white font-poppins">{kategori.baslik}</label> 
                                    </div>
                                </li>
                                ))}
                                
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal3