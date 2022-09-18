import react from "react"
import { AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'

const Modalroz = ({ setModalrozOn, setrozChoice }) => {

    const handleOKClick = () => {
        setrozChoice(true)
        setModalrozOn(false)
    }
    const handleCancelClick = () => {
        setrozChoice(false)
        setModalrozOn(false)
    }
    
    return (

        <div className="   bg-slate-100 fixed bg-opacity-10 inset-0 z-50   ">
            
            <div className="flex h-screen op justify-center items-center ">
                <div className='flex justify-center bg-slate-800 rounded-l-full border-2 border-slate-700 border-dashed p-2 max-h-9 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <AiOutlineClose onClick={handleCancelClick} className=' text-red-500'/>
                </div>
                <div className='flex justify-end bg-slate-800 border-2 border-slate-700 border-dashed p-2 max-h-9 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <AiOutlineCheck onClick={handleOKClick} className=' text-[#4caf50]'/>
                </div>
                <div className="flex-col justify-center bg-slate-800 border-2 border-slate-700 border-dashed rounded-xl ">

                    <div className=" grid grid-rows-1 w-auto m-10 h-auto">
                        <p className=" text-slate-400 font-light flex justify-center">Fiyat giriniz</p>
                        <input className=" bg-slate-800 border-2 border-slate-800" type={'number'} />
                        <p className=" text-slate-400 font-light">Pazarda kalacagi tarihi giriniz</p>
                        <input className=" bg-slate-800 border-2 border-slate-800" type={'date'}/>
                        <p className=" text-slate-400 font-light flex justify-center">Aciklama giriniz</p>                        
                        <textarea className=" bg-slate-800 border-2 border-slate-800"></textarea>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modalroz