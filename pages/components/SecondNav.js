import Link from "next/link";
import Image from "next/image";

const SecondNav = ()=>{

    return(
    <div className="sticky z-20 top-0 bg-white ">
  <div className=" pt-2 pb-2 mx-5">
	<div className="flex  bg-pteal w-full pt-4 rounded-lg">  

    <div className="w-1/4 ">
        
    <Link href="/ " passHref>
     <div className="relative  mb-2">  
        <div className=" mx-auto text-lg text-white flex items-center">
        <span className="text-center w-full">
         <Image alt="image" src="/category.png" width={25} height={25}/>
          </span>  
        </div>
        </div>  
        </Link>
    
      {/* <div className="text-xs text-center md:text-base font-bold"><Link href="/">Categories</Link></div> */}
      </div>


      <div className="w-1/4">
        
        <Link href="/jobsandgigs " passHref>
         <div className="relative mb-2">  
            <div className=" mx-auto text-lg text-white flex items-center">
            <span className="text-center w-full">
             <Image alt="image" src="/jobs.png" width={25} height={25}/>
              </span>  
            </div>
            </div>  
            </Link>
        
          {/* <div className="text-xs text-center md:text-base font-bold"><Link href="/">Jobs n Gigs</Link></div> */}
          </div>



          <div className="w-1/4"> 
        <Link href="/offers" passHref>
         <div className="relative mb-2">  
            <div className=" mx-auto text-lg text-white flex items-center">
            <span className="text-center w-full">
             <Image alt="image" src="/offer.png" width={25} height={25}/>
              </span>  
            </div>
            </div>  
            </Link>
          {/* <div className="text-xs text-center md:text-base font-bold"><Link href="/offers">Offers</Link></div> */}
          </div>


          <div className="w-1/4">
        <Link href="/feed" passHref>
         <div className="relative mb-2">  
            <div className=" mx-auto text-lg text-white flex items-center">
            <span className="text-center w-full">
             <Image alt="image" src="/buzz.png" width={25} height={25}/>
              </span>  
            </div>
            </div>  
            </Link>
        
          {/* <div className="text-xs text-center md:text-base font-bold"><Link href="/">Buzz</Link></div> */}
          </div>






          <div className="w-1/4">
        <Link href="/explore" passHref>
         <div className="relative mb-2">  
            <div className=" mx-auto text-lg text-white flex items-center">
            <span className="text-center w-full">
             <Image alt="image" src="/explore.png" width={25} height={25}/>
              </span>  
            </div>
            </div>  
            </Link>
        
          {/* <div className="text-xs text-center md:text-base font-bold"><Link href="/">Buzz</Link></div> */}
          </div>




          <div className="w-1/4"> 
        <Link href="/offers" passHref>
         <div className="relative mb-2">  
            <div className=" mx-auto text-lg text-white flex items-center">
            <span className="text-center w-full">
             <Image alt="image" src="/shops.png" width={25} height={25}/>
              </span>  
            </div>
            </div>  
            </Link>
          </div>



	</div>

  </div>   
  <hr />
 
  </div>
    )
}


export default SecondNav;