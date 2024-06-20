import Image from 'next/image'
import Link from 'next/link'
import logo from './../../public/optimarko.webp'
import faysal from './../../public/faysal.png'
import rayhan from './../../public/rayhan.jpeg'

const FooterContent = () => {
  return (
    <>
      <div className='absolute left-5 bottom-5 flex justify-center items-center gap-3'>
        <small> Contributors: </small>
        <div className='flex gap-1'>
          <div className='w-[30px] h-[30px] rounded-full'>
            <Link
              target='_blank'
              href={'https://www.facebook.com/ahmedfoysal.dev'}>
              <Image className='rounded-full' src={faysal} alt='faysal' />
            </Link>
          </div>
          <div className='w-[30px] h-[30px] rounded-full'>
            <Link
              target='_blank'
              href={'https://www.linkedin.com/in/raihanmahmudiut/'}>
              <Image className='rounded-full' src={rayhan} alt='faysal' />
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0  py-5 text-center'>
        <div className='flex justify-center items-center gap-1 mt-1'>
          <small>Powered By</small>
          <div className='w-[90px]'>
            <Link target='_blank' href={'https://www.optimarko.com/'}>
              <Image src={logo} alt='optimarko logo' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterContent
