import Link from 'next/link'

const FooterContent = () => {
  return (
    <div className='absolute bottom-0  py-5'>
      <small>
        Created by{' '}
        <Link target='_blank' href={'https://www.facebook.com/ahmedfoysal.dev'}>
          jumpetron
        </Link>{' '}
      </small>
    </div>
  )
}

export default FooterContent
