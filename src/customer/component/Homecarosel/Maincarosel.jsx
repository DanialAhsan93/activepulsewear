import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincaroseldata } from './MaincaroselData.js';
import '../../Style/homestyle.css';


const Maincarosel = () => {

  const items = maincaroseldata.map((item) => {
    return (
      <>
        <div className='w-full lg:h-[450px] md:h-[400px] sm:h-[300px] h:[310px] flex justify-center items-center bg-[#F2F2F2] py-9 main-section cursor-pointer -z-10'>

          <div className='lg:w-[1200px] lg:h-[400px] md:w-[720px] sm:w-[550px] w-[310px] h:[220px] flex bg-[#ffffff] rounded-2xl hero'>
            <div className='flex items-center w-[62%] rounded-s-2xl sm:ps-12 ps-1'>
              <div>

                <div className='text-[#283962] font-bold lg:text-5xl md:text-4xl sm:text-3xl text-[16px] my-2
                corousel-title'>
                  {item.title}
                </div>
                <span className='text-[#283962] font-semibold md:text-[28px] sm:text-[20px] text-[12px] my-1
                corousel-desc' >
                  {item.description}
                </span>

              </div>

            </div>

            <div className='flex w-[38%] rounded-e-2xl'>
              <img className='w-full rounded-e-2xl' role='presentation' src={item.image} alt="" />
            </div>
          </div>
        </div>
      </>
    )
  }
  );

  return (

    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
  )


};

export default Maincarosel;