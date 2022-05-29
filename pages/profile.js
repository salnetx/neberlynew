import React from 'react';
import Preview from './components/Preview';
// import { useUser } from '@auth0/nextjs-auth0';
// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Nav from './components/Nav';
import Link from 'next/link';
import Image from 'next/image';
import Ad1 from './components/Ad1';

const profile = ()=> {
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
      <div>
        <div className=" overflow-x-hidden bg-sweetgray sm:bg-luxwhite">
          <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12 px-3">
       


  <div className="flex flex-col font-poppins bg-no-repeat bg-cover bg-center">
    <div className="flex justify-between pt-4 ">
      <div className="hover:bg-pgreen rounded-full">
        <Link href="/"><a>  
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </a>
        </Link> 
        </div>
        <p className="font-semibold">My Profile</p>
    <div>
       <Link passHref href="/api/auth/logout"><a> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
       </a></Link></div>
    </div>
    <div className="flex items-center px-4 mx- my-5 bg-white shadow-sm rounded-3xl py-5 justify-between">
      <div className=" flex items-center rounded-full">
        <Image width={100} height={100} className="rounded-full mx-auto" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580" />
      </div>
      <div className="w-9/12 flex items-center">
        <div className="w-10/12 flex flex-col leading-none pl-4">
          <p className="text-2xl font-bold flex space-x-1">nita856
              <svg className="w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          
           </p>
           <p className="text-sm pt-2 text-gray-700 font-black">Nita Patel</p>
           <p className="text-sm pt-1 font-light text-pblue">Plumber</p>
          <p className="text-sm pt-1 font-light text-pblue">nitapatelsadaf@neberly.com</p>
          <p className="text-sm pt-1 font-black text-tkr flex">view activity </p>




        </div>
        <div className="w-2/12">
          <div>
         <a href="/edit/profile">  <svg xmlns="http://www.w3.org/2000/svg" className="text-tkr" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"/></svg>
          </a> </div>
        </div>
      </div>
    </div>

          <div className="justify-center shadow-sm py-5 bg-white flex gap-x-3 sm:mx-5 mx-2 rounded-xl">
           <p>Your rating</p>
           <p>4.2</p>
          </div>
  
    <hr className='mt-5 mx-5' />
   
    <div className='flex py-5 grid  grid-cols-3 gap-x-5 px-5 gap-y-5 justify-center text-center'>
    
      <div className='bg-white shadow-sm py-10 rounded-3xl font-black flex justify-center'>
     Likes

        </div>

        <div className='bg-white shadow-sm py-10 rounded-3xl font-black flex justify-center'>
        Orders
        </div>

        <div className='bg-white shadow-sm py-10 rounded-3xl font-black flex justify-center'>
      Booking
       </div>

        <div className='bg-white shadow-sm py-10 rounded-3xl font-black flex justify-center'>
      Ticket</div>

        <div className='bg-white shadow-sm py-10 rounded-3xl font-black flex justify-center'>
       Monetize</div>

        <div className='bg-white shadow-sm py-10 rounded-3xl font-black flex justify-center'>
         Site</div>


    </div>

    <h1 className='mx-8 text-xl font-black py-8'>Bookings</h1>
    <h2 className='text-center py-8 animate-pulse'>No bookings yet...</h2>


{/*
<div className='flex grid grid-cols-7 my-5 gap-x-4 py-'>
<h1 className='bg-tkr text-white font-black text-center col-end-8 rounded-lg py-2'>Logout</h1>
</div> */}


</div>

          {/* <ProfileComp /> */}
          </div>

<div className="fixed right-0 w-4/12 h-1/12 hidden lg:block pt-4">   
   <Preview />



</div>

</div>
</div>



      </div>
    
  );
}

export default profile;