import { Link } from 'react-router-dom';
import footerImg from '../../assets/footer.svg'

const Footer = () => {
    const handleClick = () => {
        window.location.href = 'mailto:raouf.dsd@gmail.com';
    };
    const date = new Date();

    return (
        <footer
            id='contact'
            className='w-full bg-[#5b3d77] pt-12 pb-5 px-8 z-50'
        >

            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="w-full md:w-4/12 flex flex-col my-4">
                    <strong
                        className='text-white text-2xl mb-2 flex'
                    >Contact</strong>
                    <img src={footerImg}
                        className='w-6/12 mb-6'
                    />
                    <strong
                        onClick={handleClick}
                        className='mx-1 cursor-pointer text-white text-xl '>support@mail-cat.cc</strong>
                </div>
                <div className="w-full md:w-4/12 flex flex-col my-4">
                    <strong
                        className='text-white text-2xl mb-2 flex'
                    >app</strong>
                    <a href="https://app.mail-cat.cc/"
                        target='_blank'
                        className='text-white my-1 text-xl hover:text-[#aaa]'
                    >
                        Launch app
                    </a>
                    <a href="https://app.mail-cat.cc/login"
                        target='_blank'
                        className='text-white my-1 text-xl hover:text-[#aaa]'
                    >
                        Register
                    </a>
                </div>
                <div className="w-full md:w-4/12 flex flex-col my-4">
                    <strong
                        className='text-white text-2xl mb-2 flex '
                    >Knowledge</strong>
                    <Link
                        className='text-white my-1 text-xl hover:text-[#aaa]'
                        to={"help"}
                    >
                        help
                    </Link>
                    <Link
                        className='text-white my-1 text-xl hover:text-[#aaa]'
                        to={"Privacy"}>
                        Privacy & Policy
                    </Link>
                    <Link
                        className='text-white my-1 text-xl hover:text-[#aaa]'
                        to={"terms"}>
                        Terms of service
                    </Link>
                </div>
            </div>
            <p
                className='text-center text-white border-t border-t-[#3d355b] w-fit mx-auto pt-5'
            >© {date.getFullYear()} All Rights Reserved</p>
        </footer>
    )
}

export default Footer