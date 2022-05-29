import Products from "./Products";
const Offercard = ()=>{
    return(
        <div>

<a
  href=""
  className="relative block overflow-hidden bg-center bg-no-repeat bg-cover sm:mx-28 rounded-xl"
  style={{backgroundImage: `url(https://www.hyperui.dev/photos/beach-1.jpeg)`}}
>
  <span
    className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full  right-4 top-4"
  >
    50% off &nbsp;
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
    </path></svg>
    </span>

  <div className="relative p-8 pt-40 text-white bg-black bg-opacity-40">
    <h5 className="text-2xl font-bold">Get upto 50% off</h5>

    <p className="text-sm">visit now</p>
  </div>
</a>
        </div>
    )
}

export default Offercard;