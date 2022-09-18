import Image from 'next/image';
import Link from 'next/link';
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';
import { BsBookmarkPlus } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { IoSend } from 'react-icons/io5';
import { useState } from 'react';
function Cards({ id, header, ipfs }) {
  const [isActive, setIsActive] = useState(false);

  const yorumac = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div
        className={
          isActive
            ? 'flex ml-10 mt-8 mb-1 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-[300px]'
            : 'flex ml-10 mt-8 mb-1 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-[280px]'
        }
      >
        <img
          className='object-fill w-full lg:h-full rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg'
          src='https://www.w3schools.com/html/img_girl.jpg'
          alt=''
        />

        <div className='flex flex-col justify-between overflow-hidden overflow-ellipsis px-4 leading-normal'>
          <div className=''>
            <Link href='/writes/[id]' as={`/writes/${id}`}>
              <a>
                <h5 className='truncate overflow-hidden mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                  {header}
                </h5>
              </a>
            </Link>
          </div>
          <Link href='/'>
            <a>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3'>
                {ipfs}
              </p>
            </a>
          </Link>
        </div>
      </div>

      {/*
      <div
        className="rounded-t-lg overflow-hidden  px-3 py-10 flex justify-center z-0"
        id="postCard"
      >
        <div className="w-full max-w-xs">
          <Link href="writes/[id]" as={`/writes/${write.id}`}>
            <a
              href="#"
              className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {write.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {write.body}
              </p>
            </a>
          </Link>
        </div>
      </div> */}
    </>
  );
}
export default Cards;
