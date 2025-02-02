import FeaturesImg from '../../assets/features.png'
import FeaturesImgScond from './FeaturesImg'

const Features = () => {
    return (
        <section
            className="mt-10 flex flex-col"
            id='features'
        >
            <div className="w-full flex flex-wrap my-10">
                <div className='relative w-full md:w-7/12 mb-7'>
                    <img src={FeaturesImg}
                        className='w-10/12 mx-auto'
                    />
                    <img
                        className='absolute w-[300px]  left-0 top-[45%] md:left-[-50px]'
                        src={FeaturesImg}

                    />
                </div>
                <div className='w-full md:w-5/12 pt-8 flex flex-col px-5'>
                    <strong
                        className='text-[#452e5c] font-bold text-3xl text-center mt-3 mb-5 inline-flex'
                    >Simple
                        and powerful</strong>
                    <p
                        className='leading-[30px]'
                    >Using Mail-cat is very simple and intuitive. All the tools, settings and controls, are designed with marketers and designers in mind. Absolutely no coding knowledge required!</p>
                    <a
                        href='https://app.mail-cat.cc/'
                        target='_blank'
                        className='bg-[#efefef] px-9 py-3 rounded-lg  text-[#5b3d77] font-bold hover:bg-[#5b3d77] hover:text-white capitalize mt-10 w-fit '
                    >
                        get started
                    </a>
                </div>
            </div>
            <div className="w-full flex flex-wrap my-10">
                <div className='relative w-full md:w-7/12 mb-7'>
                    <FeaturesImgScond />
                </div>
                <div className='w-full md:w-5/12 pt-8 flex flex-col px-5'>
                    <strong
                        className='text-[#452e5c] font-bold text-3xl text-center mt-3 mb-5 inline-flex'
                    >Optimizedand responsive</strong>
                    <p
                        className='leading-[30px] mb-5'
                    >HTML code generated by Mail-cat is optimized to look good on all* modern email clients, both standalone and web-based. Including some Outlook hacks and tricks. Utilizing best practises like tables, block display for images, responsive, alternative view, and more.
                        <br />
                        <br />
                        With responsive mode you will be able to make collapsable columns to better layout your content on mobile.
                    </p>
                    <span
                        className='text-[#999] text-xs'
                    >
                        * bare in mind that old versions of Outlook are rendering emails using MS Word engine and are therefore not as capable as modern clients.
                    </span>
                    <a
                        href='https://app.mail-cat.cc'
                        target='_blank'
                        className='bg-[#efefef] px-9 py-3 rounded-lg  text-[#5b3d77] font-bold hover:bg-[#5b3d77] hover:text-white capitalize mt-10 w-fit '
                    >
                        get started
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Features