import Nav from "./Nav";

const Ad1 = ({colors})=>{
    const adcolor = colors
  return(
      <div>
         <div style={{backgroundColor: adcolor}} className="adcolor text-white font-black text-center opacity-50 rounded-xl py-12 my-5 mx-5"> This is a cute ad</div>
      </div>
  )
}

export default Ad1;