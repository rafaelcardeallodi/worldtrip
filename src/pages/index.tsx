import Head from 'next/head'
import { Header } from './components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>  
      <Header />
    </>
  )
}
