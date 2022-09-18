import Link from "next/link";

function Bookmark() {
  return (
    
    <div className=" grid grid-rows-1 gap-4">
      <Link href={'/writes/1'}>
        <a>
          <div className=" bg-slate-800 rounded-3xl">
            <div className=" ml-4 flex justify-between p-3">
              <div>
                <h1 className=" text-2xl font-bold text-white">
                {" "}
                Blockchain nedir?{" "}
                </h1>
                <p className=" text-lg text-white"> Yazar: Koray Akpinar</p>
              </div>
              <div>
                <img
                  className="object-fill w-[70px] h-[70px] rounded-xl "
                  src="https://www.w3schools.com/html/img_girl.jpg"
                  alt=""
                />
              </div>
            </div>      
          </div>
        </a>
      </Link>
      
    </div>
  );
}

export default Bookmark;
