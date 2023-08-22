import Link from 'next/link';
import { RiYoutubeLine,  RiPhoneLine,RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri';

const Socials = () => {
  return (
  
  
    <div className='flex flex-row items-center gap-x-8 gap-y-1 text-xl mb-4'>
    <Link href={'https://www.instagram.com/shivam_sen03/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'} className='hover: text-accent transition-all duration-300 ' target="_blank">
    <RiInstagramLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/shivam-sen-254b14204/'} className=' hover: text-accent transition-all duration-300'  target="_blank">
    <RiLinkedinLine/>
    </Link>
    <Link href={'https://github.com/shivamsen23'} className=' hover: text-accent transition-all duration-300'  target="_blank">
    <RiGithubLine/>
    </Link>

    <Link href={""} className=' hover: text-accent transition-all duration-300'  target="_blank">
  <RiPhoneLine/> 
    </Link>
   
  </div>
  )
};

export default Socials;
