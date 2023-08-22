
import React ,{useState} from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaDatabase,
  FaNode,
 
  } from 'react-icons/fa';
  import { SiMongodb } from 'react-icons/si';
  import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  } from 'react-icons/si';


  import {
    FaFileCode, // For Data Structure Algorithm
   
    FaServer,   // For OS
    FaObjectGroup, // For OOPs
  } from 'react-icons/fa';


  import {motion }from 'framer-motion';
  import { fadeIn} from '../../variants';
  import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
//import {resume} from '../../public/resume.pdf'
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <SiMongodb/>
        ],
      },
     
      {
        title: 'Java /Mysql',
        icons: [<FaJava/>,<FaDatabase/>],
      },
      {
        title: 'Technical Subjects',
        icons: [<FaFileCode/>, <FaDatabase/> , <FaServer/>,<FaObjectGroup/>]
      },
    ],

  },
  {
    title: 'Educations',
    info: [
      {
        title: 'B.Tech in CSE (OIST , Bhopal)',
        stage: '2020 - 2024',
      },
      {
        title: 'Inter School (DAV ,Burhar)',
        stage: '2018 - 2019',
      },
      {
        title: 'Secondary School (Carmel Convent School ,Burhar)',
        stage: '2016 - 2017',
      },
    ],
  },
  {
    title: 'Experience',
    info: [
      {
        title: 'Google Developer Student Council (GDSC-OIST) ',
        stage: 'OCT 2022 - FEB 2023',
      },
      {
        title: 'Marketerella  - Worked as a Front-end Developer',
        stage: 'SEP 2022 - OCT 2022',
      },
    
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'Coursera Certification in Java',
        stage: '2022',
      },
      {
        title: 'Certification in Smart India Hackathon',
        stage: '2022',
      },
      {
        title: 'Cousera Specialization Certificate on Web Development',
        stage: '2022',
      },
      {
        title: 'Certificate of Appreciation in Academics',
        stage: '2021',
      },
     
    ],
  },
];


import CountUp from 'react-countup'
const About = () => {
  const [index, setIndex] = useState(0);
  const handleDownloadResume = () => {
    // Add logic to initiate the download of your resume
    // For example, you can create an anchor element and click it programmatically
    const anchor = document.createElement('a');
    anchor.href = '/resume.pdf';
    anchor.download = 'your_resume.pdf';
    anchor.click();
  };
  return (
    <div className='h-full bg-primary/30 py-52 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right' ,0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden sm:flex absolute bottom-[-5] -left-[187px]'
      >
       <Avatar /> {/* Adjust width and height as needed */}
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-19'>
      <div className='flex-1 flex flex-col justify-center'>
      <h2 className='h2 text-center sm:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
  <span className='block sm:inline'>
    Captivating <span className='text-accent'>stories</span>
  </span>
  <span className='block sm:inline'>
    birth magnificent designs.
  </span>
</h2>


<p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl: mb-12 px-2 sm:px-5'>
Experienced MERN stack developer skilled in JavaScript, React, HTML, and CSS. Proficient in building dynamic interfaces, scalable React apps, and efficient, sustainable code for engaging web applications.
</p>
{/* counters */}
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
{aboutData.map ((item, itemIndex) => {
return (
<div
key={itemIndex}
className={`${
index=== itemIndex &&
'text-accent after:w-[100%] after:bg-accent after: transition-all after:duration-300'
} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
onClick={() => setIndex(itemIndex)}
>
{item.title}
</div>

);
})}
</div>
<div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
{aboutData[index].info.map((item,itemIndex)=>{
  return(
    <div key={itemIndex}
    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
    >
      <div className='font-light mb-2 md:mb-0'>{item.title}</div>
      <div className='hidden md:flex'>-</div>
      <div>{item.stage}</div>
      <div className='flex gap-x-4'>
        {item.icons?.map((icon,itemIndex)=>{
          return <div className='text-2xl text-white'>{icon}</div>
        })}
        </div>
      </div>

     
  )
})}

</div>
        </div>


      </div>
    </div>
  );
};


export default About;
