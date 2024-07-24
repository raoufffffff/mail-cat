import AboutImg from '../../constans/AboutImg';

interface about {
    titel: string;
    des: string;
    i: number;
}

const AboutCart = ({ des, i, titel }: about) => {
    return (
        <article
            className='flex px-5 my-3 w-full md:w-6/12'
        >

            <img src={AboutImg[i]} className='w-[60px] mr-5 h-[60px] mt-2' />
            <div
                className='flex flex-col'>
                <span
                    className='text-[#333] font-medium text-xl  mb-3'
                >{titel}
                </span>
                <p
                    className='p text-[#777]'
                >{des}</p>
            </div>
        </article>
    )
}

export default AboutCart