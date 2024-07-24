import { motion } from "framer-motion"
const HeroText = () => {
    return (
        <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ damping: 0.5 }}
            className='bg-[#fff5] rounded-md  p-5 h-fit flex flex-col text-black z-[25] w-11/12 sm:w-8/12 mt-32 justify-center items-center'
        >
            <span
                className='text-[#5b3d77]  mx-auto'
            >HI, THIS IS MAIL-CAT</span>
            <h1
                className='text-[34px] font-bold text-center text-[#322d49] w-10/12 my-3'
            >Easily convert your designs
                into compliant HTML emails</h1>
            <p
                className='text-[#333] w-8/12 text-center text-[14px]'
            >Just upload your email design, make cuts, adjust some settings, and you're done.</p>
            <div className="flex flex-wrap mt-7">
                <motion.a
                    initial={{ x: -400 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5, type: 'spring' }}
                    href="#" className="border bg-[#5b3d77] text-white px-3 py-2 rounded-lg mx-1.5"
                    onClick={() => {
                        window.scrollBy({
                            top: 200,
                            behavior: "smooth"
                        })
                    }}
                >
                    descover
                </motion.a>
                <motion.a
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5, type: 'spring' }}
                    href="https://www.youtube.com/watch?v=tcJndHu2h1c"
                    target="_blank"
                    className="border border-[#5b3d77] text-[#5b3d77] px-3 py-2 rounded-lg mx-1.5">
                    watch video promo
                </motion.a>
            </div>
        </motion.div>
    )
}

export default HeroText