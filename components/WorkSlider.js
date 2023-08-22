// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/P1.png',
          githubLink: 'https://shivamsen23.github.io/Neverland/',
          projectLink: 'https://project1-site.com',
        },
        {
          title: 'title',
          path: '/P2.png',
          githubLink: 'https://shivamsen23.github.io/CyberFiction/',
          projectLink: 'https://project1-site.com',
        },
        {
          title: 'title',
          path: '/P3.png',
          githubLink: 'https://shivamsen23.github.io/Books1/',
          projectLink: 'https://project1-site.com',
        },
        {
          title: 'title',
          path: '/P4.png',
          githubLink: 'https://shivamsen23.github.io/GOFood/',
          projectLink: 'https://project1-site.com',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/P5.png',
          githubLink: 'https://github.com/your-username/project1',
          projectLink: 'https://project1-site.com',
        },
        {
          title: 'title',
          path: '/P6.png',
          githubLink: 'https://github.com/shivamsen23/ChatApp',
          projectLink: 'https://project1-site.com',
        },
        {
          title: 'title',
          path: '/P7.png',
          githubLink: 'https://github.com/your-username/project1',
          projectLink: 'https://project1-site.com',
        },
        {
          title: 'title',
          path: '/p8.png',
          githubLink: 'https://github.com/shivamsen23/Sanitation-Xpress',
          projectLink: 'https://project1-site.com',
        },
      ],
    },
  ],
};



import{Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';

  



import{BsArrowRight} from 'react-icons/bs'

const WorkSlider = () => {
  return (

<Swiper
   spaceBetween={10}
      
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {/* Service Slider */}
      {workSlider.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
           <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image,index)=>{
return (
<div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>

  <div className='flex items-center justify-center relative overflow-hidden group'>
    <Image  src={image.path} width={500} height={300} alt=''/>
    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-40 transition-all duration-700' ></div>

    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em'>
    <div className='delay-100'>Live</div>
    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>

    <a
                              href={image.githubLink}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              GitHub
                            </a>

    </div>
    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 duration-300 delay-200' ><BsArrowRight/></div>
</div>

    </div>
   
  </div>
</div>
)
            })}
           </div>
          </SwiperSlide>
        
      })}
    </Swiper>

  );
};

export default WorkSlider;
