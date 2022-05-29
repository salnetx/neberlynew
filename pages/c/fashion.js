import Layout from '../components/Layout'
import Link from 'next/link'
import Nav from '../components/Nav'
import Products from '../components/Products'
import SecondNav from '../components/SecondNav'

const fashion = ()=> {
  

  return (
    <Layout>
      <div>
            <Nav />
            <SecondNav />
           
            <div className="sm:mx-32 mx-4 sm:gap gap-5 grid sm:grid-cols-3 grid-cols-2 py-8">
            
            <Link passHref href="/productspage">
            <a><Products /></a>
            </Link>

            <Link passHref href="/productspage">
            <a><Products /></a>
            </Link>

            <Link passHref href="/productspage">
            <a><Products /></a>
            </Link>

            <Link passHref href="/productspage">
            <a><Products /></a>
            </Link>

            <Link passHref href="/productspage">
            <a><Products /></a>
            </Link>

            <Link passHref href="/productspage">
            <a><Products /></a>
            </Link>

            <Link passHref href="/productspage">
            <a><Products /></a>
            </Link>


            </div>
            
        </div>
    </Layout>
  )
}


export default fashion;