import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/beyazlogo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
function Header() {
  /*
  Arama Kontrol
  */
  const [search, setSearch] = useState('');
  const searchChange = (event) => {
    setSearch(event.target.value);
  };
  const searchClick = (event) => {
    event.preventDefault();

    if (search.trim().length !== 0) {
      alert(`Aranacak kelime : ${search}`);
    } else {
      alert('Arama boş olamaz...');
    }
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
    <div className='fixed z-10 w-screen px-[1.2rem] py-[0.8rem] flex bg-[#111827] border-b-2 overflow-hidden'>
      <Link href='/home'>
        <div className='flex items-center cursor-pointer'>
          <Logo width={50} height={50} />
          {/*<div className="ml-[0.8rem] text-white font-semibold text-2xl">
            Dessay Market
          </div> */}
        </div>
      </Link>
      <div className='flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]'>
        <div className='text-[#8a939b] mx-3 font-bold text-lg'>
          <button onClick={searchClick}>
            <AiOutlineSearch />
          </button>
        </div>
        <input
          id='arama'
          onChange={searchChange}
          className='h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]'
          placeholder='Rozet, koleksiyon ve hesap ara...'
        />
      </div>

      <div className='flex items-center justify-end font-poppins'>
        <div className='text-white px-4 font-bold  hover:text-white cursor-pointer'>
          <Link href='/home'>
            <a>Anasayfa</a>
          </Link>
        </div>
        <div className='text-white px-4 font-bold  hover:text-white cursor-pointer'>
          <Link href='/nfts/explore'>
            <a>Keşfet</a>
          </Link>
        </div>

        <div className='text-white px-4 font-bold hover:text-white cursor-pointer'>
          <Link href='/badges'>
            <a>Satışa Sun</a>
          </Link>
        </div>
        <div
          className={
            isConnected
              ? 'text-white text-3xl font-black px-4 hover:text-white cursor-pointer'
              : 'hidden'
          }
        >

        </div>
        <div className='text-white text-3xl font-black px-4 hover:text-white cursor-pointer'>
          <a
            className={isConnected ? 'hidden' : 'visible'}
            onClick={isConnected ? '' : connect}
          >
            <MdOutlineAccountBalanceWallet />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
