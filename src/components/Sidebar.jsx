import React from 'react'
import {GiLightningStorm, GiBottledBolt ,GiPieSlice} from 'react-icons/gi'
import {BsPlus, BsFillLightbulbFill, BsGearFill, BsInstagram } from 'react-icons/bs'
import {FaFire, FaPoo, FaInstagram} from 'react-icons/fa'
import{TbBrandCakephp} from 'react-icons/tb'
import SidebarIcon from './SidebarIcon'


const Sidebar = () => {
  return (
   <div className='sidebar'>
   <SidebarIcon icon ={<GiPieSlice size={50}/>} text="Десерты" />
   <SidebarIcon icon ={<GiBottledBolt  size={50}/>} text="Напитки" />
   <SidebarIcon icon ={<TbBrandCakephp size={50}/>} text="Основное" />
   <SidebarIcon icon ={<BsPlus size={50}/>} text="Ещё" />
  </div>
  )
}
export default Sidebar