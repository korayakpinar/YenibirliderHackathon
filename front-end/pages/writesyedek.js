import Link from 'next/link';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Rightbar from 'components/RightbarWrite';
import Comments from 'components/Comments';
import abi from '../back-end/constants/abi.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
const article = withRouter((props) => {
  const yorumlar = [
    { yazar: 'Taşşakpınar', tarih: '15 Eylül', yorum: 'Bu nasıl yazı amk' },
    { yazar: 'Berhan gelabigel', tarih: '15 Eylül', yorum: 'Beğenmedim abi' },
    { yazar: 'Kaan sucuk', tarih: '15 Eylül', yorum: 'ağzına sağlık' },
  ];
  // const router = useRouter()
  // const { id } = router.query
  useEffect(() => {
    console.log('Sayfa adresi', props.router.query.id);
  }, [props.router.query.id]);

  return (
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
                <div className='pb-16 w-full pt-24 lg:pt-28'>
                  <div className='markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4'></div>
                  <div className='flex'>
                    <div className='markdown px-6 xl:px-12 mr-0 ml-0 w-full max-w-3xl mx-auto lg:ml-0 pl-8'>
                      <div className='ml-5 relative overflow-y-auto overflow-x-hidden mb-8 mt-5 bg-[#212f4d] shadow-md p-4 rounded-lg shadow-md h-auto'>
                        <div className='flex flex-row w-full justify-center p-4 leading-normal'>
                          <img
                            src='https://mti.com/wp-content/uploads/2019/01/alert-png-1.png'
                            className='m-2 w-10 h-10'
                          ></img>
                          <div className='leading-normal flex items-center align-middle content-center'>
                            <p className='text-white text-xl font-bold text-center'>
                              Bu yazı problemli olabilir.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='flex pl-5 ml-10 my-8 flex-col items-center rounded-lg shadow-md md:flex-row md:max-w-xl '>
                        <div className='flex flex-col w-full justify-between p-4 leading-normal items-center'>
                          <p className='text-white font-medium text-m'>
                            Bu yazıda rozet bulunmuyor...
                          </p>
                        </div>
                      </div>
                      <div className='ml-5 relative overflow-y-auto overflow-x-hidden mb-8 mt-5 bg-[#212f4d]  p-4 rounded-lg shadow-md h-auto'>
                        <div className='flex flex-col w-full justify-between p-4 leading-normal'>
                          <div className='flex space-x-4  gap-0 items-center'>
                            <div className='flex-shrink-0'>
                              <img
                                src='https://flowbite.com/docs/images/examples/image-4@2x.jpg'
                                className='m-5 w-10 h-10 rounded-full shadow-lg'
                              ></img>
                            </div>
                            <div className='flex-1 min-w-0'>
                              <p className='font-bold text-white'>
                                Koray Akpınar
                              </p>
                            </div>
                            <div className=' w-1/2 h-[30px]'>
                              <div className='flex-shrink-0 h-full'>
                                <p className='text-white font-medium font-sans text-right'>
                                  10 Eylül
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='overflow-hidden'>
                            <p className='break-all text-white font-medium text-3xl'>
                              asdasd
                            </p>
                            <p className='mt-5 break-all text-gray font-light font-serif text-white text-xl'>
                              Merhaba ben koray akplipınar
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='ml-5 relative overflow-y-auto overflow-x-hidden mb-8 text-xl mt-5 p-4 rounded-lg shadow-md h-auto'>
                        <p className=' text-white font-bold font-poppins'>
                          Yorumlar
                        </p>
                      </div>
                      {yorumlar.map((yorum) => (
                        <Comments
                          yazar={yorum.yazar}
                          tarih={yorum.tarih}
                          yorum={yorum.yorum}
                        />
                      ))}
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
  );
});
export default article;
