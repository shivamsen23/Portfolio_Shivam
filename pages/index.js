// next image
import Image from 'next/image';
// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
// framer motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
const Home = () => {
  return (
    <div className='bg-primary/60 h-full p-1 md:p-6'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center sm:pt-10 xl:text-left h-full container mx-auto mt-16 pt-25' >
          {/* title */}
          <motion.h1
          
          variants={fadeIn('down',0.2)}
initial='hidden'
animate='show'
exit='hidden'className='h1 text-md  mt-12 '>
            Hello, my name is <br />
            <span className='text-accent'>Shivam Sen</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
          variants={fadeIn('down',0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          
          className='max-w-xs xl:max-w-md mx-auto xl:mx-0 mb-1 xl:mb-1 text-xl' >
 Experienced MERN stack developer specializing in user-friendly web design and development. Proficient in MongoDB, Node.js, React, and Next.js, with a focus on creating real-time, user-friendly websites for the past two years.
</motion.p>

<div className='flex justify-center xl:hidden relative mb-12'>
  <ProjectsBtn/>
</div>

<motion.div 
variants={fadeIn('down',0.4)}
initial='hidden'
animate='show'
exit='hidden'
className='hidden xl:flex'

> 
  <ProjectsBtn/>
</motion.div>
</div>
</div>
{/* image */}
{/* image */}
<div className='w-[1200px] h-full absolute right-0 bottom-0'>
{/* bg img */}
<div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
{/* particles */}
<ParticlesContainer/>
<motion.div
variants={fadeIn('up', 0.5)}
initial='hidden'
animate='show'
exit='hidden'
transition={{ duration: 1, ease: 'easeInOut'}} 
className='w-full h-full max-w-[437px] max-h-[518px] absolute -bottom-62
lg: bottom-5 lg:right-[8%]' >
<Avatar />
</motion.div>
{/* avatar img */}
</div>
</div>

  )
}

export default Home;
