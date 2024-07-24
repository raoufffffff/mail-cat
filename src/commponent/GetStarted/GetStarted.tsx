import myimg from '../../assets/get.jpg'
const GetStarted = () => {
    return (
        <div
            className='w-full mt-44 md:mt-10 h-[300px] flex items-center justify-center'
            style={{
                backgroundImage: `url(${myimg})`,
                backgroundSize: "cover",
                backgroundPosition: "50%"
            }}
        >
            <div className='flex flex-col'>
                <h6
                    className='font-bold text-3xl text-white'
                >Ready to give it a go?</h6>
                <p
                    className='text-[#eee] text-xl mt-2 text-center font-semibold'
                >Create free account.</p>
                <a href="https://app.mail-cat.cc/login"
                    target='_blank'
                    className=' bg-[#fbab41] px-8 py-3 rounded-lg bbb w-fit text-white font-[500] mx-auto mt-5 flex text-center'
                >satrt now!</a>
            </div>
        </div>
    )
}

export default GetStarted