import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import logo from '../../assets/logo.svg'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MinNavs from './navs/MinNavs'
import MdNavs from './navs/MdNavs'
import Acount from './start/Start'
import { Link } from 'react-router-dom'
interface scrolling {
    is: boolean;
    SY: number;
}
const Header = () => {
    const [ShowNav, setShowNav] = useState<boolean>(false)
    const [scroll, setscroll] = useState<scrolling>({
        is: false,
        SY: 0
    })
    const hidden = () => {
        setShowNav(false)
    }

    const scrollact = () => {
        if (window.scrollY > 100) {
            setscroll({ is: true, SY: window.scrollY })
        } else {
            setscroll({ is: false, SY: window.scrollY })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollact);
        return () => {
            window.removeEventListener('scroll', scrollact);
        };
    }, [scroll]);
    return (
        <header className={`flex justify-around px-3 py-4 fixed top-0 left-0 w-full z-30 items-center md:px-7 md:py-t ${scroll.is && " bg-white "}`}>
            <button
                className='md:hidden'
                onClick={() => {
                    setShowNav(p => !p)
                }}
            >
                <HiMiniBars3CenterLeft size={30} />
            </button>
            <AnimatePresence>
                {ShowNav && <MinNavs hidden={hidden} />}
            </AnimatePresence>
            <Link
                to={'/'}
                className='w-full md:w-4/12'>
                <img src={logo}
                    alt='logo'
                    className='w-full md:w-fit h-[30px]'
                />
            </Link>
            <MdNavs />
            <Acount />
        </header>
    )
}

export default Header