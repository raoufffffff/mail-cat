import { Link } from 'react-router-dom'
import MyAnimation from '../commponent/Hero/animation/MyAnimation'
import { useEffect } from 'react'

const Privacy = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div
            className='w-full mt-28 relative min-h-screen overflow-hidden flex items-center flex-col pb-10'
        >
            <h1
                className='text-4xl text-[#2b2350] text-center font-bold'
            >Privacy Policy
            </h1>
            <h2
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10'
            >Location and GDPR compliance
            </h2>
            <p
                className='w-10/12 md:w-7/12 mt-5 text-center'
            >
                Mail-cat is based in Poland and data is hosted only in Europe. When we transfer data outside Europe we always make sure that the companies are compliant with EU privacy laws.
            </p>
            <h3
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Data we hold
            </h3>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                Mail-cat stores data about our users (i.e. the customers who sign up to Mail-cat)
                <br />
                <br />
                Mail-cat does not share, or resell, any kind of user data.
            </p>
            <h4
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Data persistence and rectification
            </h4>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                Our users can use the account features to remove or update their data.
                <br />
                <br />
                Backups and logs can have a duration up to 1 year.
            </p>
            <h5
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Access to data and portability
            </h5>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                Mail-cat grants you the ownership on your data. You can access to your account and view all your data at any time.
            </p>
            <h6
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Data protection and security
            </h6>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                We care about security and we follow best practices to reduce the risk of data breaches.
            </p>


            <Link to={"/"}
                className='bg-[#5b3d77] mx-auto text-center mt-16 hover:text-[#5b3d77] hover:bg-white border hover:border-[#5b3d77] text-white px-6 py-3 text-lg rounded-xl z-10'
            >
                Return to homepage
            </Link>
            <MyAnimation />
        </div>
    )
}

export default Privacy