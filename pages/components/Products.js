import Image from "next/image";
import Link from "next/link";
const Products = ()=>{
return(

    <div>
    <div className="relative">  
      <div className="bg-white text-lg text-white flex items-center">
        <span className="text-center text-gray-600">
        <Image alt="image" className=" rounded-lg" width={300} height={300} src="https://i.pinimg.com/564x/75/99/a3/7599a38e9b76b24cdbbd724ef33ef99c.jpg" />
        </span>  
        
        </div>
        <div className="text-xs md:text-base font-bold">Delete</div>

    </div>

  </div>

)
}
export default Products;