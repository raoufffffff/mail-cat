import FaqImg from '../../assets/FAQ.gif'
import FaqAbout from './faqAbout/FaqAbout';

const Faq = () => {
    const handleClick = () => {
        window.location.href = 'mailto:raouf.dsd@gmail.com';
    };
    return (
        <section className='w-full flex flex-col relative'>
            <img
                id='FAQ'
                src={FaqImg}
                className='w-11/12 md:w-10/12 mx-auto rounded-lg absolute left-[50%] translate-x-[-50%] -top-72'
            />
            <div
                className='sm:mt-24 md:mt-56'
            >
                <h5

                    className='text-center text-3xl text-[#5b3d77] font-bold mt-4'>FAQ</h5>
                <p
                    className='text-center mt-4 px-5 '
                >If you have any additional quastions that are not answered below, hit us at
                    <strong
                        onClick={handleClick}
                        className='mx-1 cursor-pointer'>support@mail-cat.cc</strong>

                </p>
            </div>
            <FaqAbout />
        </section>
    )
}

export default Faq