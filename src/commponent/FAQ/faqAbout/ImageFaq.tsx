import faqA from '../../../assets/faq-1.png'
import faqB from '../../../assets/faq-3.png'
import faqC from '../../../assets/daq-2.png'

const ImageFaq = () => {
    return (
        <div
            className='w-full relative flex justify-center'
        >
            <img src={faqC}
                className='h-[315px] '
            />
            <img src={faqA}
                className='absolute left-5 top-80 h-[200px]'
            />
            <img src={faqB}
                className='h-[380px]  absolute -right-8 top-36 -z-10'
            />
        </div>
    )
}

export default ImageFaq