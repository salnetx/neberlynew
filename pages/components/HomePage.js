import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
const HomePage = ()=>{
    const {user} = useUser();
    return(
        <div>
         
       
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
    <h1 className="font-black mx-2 mb-5 text-xl flex">Rampurhat <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg></h1>

    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
   <Link href="/c/fooddelivery" passHref>
     <div className="overflow-hidden">
       <Image alt="image" className="rounded-lg" src="/foodDelivery.png" height={240} width={400} />
      </div>
      
      </Link>

<Link href="/c/grocery" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/grocery.png" height={240} width={400} />  
    </div>
    
    </Link>

    <Link href="/c/homemaintenance" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/home.png" height={240} width={400} />   
    </div>
    
    </Link>

    <Link href="/c/beauty" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/beauty.png" height={240} width={400} /> 
    </div>
    
    </Link>

    <Link href="/c/education" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/education.png" height={240} width={400} />  
    </div>
    
    </Link>

    <Link href="/c/fashion" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/fashion.png" height={240} width={400} />   
    </div>
    
    </Link>

    <Link href="/c/electronics" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/electronics.png" height={240} width={400} />  
    </div>
    
    </Link>
      
    <Link href="/c/transport" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/transport.png" height={240} width={400} />    
    </div>
    
    </Link>


    <Link href="/c/pharmacy" passHref>
   
   <div className="overflow-hidden">
     <Image alt="image" className="rounded-lg" src="/medic.png" height={240} width={400} />    
    </div>
    
    </Link>

    </div>
  </div>
        </div>
    )
}

export default HomePage;