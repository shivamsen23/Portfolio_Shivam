import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaJava, FaDatabase, FaFileCode, FaServer, FaObjectGroup } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiFramer } from 'react-icons/si';
import CountUp from 'react-countup';

const aboutData = [
  // Your data array
];

const About = () => {
  const [index, setIndex] = useState(0);

  const handleDownloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = '/resume.pdf';
    anchor.download = 'your_resume.pdf';
    anchor.click();
  };

  return (
    <div className='h-full bg-primary/30 py-52 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden sm:flex absolute bottom-[-5] -left-[187px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-19'>
        <div className='flex-1 flex flex-col justify-center'>
          <h2 className='h2 text-center sm:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
            <span className='block sm:inline'>
              Captivating <span className='text-accent'>stories</span>
            </span>
            <span className='block sm:inline'>birth magnificent designs.</span>
          </h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl: mb-12 px-2 sm:px-5'>
            Experienced MERN stack developer skilled in JavaScript, React, HTML, and CSS. Proficient in building dynamic interfaces, scalable React apps, and efficient, sustainable code for engaging web applications.
          </p>
          <div>
            <button
              onClick={handleDownloadResume}
              className='bg-accent text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-opacity-50'
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className='flex flex-col w-full xl:max-w-[48%] h-[180px] mt-5'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after: transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='text-2xl text-white'>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
