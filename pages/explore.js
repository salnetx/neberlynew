import Nav from "./components/Nav";
import SecondNav from "./components/SecondNav";

const explore = ()=>{
   return(
       <div>
           <Nav />
           <SecondNav />
           <div className="flex justify-center mt-5">
           <div className="text-3xl text-pteal animate-spin rotate-180">O</div>
           <div className="text-3xl text-sweetgray rotate-100 animate-spin">O</div>
           <div className="text-3xl text-pyellow animate-spin rotate-180">O</div>
           <div className="text-3xl text-vintagewhite rotate-100 animate-spin">O</div>

           </div>

       </div>
   )
}

export default explore;