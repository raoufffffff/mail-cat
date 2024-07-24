import a from '../../assets/f1.png'
import b from '../../assets/f2.png'
import c from '../../assets/f3.png'
import d from '../../assets/f4.png'
const FeaturesImgScond = () => {
    return (
        <div
            className='w-full relative'
        >
            <img src={c}
                className=' mx-auto absolute  top-[-10%] left-[25%] -z-10'
            />
            <img src={d}
                className=' mx-auto absolute bottom-32 right-24 -z-10'
            />
            <img src={b}
                className=' mx-auto h-[700px]'
            />
            <img src={a}
                className=' mx-auto absolute h-40 top-[75%] left-[10%]'
            />

        </div>
    )
}

export default FeaturesImgScond