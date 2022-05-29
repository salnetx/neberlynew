import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout'
import Nav from './components/Nav'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import SecondNav from './components/SecondNav'
import HomePage from './components/HomePage'

export default function Home() {
  
  // const router = useRouter
  // const { user, error, isLoading } = useUser();

  return (
    <Layout>
    <div>
      <Nav />
      <SecondNav />
      <hr />
     <HomePage />
    </div>
    </Layout>
  )
}
