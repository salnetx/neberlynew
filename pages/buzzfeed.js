import Nav from "./components/Nav";
import SecondNav from "./components/SecondNav";
import Layout from "./components/Layout";
import Offercard from "./components/Offercard";
import Link from "next/link";

const buzzfeed =()=>{
   return(
       <Layout>
           <Nav />
           <SecondNav />
           <div className=" z-30 bg-white sticky top-0">
          <div className="justify-center flex gap-x-3 sm:mx-72 pt-2 mx-4 py-7 my-5">
            <Link href="buzz"><a className="w-1/2"> <h1 className="bg-pteal text-tkb text-center text-xl py-2 font-black rounded-lg rounded-r-sm">Feed</h1>
            </a></Link> <Link href="buzzfeed"><a className="w-1/2"><h1 className="bg-tkb text-pteal text-center text-xl font-black py-2 rounded-lg rounded-l-sm">Match</h1>
            </a></Link> 
          </div>
          </div>
          <div className="grid gap-y-5 mx-5 bg-cover justify-center ">
          
          <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
      <div id="header" className="flex items-center mb-4"> 
         <div id="header-text" className="leading-5 ml-6 sm">
            <h4 id="name" className="text-xl font-semibold">John Doe</h4>
            <h5 id="job" className="font-semibold text-blue-600">Designer</h5>
         </div>
      </div>
      <div id="quote">
         <q className="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
      </div>
   </div>

   <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
      <div id="header" className="flex items-center mb-4"> 
         <div id="header-text" className="leading-5 ml-6 sm">
            <h4 id="name" className="text-xl font-semibold">Mitchel Stark</h4>
            <h5 id="job" className="font-semibold text-blue-600">Programmer</h5>
         </div>
      </div>
      <div id="quote">
         <q className="italic text-gray-600">Simagu na ma sika, este amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
      </div>
   </div>


   <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
      <div id="header" className="flex items-center mb-4"> 
         <div id="header-text" className="leading-5 ml-6 sm">
            <h4 id="name" className="text-xl font-semibold">Samita Roy</h4>
            <h5 id="job" className="font-semibold text-blue-600">Teacher</h5>
         </div>
      </div>
      <div id="quote">
         <q className="italic text-gray-600">Teacher, guten morgen, ich bin samita roy adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
      </div>
   </div>


              </div>
            
       </Layout>
   )
}

export default buzzfeed;