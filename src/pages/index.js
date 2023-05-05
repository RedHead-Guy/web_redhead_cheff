import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopLogo from '../components/TopLogo'
import HeroSection from '../components/HeroSection'
import Galery from '../components/Galery'
import Cakes from '../components/Cakes'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <TopLogo/>
      <HeroSection/>
     <Galery/>
     <Cakes/>


      <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
      </div>
    </main>
  )
}
