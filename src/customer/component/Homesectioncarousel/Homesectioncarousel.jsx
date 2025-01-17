import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import Homesectioncard from '../Homesectioncard/Homesectioncard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

export default function Homesectioncarousel({ data, sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.5 },
  };


  const slideNext = () => setActiveIndex(activeIndex + 1)
  const slidePrev = () => setActiveIndex(activeIndex - 1)


  const syncActiveIndex = (item) => {
    setActiveIndex(item);
    // console.log(item)
  };
  const items = data.slice(0, 10).map((item) => <Homesectioncard product={item} width={'w-[14rem]'} margin={'my-0'} />)

  return (
    <div className='border relative'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5 '>

        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length - 5 && 
        
        <Button variant="contained" className="z-50" onClick={slideNext} sx={{ position: 'absolute', top: '8rem', right: '20px', transform: "translateX(50%) rotate(90deg)" }}
          color='white'  aria-label='next' style={{background:'white'}}>
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>


        }

        {activeIndex !== 0 && (
          <>
            <Button onClick={slidePrev} variant="contained" className="z-50" sx={{ position: 'absolute', top: '8rem', left: '20px', transform: "translateX(-50%) rotate(-90deg)" }}
              color='white' aria-label='next' style={{background:'white'}}>
              <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
            </Button>
          </>
        )}

      </div>

    </div>
  )
}
