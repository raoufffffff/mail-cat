import { useEffect } from 'react'
import MyAnimation from '../commponent/Hero/animation/MyAnimation'
import { Link } from 'react-router-dom'

const Help = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div
            className='w-full mt-20 relative h-screen overflow-hidden flex items-center flex-col'
        >
            <h1
                className='text-4xl text-[#2b2350] text-center font-bold'
            >Help</h1>
            <p
                className='text-center mt-3  font-bold'
            >{"[WIP]"}</p>
            <p
                className='mx-auto text-center w-8/12 mt-4'
            >
                As we work on a fully fledged help page you can contact us at contact@mail-cat.cc or support@mail-cat.cc
            </p>
            <Link to={"/"}
                className='bg-[#5b3d77] mx-auto text-center mt-16 hover:text-[#5b3d77] hover:bg-white border hover:border-[#5b3d77] text-white px-6 py-3 text-lg rounded-xl'
            >
                Return to homepage
            </Link>
            <MyAnimation />
        </div>
    )
}

export default Help