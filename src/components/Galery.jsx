import React from 'react'
import PhotoStyled from './PhotoStyled'
import photo2 from '../../public/photogalery/photo2.jpg'
 import ph_c from '../../public/photogalery/ph_c.jpg'
 import ph_plov from '../../public/photogalery/ph_plov.jpg'
 import phchiz from '../../public/photogalery/phchiz.jpg'
 import photo_6 from '../../public/photogalery/photo_6.jpg'
 import photo_7 from '../../public/photogalery/photo_7.jpg'
 import photo_8 from '../../public/photogalery/photo_8.jpg'
 import photo_9 from '../../public/photogalery/photo_9.jpg'
 import photo_10 from '../../public/photogalery/photo_10.jpg'
 import photo_11 from '../../public/photogalery/photo_11.jpg'
 import photo_ad from '../../public/photogalery/photo_ad.jpg'
import photo_b from '../../public/photogalery/photo_b.jpg'
import photo3 from '../../public/photogalery/photo3.jpg'
import photo1 from '../../public/photogalery/photo1.jpg'

const Galery = () => {
  return (
    <div id='galery' className="w-full h-[300px] text-center">
      <div className='max-w-[1120px] w-full h-full mx-auto ml-[64px] p-2 mr-[64px] flex justify-center items-center'>
 <div className='max-w-[1100px] mx-auto flex-col-8 justify-center h-full  '>
            <div className='flex md:flex-cols-2 lg:flex-cols-6 h-[200px] gap-4 content-center shadow-lg shadow-grey-300 hover:cursor-pointer hover:overscroll-contain overflow-x-scroll scroll-smooth hover:scroll-auto overflow-hidden '>
                 <PhotoStyled backgroundImg={photo2} />
                 <PhotoStyled backgroundImg={ph_c} />
                 <PhotoStyled backgroundImg={ph_plov} />
                 <PhotoStyled backgroundImg={phchiz} />
                 <PhotoStyled backgroundImg={photo_6} />
                 <PhotoStyled backgroundImg={photo_7} />
                 <PhotoStyled backgroundImg={photo_8} />
                 <PhotoStyled backgroundImg={photo_9} />
                 <PhotoStyled backgroundImg={photo_10} />
                 <PhotoStyled backgroundImg={photo_11} />
                 <PhotoStyled backgroundImg={photo_ad} />
                 <PhotoStyled backgroundImg={photo_b} />
                 <PhotoStyled backgroundImg={photo3} />
                 <PhotoStyled backgroundImg={photo1} />
            </div>
        </div>
    </div>   </div>
  )
}

export default Galery