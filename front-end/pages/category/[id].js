import { ethers } from 'ethers';
import abi from '../../back-end/constants/abi.json';
import { useRouter } from 'next/router';
import {
  BiHomeCircle,
  BiCategory,
  BiShoppingBag,
  BiNotification,
} from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { VscSettingsGear } from 'react-icons/vsc';
import Navbar from 'components/Navbar';
import Card from 'components/Cards';
import Sidebar from 'components/Sidebar';
import Rightbar from 'components/Rightbar';
import { useMoralis } from 'react-moralis';
import { useEffect, useState } from 'react';
import Head from 'next/head';
export default function home() {
  const router = useRouter();
  const [katbas, setKatbas] = useState('');
  const { id } = router.query;
  const kategoriad = [
    'Felsefe',
    'Bilim Kurgu',
    'Teknoloji',
    'Bilim',
    'Sanat',
    'Müzik',
    'Programlama',
    'Biyoloji',
    'Fizik',
    'Kimya',
    'Matematik',
    'Evrim',
    'Havacılık',
    'Coğrafya',
    'Film İncelemesi',
    'Bilgisayar Bilimleri',
    'Kripto',
  ];

  useEffect(() => {
    if (!router.isReady) return;
    else {
      getWritingsForTopic(id);
      setKatbas(kategoriad[id - 1]);
    }
  }, [router.isReady]);
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

        const contractAddress = '0x8E4Ab153732b3a818C0fB19ce472F6abb1cbc7CE';
        const contract = new ethers.Contract(contractAddress, abi, ourSigner);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  const [yazilar, setYazilar] = useState([]);
  async function getWritingsForTopic(guncelid) {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
    const ourSigner = connectedProvider.getSigner();
    const contractAddress = '0x8E4Ab153732b3a818C0fB19ce472F6abb1cbc7CE';
    const contract = new ethers.Contract(contractAddress, abi, ourSigner);
    /**
 * const tumyazilar = await Promise.all(
      data.map(async (i) => {
        let yaziicerik = {
          id: i.id,
          baslik: i.header,
          ipfs: i.ipfsaddress,
          yorumsayi: parseInt(i.replyCount, 16),
          upvotesayi: parseInt(i.upvoteCount, 16),
          yazar: i.publisher.toString(),
          index: parseInt(i.index),
          timestamp: parseInt(i.tstamp),
        };
        return yaziicerik;
      })
    );
    setYazilar(tumyazilar);
 */
    try {
      const writings = await contract.getWritingsForTopic(
        ethers.BigNumber.from(guncelid - 1)
      );
      const tumyazilar = await Promise.all(
        writings.map(async (i) => {
          let yaziicerik = {
            id: i.id,
            baslik: i.header,
            ipfs: i.ipfsaddress,
            yorumsayi: parseInt(i.replyCount, 16),
            upvotesayi: parseInt(i.upvoteCount, 16),
            yazar: i.publisher.toString(),
            index: parseInt(i.index),
            timestamp: parseInt(i.tstamp),
          };
          return yaziicerik;
        })
      );
      setYazilar(tumyazilar);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Dessay - Blockchain</title>
        <meta
          name='description'
          content='Dessay - Merkeziyetsiz yazı ve makale paylaş'
        />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='dark:bg-[#111827]'>
        <Navbar />
        <div className='w-full max-w-screen-xl mx-auto px-6 dark:bg-[#111827]'>
          <div className='lg:flex -mx-6'>
            <Sidebar />
            <div
              id='content-wrapper'
              className='min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5'
            >
              <div id='content' className='z-10'>
                <div id='app' className='flex'>
                  <div className='pb-10 w-full lg:pt-20'>
                    <div className='flex'>
                      <div className='markdown px-6 xl:px-12 mr-0 ml-0 w-full max-w-3xl mx-auto lg:ml-0 pl-8'>
                        <div className=' flex justify-center mt-5 ml-12'>
                          <h2 className=' text-white text-3xl font-bold'>
                            {katbas}
                          </h2>
                        </div>

                        <div className='ml-5 relative overflow-hidden mb-8 '>
                          {yazilar.map((yazi) => (
                            <Card yazilar={yazi} key={yazi.id} />
                          ))}
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
