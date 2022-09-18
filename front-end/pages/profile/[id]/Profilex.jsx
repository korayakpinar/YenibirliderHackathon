import React from 'react'
import Link from 'next/link'
import {FaRegHeart, FaEdit} from 'react-icons/fa'
import Cards from './Cards'
import { useState } from 'react'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Header from "components/Navbar"
const Profilex = () => {
    const [modal1On, setModal1On] = useState(false);
    const [choice1, set1Choice] = useState(false)

    const clicked1 = () => {
      setModal1On(true)
    }
  
    const [modal2On, setModal2On] = useState(false);
    const [choice2, set2Choice] = useState(false)

    const clicked2 = () => {
        setModal2On(true)
    }

    const [modal3On, setModal3On] = useState(false);
    const [choice3, set3Choice] = useState(false)
  
    const clicked3 = () => {
      setModal3On(true)
    }
    
 return (
    <div className='bg-[#111827] overflow-y-auto h-screen flex justify-between'>
        <Header/>
        
        <div className='items-center grid grid-cols-2 grid-rows-2 min-h-screen h-auto w-auto ml-12 mt-[80px]'> 

            <Cards />
            <Cards />
            <Cards />
            <Cards />
            
            
           
        </div>
        
        <div className='p-10 h-full sticky mt-[80px]'>            
            <div className='w-400 h-150 m-auto bg-slate-800 rounded-xl flex p-4'>
                {/* Profile Photo */}
                <div onClick={clicked2} className='  z-50 absolute right-12 bg-slate-700 border-2 border-slate-600 border-dashed rounded-full p-2 max-h-9 w-max flex-row items-center cursor-pointer hover:scale-105 ease-in duration-100'>
                         <FaEdit className='text-white'/>
                    </div>
                    {modal2On && < Modal2 setModal2On={setModal2On} set2Choice={set2Choice} />}
                <img className='rounded-b-full  hover:scale-105 ease-in duration-100' 
                src="https://picsum.photos/200/300" 
                alt="/" 
                width={75} 
                height={75} 
                />
                {/* User Name and Follow Data */}
                <div>
                    <div className='flex p-4'>
                        <p className='dark:text-white font-poppins'>Zedit#3131</p>
                        {/* <FaRegHeart className=' ml-20' size={25}/> */}

                    </div>
                    {/* Follow data */}
                    <div className='flex justify-between'>
                        <div>
                            <p className=' p-4 font-poppins text-xs dark:text-white hover:scale-105 ease-in duration-100'>Followers</p>
                            <p className=' font-poppins text-xs dark:text-white flex justify-center'>0</p>
                        </div>
                        <div>
                            <p className=' p-4 font-poppins text-xs dark:text-white hover:scale-105 ease-in duration-100'>Followed</p>
                            <p className=' font-poppins text-xs dark:text-white flex justify-center'>0</p>
                        </div>
                        <div>
                            <p className=' p-4 font-poppins text-xs dark:text-white hover:scale-105 ease-in duration-100'>Writings</p>
                            <p className=' font-poppins text-xs dark:text-white flex justify-center'>0</p>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            {/* Bio */}
            <div className='w-400 h-150 m-auto bg-slate-800 rounded-xl flex justify-between p-4 mt-2'>
                <div>
                    <div onClick={clicked1} className='z-50 absolute right-12 bg-slate-700 border-2 border-slate-600 border-dashed rounded-full p-2 max-h-9 w-max flex-row items-center cursor-pointer hover:scale-105 ease-in duration-100'>
                         <FaEdit className='text-white'/>
                    </div>
                    <p className='font-poppins dark:text-white max-w-xs text-xs'> 
                    Follow along as I Build a NEXT JS Portfolio Website With Tailwind CSS. I wanted to update the portfolio and since I am starting to learn Next JS I thought I would build the new version with Next JS using Tailwind CSS for the styling. Lots of really cool features in Next JS - most known for server side rending, lazy loading images, and a built in routing system. We won't be utilizing server side rending in this particular build, however we do incorporate lazy loading images as well as the built in router. (Just to be clear to take advantage of lazy loading you must use the "Image" component imported from next/image. Images used as "img" will not be lazy loaded. Thanks for following along!
                    </p>
                    {modal1On && < Modal1 setModal1On={setModal1On} set1Choice={set1Choice} />}

                </div>
            </div>
            {/* Tags */}
            <div>
            <div className=' max-w-sm h-150  bg-slate-700 rounded-xl flex justify-between p-4 mt-2'>
                <div onClick={clicked3} className=' fixed z-50 absolute right-12 bg-slate-600 border-2 border-slate-500 border-dashed rounded-full p-2 max-h-9 w-max flex-row items-center cursor-pointer hover:scale-105 ease-in duration-100'>
                         <FaEdit className='text-white'/>
                    </div>
                    {modal3On && < Modal3 setModal3On={setModal3On} set3Choice={set3Choice} />}
                <div className='o dive overflow-auto overflow-x-hidden'>
                    <p className=' text-lg font-bold font-poppins text-white'>#Tags</p>
                    <div className='grid grid-cols-3 grid-rows-2 mt-2 place-items-stretch'>
                        <Link href='/succubus'>
                            <a>
                                <p className=' mr-2 mb-2 w-auto text-white font-roboto h-auto m-auto bg-slate-600 rounded-xl flex justify-between p-1 hover:scale-105 ease-in duration-100'> 
                                    Blockchain
                                </p>
                            </a>
                        </Link>
                        <Link href='/succubus'>
                            <a>
                                <p className=' mr-2 w-auto h-auto text-white font-roboto m-auto bg-slate-600 rounded-xl flex justify-between p-1 hover:scale-105 ease-in duration-100'> 
                                    Blockchain
                                </p>
                            </a>
                        </Link>
                        <Link href='/succubus'>
                            <a>
                                <p className=' mr-2 w-auto h-auto text-white font-roboto m-auto bg-slate-600 rounded-xl flex justify-between p-1 hover:scale-105 ease-in duration-100'> 
                                    Blockchain
                                </p>
                            </a>
                        </Link>
                        <Link href='/succubus'>
                            <a>
                                <p className='mr-2 w-auto h-auto text-white font-roboto m-auto bg-slate-600 rounded-xl flex justify-between p-1 hover:scale-105 ease-in duration-100'> 
                                    Nature
                                </p>
                            </a>
                        </Link>
                        <Link href='/succubus'>
                            <a>
                                <p className=' mr-2 w-auto h-auto text-white font-roboto m-auto bg-slate-600 rounded-xl flex justify-between p-1 hover:scale-105 ease-in duration-100'> 
                                    NFT
                                </p>
                            </a>
                        </Link>
                        <Link href='/succubus'>
                            <a>
                                <p className=' mr-2 w-auto h-auto text-white font-roboto m-auto bg-slate-600 rounded-xl flex justify-between p-1 hover:scale-105 ease-in duration-100'> 
                                    WEB3
                                </p>
                            </a>
                        </Link>
                        
                    </div>
                    
                    
                </div>
            </div>
            </div>
            {/* <div className='flex justify-end'>
                <div className='w-max h-auto bg-slate-500 rounded-3xl p-3 shadow-sm shadow-slate-300'>
                    <Link href='/succubus'>
                        <a>
                            Edit Your Profile
                        </a>
                    </Link>
                </div>
            </div> */}
            
        </div>



    </div>
  )
}

export default Profilex