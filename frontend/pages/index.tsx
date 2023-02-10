import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import BuildingIdeas from '../src/screen/BuildingIdeas';
import ContactUs from '../src/screen/ContactUs';
import GainProductivity from '../src/screen/GainProductivity';
import InnovatingSociety from '../src/screen/InnovatingSociety';
import StandOutMarket from '../src/screen/StandOutMarket';
import TechnologyExcellence from '../src/screen/TechnologyExcellence';

export default function Home() {
  return (
    <>
      <Head>
        <title>Scyberg</title>
      </Head>
      
      <Navbar />

      <BuildingIdeas />

      <TechnologyExcellence />

      <StandOutMarket />

      <GainProductivity />

      <InnovatingSociety />

      <ContactUs />
    </>
  )
}
