function Comments({ yazar, tarih, yorum }) {
  return (
    <>
      <div className='ml-5 relative overflow-y-auto overflow-x-hidden mb-8 mt-5 bg-[#212f4d] px-4 rounded-lg shadow-md h-auto'>
        <div className='flex flex-col w-full justify-between leading-normal'>
          <div className='flex space-x-4  gap-0 items-center'>
            <div className='flex-shrink-0'></div>
            <div className='m-5 flex-1 min-w-0'>
              <p className='font-bold text-white'>
                {yazar.slice(0, 5) + '....' + yazar.slice(-5)}
              </p>
            </div>
            <div className=' w-1/2 h-[30px]'>
              <div className='flex-shrink-0 h-full'>
                <p className='text-white font-medium font-sans text-right'>
                  {tarih}
                </p>
              </div>
            </div>
          </div>
          <div className='overflow-hidden'>
            <p className=' mb-[10px] ml-[10px] break-all text-gray font-light font-serif text-white text-xl'>
              {yorum}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
