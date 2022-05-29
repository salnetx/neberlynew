import Link from "next/link";
import Image from "next/image";
import Products from "./components/Products";
const offers = ()=>{
   return(
<div className="flex mx-4 flex-col font-poppins bg-no-repeat bg-cover bg-center">
<div className="flex justify-between pt-4 ">
  <div className="hover:bg-pgreen rounded-full">
    <Link href="/"><a>  
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
    </a>
    </Link> 
    </div>
    <p className="font-semibold">Offers</p>

<div className="flex gap-x-2">
    
    <Link href="/search" passHref>
  		<button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
      <Image src="/search.png" priority alt="addify logo" width={20} height={20} />
      </button>
    </Link>

    <Link href="/search" passHref>
  		<button className="relative opacity-80 w-7 h-7  focus:outline-none hover:animate-pulse rounded-full  flex items-center justify-center">
      <Image src="/profile.png" priority alt="addify logo" width={20} height={20} />
      </button>
    </Link>
   
   </div>

</div>
<div className="flex gap-x-3 pt-5">

<span class="px-4 py-2 flex rounded-full text-zinc-900 bg-gray-200 ">
    <svg width="20" fill="currentColor" height="20" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
        </path>
    </svg>
    Fashion
</span>

<span class="px-4 py-2 flex rounded-full text-zinc-900 bg-gray-200 ">
    <svg width="20" fill="currentColor" height="20" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
        </path>
    </svg>
    Grocery
</span>

<span class="px-4 py-2 flex rounded-full text-zinc-900 bg-gray-200 ">
    <svg width="20" fill="currentColor" height="20" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
        </path>
    </svg>
    Service
</span>

</div>





<div className=" mx-4">
<div className="sm:mx-32 sm:gap gap-5 grid sm:grid-cols-3 grid-cols-2 py-8">
               <Products />
               <Products />
               <Products />
               <Products />
               <Products />
</div>
</div>
</div>
   )
}

export default offers;