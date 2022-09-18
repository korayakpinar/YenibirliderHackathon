//import { ConnectButton } from '@web3uikit/core';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/beyazlogo.svg';
import PP from 'public/yan3.jpg';
import { ethers } from 'ethers';
function Navbar() {
  const [open, setOpen] = useState(false);
  const menuAc = () => {
    setOpen((current) => !current);
  };
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
        setCurrentAccount(accounts[0]);
        setIsConnecting(true);
        await ethereum.request({
          method: 'eth_requestAccounts',
        });
        window.localStorage.setItem('connected', 'injected');
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
    let chainId = await ethereum.request({ method: 'eth_chainId' });
    const mumbaiChainId = '0x13881';
    if (chainId !== mumbaiChainId) {
      setCorrectNetwork(false);
    } else {
      setCorrectNetwork(true);
    }
  };
  useEffect(() => {
    if (
      typeof window.ethereum !== 'undefined' &&
      window.localStorage.getItem('connected')
    ) {
      connect();
    }
  }, []);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', () => {
        connect();
      });
    }
  }, []);
  return (
    <>
      <div>
        <div id='header'>
          <div className='flex bg-white border-b border-gray-200 fixed top-0  z-50 inset-x-0 h-16 items-center dark:bg-[#111827]'>
            <div className='w-full max-w-screen-xl relative mx-auto px-6'>
              <div className='flex items-center -mx-6'>
                <div className='lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8'>
                  <div className='flex items-center'>
                    <Link href='/home'>
                      <a className='block lg:mr-4'>
                        <Logo
                          height={50}
                          width={50}
                          className='dark:text-white'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5'>
                  <div className='w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12'>
                    <div className='relative'>
                      <center>
                        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                          <svg
                            aria-hidden='true'
                            className='w-5 h-5 text-gray-500 dark:text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                          </svg>
                        </div>
                        <input
                          type='search'
                          id='default-search'
                          className='font-poppins block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='Profil yazı veya kategori ara...'
                          required
                        />
                        <button
                          type='submit'
                          className='text-white absolute right-2.5 bottom-[5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                          Ara
                        </button>
                      </center>
                    </div>
                  </div>
                  <div className='hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6'>
                    <div className='mr-4'>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500'></div>
                    </div>
                    <div className='flex justify-start items-center text-gray-500'>
                      <div>
                        {/*
                        <Link href="/profile">
                          <a>
                            <img
                              className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                              src="/yan3.jpg"
                              alt="Kullanıcı fotoğrafı"
                            />
                          </a>
                        </Link> */}
                        {currentAccount ? (
                          <button
                            type='button'
                            className='dark:bg-gray-700 inline-flex w-full justify-center rounded-md bg-white px-2 p-2 text-sm font-medium text-white shadow-sm  focus:outline-none '
                            id='menu-button'
                            onClick={menuAc}
                            aria-expanded='true'
                            aria-haspopup='true'
                          >
                            {currentAccount.slice(0, 5)}
                            ...
                            {currentAccount.slice(-4)}
                            <svg
                              className='-mr-1 ml-2 h-5 w-5'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'
                            >
                              <path d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' />
                            </svg>
                          </button>
                        ) : (
                          <button
                            className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            onClick={connect}
                            disabled={isConnecting}
                          >
                            Bağlan
                          </button>
                        )}
                        <div
                          className={
                            open && isConnected
                              ? 'visible absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                              : 'hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                          }
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='menu-button'
                          tabIndex='-1'
                        >
                          <div
                            className='py-1 rounded-lg dark:bg-gray-800 font-poppins'
                            role='none'
                          >
                            <Link href='/profile/'>
                              <a
                                className='text-white block px-4 py-2 text-sm'
                                role='menuitem'
                                tabIndex='-1'
                                id='menu-item-0'
                              >
                                Profil
                              </a>
                            </Link>
                            <Link href='/badges/'>
                              <a
                                className='text-white block px-4 py-2 text-sm'
                                role='menuitem'
                                tabIndex='-1'
                                id='menu-item-1'
                              >
                                Rozetlerim
                              </a>
                            </Link>
                            <Link href='/staking'>
                              <a
                                className='text-white block px-4 py-2 text-sm'
                                role='menuitem'
                                tabIndex='-1'
                                id='menu-item-1'
                              >
                                Stake
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*
                        <button
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        
                         
                        >
                          Bağlan
  </button> */}
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
export default Navbar;
