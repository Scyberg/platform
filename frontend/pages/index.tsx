import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import BuildingIdeas from '../src/screen/BuildingIdeas';

export default function Home() {
  return (
    <>
      <Head>
        <title>Scyberg</title>
      </Head>
      
      <Navbar />
      
      <BuildingIdeas />
    </>
  )
}
