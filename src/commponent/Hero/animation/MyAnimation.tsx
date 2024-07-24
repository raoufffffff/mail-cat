import a from '../../../assets/a.png'
import d from '../../../assets/d.png'
const MyAnimation = () => {
    return (
        <>
            <ul>
                <li className='a z-[20]'>
                    <img src={a} alt="logo" />
                </li>
                <li className='a d z-[20]'>
                    <img src={d} alt="logo" />
                </li>
                <li className='b z-[20]'></li>
            </ul>
            <div className="left-circle-shape">
                <span className='circle-fill'></span>
                <span className="circle-border"></span>

            </div>
        </>
    )
}

export default MyAnimation