import Nav from "./components/Nav";
import SecondNav from "./components/SecondNav";
import Layout from "./components/Layout";
import Link from "next/link";
import Offercard from "./components/Offercard";

const buzz =()=>{
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
        <h1 className="font-black mx-7 my-5 text-xl flex">Feed | Top Nebers </h1>


         <div className="grid gap-y-5 mx-5 sm:grid-cols-2">
              <Offercard />
              <Offercard />
              <Offercard />
              <Offercard />
              <Offercard />
              <Offercard />

              </div>
            
       </Layout>
   )
}

export default buzz;