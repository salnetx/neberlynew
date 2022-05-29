import Link from "next/link";
import Image from "next/image";
import Preview from "./components/Preview";
const search = ()=>{
   return(
<div className="flex mx-4 flex-col font-poppins bg-no-repeat bg-cover bg-center">
<div className="flex justify-between pt-4 ">
  <div className="hover:bg-pgreen rounded-full">
    <Link href="/"><a>  
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
    </a>
    </Link> 
    </div>
    <p className="font-semibold">Search</p>

<div className="flex gap-x-2">
    
    <Link href="/search" passHref>
  		<button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
      <Image src="/offer.png" priority alt="addify logo" width={20} height={20} />
      </button>
    </Link>

    <Link href="/search" passHref>
  		<button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
      <Image src="/profile.png" priority alt="addify logo" width={20} height={20} />
      </button>
    </Link>
   
   </div>

</div>
<hr className="mt-3 " />

</div>
   )
}

export default search;