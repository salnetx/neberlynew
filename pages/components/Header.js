import Head from "next/head";
const Header = ()=>{
   return(
       <div>
           <Head>
               <title>Rampurhat</title>
               <meta name="description" content="Myrph is a local business directory of Rampurhat"/>
               <link rel="canonical" href="http://example.com/" />
               <meta name="robots" content="noindex, nofollow" />

               <meta property="og:type" content="article" />
               <meta property="og:title" content="myrph" />
               <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
               <meta property="og:image" content="LINK TO THE IMAGE FILE" />
               <meta property="og:url" content="PERMALINK" />
               <meta property="og:site_name" content="myrph" />

               <meta name="twitter:title" content="Rampurhat" />
               <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />
               <meta name="twitter:image" content="LINK TO IMAGE" />
               <meta name="twitter:site" content="@neberlyapp" />
               <meta name="twitter:creator" content="@neberlyapp" />
               

           </Head>

       </div>
   )
}

export default Header;