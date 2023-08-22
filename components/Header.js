import Link from'next/link';
import Image from 'next/image'
import Socials from '../components/Socials'

const Header = () => {
  return(
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
<div className='container mx-auto'>
<div className='flex flex-col lg:flex-row justify-between items-center gap-y-1
py-4'>

<Link href={'/'} >
<Image
src={'/logoS.png'}
width={220}
height={48}
alt=''
priority={true}
/>
</Link>
{/* socials */}
<Socials />
</div>
</div>
    
    
    
    </header>) 
  };
  export default Header;
