import a from '../../../assets/b-1.png'
import b from '../../../assets/b-2.png'
import c from '../../../assets/b-3.png'
import d from '../../../assets/b-4.png'
import e from '../../../assets/b-5.jpg'
import f from '../../../assets/b-6.png'
const BrowserImage = () => {
    return (
        <div className='flex justify-around mt-4'>
            <img className='w-[40px] mx-1' src={a} />
            <img className='w-[40px] mx-1' src={b} />
            <img className='w-[40px] mx-1' src={c} />
            <img className='w-[40px] mx-1' src={d} />
            <img className='w-[40px] mx-1' src={e} />
            <img className='w-[40px] mx-1' src={f} />
        </div>
    )
}

export default BrowserImage