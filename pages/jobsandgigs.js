import Nav from "./components/Nav";
import SecondNav from "./components/SecondNav";
import Layout from "./components/Layout";
import Jobscard from "./components/Jobscard";
import Link from "next/link";

const jobsandgigs =()=>{
   return(
       <Layout>
      <div className="hidden sm:block">
      <Nav />
      <SecondNav />
      </div>
      <div className="flex sm:hidden justify-between pt-4 mx-2">
        <Link href="/"><a>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
        </a>
        </Link> 
        </div>
        <h1 className="font-black mx-7 my-5 text-xl flex">Rampurhat <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg></h1>

           <div className="grid sm:grid-cols-3 my-8 gap-x-8 mx-7 gap-y-5">
           
           <Jobscard />
           <Jobscard />
           <Jobscard />
           <Jobscard />

           </div>
        
       </Layout>
   )
}

export default jobsandgigs;