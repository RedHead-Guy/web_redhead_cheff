import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PhotoStyled = ({backgroundImg}) => {
  return (
<Image className='justify-center rounded-xl h-[90%] content-center bg-center w-auto 
hover:scale-150   ease-in duration-300' src={backgroundImg} width='64' height='64' alt='/' />
  )  
}

export default PhotoStyled