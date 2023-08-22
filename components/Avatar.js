import Image from 'next/image';

const Avatar = () => {
return (
<div className='hidden xl:flex xl:max-w-none'>
<Image
src={'/p11.png'}
width={537}
height={678}

className='translate-z-0 w-full h-full' />
</div>
)
}
export default Avatar;