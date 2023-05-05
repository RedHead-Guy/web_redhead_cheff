import React from 'react'
import PhotoStyled from './PhotoStyled'
import photo2 from '../../public/photogalery/photo2.jpg'
import Image from 'next/image'
 
const Cakes = () => {
  return (
    <div id='cakes' className="w-full h-[300px] text-center">
        <p>Cakes</p>
      <div className='max-w-[1120px] w-full h-full mx-auto ml-[64px] p-2 mr-[64px] flex justify-center items-center'>
        
        <div className='max-w-[1100px] mx-auto flex-col-8 justify-center h-full  '>
            <div className='flex md:flex-cols-2 lg:flex-cols-6 h-[200px] gap-4 content-center shadow-lg shadow-grey-300 hover:cursor-pointer hover:overscroll-contain overflow-x-scroll scroll-smooth hover:scroll-auto overflow-hidden '>
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={photo2} />
            </div>
        </div>
    </div>   </div>
  )
}

export default Cakes