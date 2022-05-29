// import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// import { useUser } from "@auth0/nextjs-auth0";
const Nav  = ()=>{
    // const router = useRouter
    // const { user, error, isLoading } = useUser();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    return(
      <div className="sticky top-0 z-10">
      <div className="w-full bg-white h-16 flex justify-between ">
      
        <div className="w-full lg:w-30/6 xl:w-full  h-full flex items-center pl-4 ">          
        <Image src="/neberly.png" priority alt="addify logo" width={143} height={34} />
        </div>
       
        
        <div className="w-full h-full gap-x-2 pr-4 flex justify-end items-center">
 

        <Link href="/profile" passHref>
  		  <button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
        <Image src="/profile.png" priority alt="addify logo" width={20} height={20} />
        </button>
        </Link>


        <Link href="/message" passHref>
  		<button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
      <Image src="/chat.png" priority alt="addify logo" width={20} height={20} />
      </button>
        </Link>

        <Link href="/search" passHref>
  		<button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
      <Image src="/search.png" priority alt="addify logo" width={20} height={20} />
      </button>
        </Link>

        
  		{/* <button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
       {(user) ? <Link href="/profile" passHref><Image height={60} width={60} className="rounded-full w-8" src={user.picture} alt={user.name} /></Link> : <Link href="/api/auth/login" passHref><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></Link>} 
        </button> */}



        </div>



  </div>
  {/* <hr className="border--2 border-black"/> */}
    </div>
    )
}


export default Nav;