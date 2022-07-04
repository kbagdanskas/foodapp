import Image from 'next/image'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
const HamburgerMenu = () => (<div className='relative'>
    <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-12' >
    <Image href="#" className='navbar-logo' src="/img/logo.png" alt="logo" width="200" height="40"></Image>
        <Links />
    </Menu>
</div>)

const HamburgerIcon = () => (<div className='p-1/2'><svg className="text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)

export const Links = () => (<>
    <Link href="/"><a className='font-bold listtext p-4'>Home</a></Link>
    <Link href="/about"><a className='font-bold listtext p-4'>Gerimai</a></Link>
    <Link href="/pizzas"><a className='font-bold listtext p-4'>Pica</a></Link>
    <Link href="/more"><a className='font-bold listtext p-4'>Priedai</a></Link>
    <Link href="/contact"><a className='font-bold listtext p-4'>Kontaktai</a></Link>
</>)

export default HamburgerMenu