import { Link } from 'react-router-dom';
import links from '../../../constans/Links'
import { motion } from 'framer-motion';
interface MinNavs {
    hidden: () => void;
}
const MinNavs = ({ hidden }: MinNavs) => {
    const minLinks = links.map(e => {
        return <Link

            to={`/?id=${e}`}
            key={e}
            onClick={() => {
                s(e)
            }}
            className='text-[#333] border-t-[1px] border-[#dedede] w-10/12 mx-auto my-1 py-1 hover:scale-105 hover:text-black hover:border-[#aaa]'
        >{e}</Link>
    })
    const s = (e: string) => {
        const a = document.getElementById(`${e}`)
        window.scrollBy({
            top: a?.getBoundingClientRect().y
        })
        hidden()
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0 }}
                onClick={hidden}
                className='z-40 opacity-30 bg-[#333] fixed w-full h-screen top-0 left-0'
            ></motion.div>
            <motion.nav
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                exit={{ x: -1000 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="fixed h-screen left-0 top-0 bg-white w-6/12 flex flex-col py-7 z-[5000]"
            >
                <button
                    className="w-full text-end px-3 text-[15px] mb-2"
                >
                    Close
                </button>
                {minLinks}
            </motion.nav>
        </>
    )
}

export default MinNavs