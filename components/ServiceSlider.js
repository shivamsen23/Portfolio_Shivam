
import React from 'react';
import SwiperCore, { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'react-icons/rx';
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
} from 'react-icons/rx';
import {
  FaCamera,
  FaImage,
  FaPhotoVideo,
  FaPortrait,
  FaCameraRetro,
  FaArrowRight,
} from 'react-icons/fa';

// Initialize SwiperCore
SwiperCore.use([FreeMode, Pagination]);
  
// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting impactful brand identities that resonate and captivate, defining a distinct visual language.'
    },
    {
      icon: <RxPencil2 />,
      title: 'Design',
    description: 'I havecrafted innovative and user-centric designs that breathe life into digital experiences.'
      },
      {
        icon: <RxDesktop/>,
        title: 'Development',
        description: 'Elevating user experiences through modern, web-friendly development as a fresher.'
        },
       
          {
            icon: <FaCamera/>,
            title: 'Photography',
            description: 'Capturing timeless moments through a lens, showcasing my unique perspective in photography'
            },



]



//import { FreeMode, Pagination } from 'swiper'

const ServiceSlider = () => {
  return (

<Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {/* Service Slider */}
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-2'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowRight   className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

  );
};

export default ServiceSlider;
