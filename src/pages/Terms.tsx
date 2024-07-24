import { Link } from "react-router-dom"
import MyAnimation from "../commponent/Hero/animation/MyAnimation"
import { useEffect } from "react"

const Terms = () => {
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
            >Terms of service
            </h1>
            <p
                className='w-10/12 md:w-7/12 mt-5 text-center'
            >
                By using Mail-cat you agree to the following terms.
            </p>
            <h2
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10'
            >Eligibility
            </h2>
            <p
                className='w-10/12 md:w-7/12 mt-5 text-center'
            >
                You must be at least 16 years old to create an account on Mail-cat.
            </p>
            <h3
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Billing
            </h3>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                There are three pricing tiers in Mail-cat - Free, Charge Pack, Pro Subscription.
                <br />
                <br />
                Free tier comes with limited functionality and is not covered by support. If you choose to buy a charge pack, you will be charged only once, and your pack will last for 30 days. No need to cancel anything. You can buy as many packs as you want - they will stack up. Each one lasts for 30 days from the date of purchase. There is also a Pro Subscription plan in witch you will be charged annually. Pro pack has all features included. No data will be deleted after charge pack or subscription period.
                <br />
                <br />
                Mail-cat is offered as is without any warranty, but supprot is included in Charge Pack, and Pro Subscription.
                <br />
                <br />
                Even if we do our best to follow best practices and offer a reliable service, Mail-cat - to the extent permitted by law - is not liable for data loss or spam send from the editor.
            </p>
            <h4
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Backup
            </h4>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                Your data is backed up regullary.
            </p>
            <h5
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Termination
            </h5>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                An account can be terminated by Mail-cat for any reason.
                <br />
                <br />
                You can close your account from your account settings after sign in. Any request to terminate your account sent by email or using other means will be ignored for security reasons.
            </p>
            <h6
                className='text-3xl text-[#2b2350] text-center font-bold w-9/12 md:w-6/12 mt-10 z-[10]'
            >Contact
            </h6>
            <p
                className='w-10/12 md:w-7/12 mt-7 text-center z-[10]'
            >
                You may contact us at: contact@mail-cat.cc
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

export default Terms