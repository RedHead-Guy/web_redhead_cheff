import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopLogo from '../components/TopLogo'
import HeroSection from '../components/HeroSection'
import Galery from '../components/Galery'
import Cakes from '../components/Cakes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <TopLogo/>
      <HeroSection/>
     <Galery/>
     <Cakes/>
    </main>
  )
}
