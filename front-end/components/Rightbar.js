import Link from 'next/link';
import { ethers } from 'ethers';
import { useMoralis } from 'react-moralis';
import { useState, useEffect } from 'react';

function Rightbar() {
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
        console.log(`Bağlanılan zincir: ${chainId}`);
        const mumbaiChainId = '0x13881';
        if (mumbaiChainId !== chainId) {
          console.log('Bu ağ polygon mumbai değil');
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
    <div className='font-poppins hidden xl:text-sm xl:block xl:w-1/4 xl:px-6'>
      <div className='rounded-b-lg bg-gray-800'></div>
      <div className='flex flex-col justify-between overflow-y-auto sticky pt-12 pb-4 -mt-12 top-16'>
        <div className='mb-8'>
          <div className='flex my-8 flex-col items-center rounded-lg md:flex-row md:max-w-xl '>
            <div className='flex flex-col w-full justify-between  leading-normal items-center'>
              {isConnected ? (
                <Link href='/post/'>
                  <button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Yazı Paylaş
                  </button>
                </Link>
              ) : (
                <button
                  onClick={connect}
                  disabled={isConnecting}
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Yazı Yazmak İçin giriş yap
                </button>
              )}
            </div>
          </div>
          <h5 className='text-gray-500 uppercase dark:text-white tracking-wide font-bold text-sm lg:text-xs'>
            KISAYOLLAR
          </h5>
          <ul className='mt-4 overflow-x-hidden'>
            {isConnected ? (
              <li className='mb-4 lg:mb-2'>
                <Link href='/profile/'>
                  <a className='font-bold block transition-fast hover:translate-r-2px hover:text-gray-900 translate-r-2px text-gray-900 dark:text-white dark:hover:text-[#1d4ed8]'>
                    Profilin
                  </a>
                </Link>
              </li>
            ) : (
              ''
            )}
            <li className='mb-4 lg:mb-2'>
              <Link href='profile'>
                <a className='block transition-fast hover:translate-r-2px hover:text-gray-900 font-medium translate-r-2px text-gray-900 dark:text-white dark:hover:text-[#1d4ed8]'>
                  Yazıların
                </a>
              </Link>
            </li>
            <li className='mb-4 lg:mb-2'>
              <a
                href='/staking/'
                className='block transition-fast hover:translate-r-2px dark:text-white dark:hover:text-[#1d4ed8] hover:text-gray-900 font-medium text-gray-600'
              >
                Stake Sayfası
              </a>
            </li>
          </ul>
        </div>
        <div id='widget' className='rounded-lg shadow-lg'>
          <p className='mt-2 mx-2 text-gray-700'>
            <a className='text-gray-700 dark:text-white'>
              Seni sınırlayan tek şey &quot;düşüncelerin&quot;
            </a>
          </p>
          <div className='mt-2 mx-2'>
            {isConnected ? (
              <Link href='/post/'>
                <a className='text-sm text-gray-800 font-semibold hover:underline dark:text-white'>
                  Hemen paylaş →
                </a>
              </Link>
            ) : (
              <a
                onClick={connect}
                className='text-sm text-gray-800 font-semibold hover:underline dark:text-white'
              >
                Hemen giriş yap ve paylaş →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
