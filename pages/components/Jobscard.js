import Image from "next/image";
const jobscard = ()=>{
    return(
        <div>

<article className="bg-luxwhite border-2 border-zinc-800 rounded-xl">
  <div className="flex items-start p-6">
    <a href="" className="block shrink-0">
      <img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="User Avatar"
        className="object-cover rounded-lg h-14 w-14"
      />
    </a>

    <div className="ml-4">
      <strong className="font-medium sm:text-lg">
        <a href="" className="hover:underline">
        
        রাঁধুনি
        </a>
      </strong>

      <p className="text-sm text-gray-700 line-clamp-2">
      রাঁধুনি চাই, খুব আর্জেন্ট

      </p>

      <div className="mt-2 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <p className="ml-1 text-xs">3 Applied</p>
        </div>

        <span className="hidden sm:block" ariaHidden="true">&middot;</span>

        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
          Posted by
          <a href="" className="font-medium underline hover:text-gray-700"
            > elmigoshop</a
          >
        </p>
      </div>
    </div>
  </div>

  <div className="flex justify-end">
    <strong
      className="inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-pgreen py-1.5 px-3 text-pblue"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>

      <span className=" font-medium sm:text-xs">Hiring!</span>
    </strong>
  </div>
</article>



        </div>
    )
}

export default jobscard;