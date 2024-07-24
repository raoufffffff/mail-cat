import { Link } from "react-router-dom"
import Links from "../../../constans/Links"

const MdNavs = () => {
    const MdLinks = Links.map(e => {
        return <Link
            to={`/?id=${e}`}
            key={e}
            className='text-[#2b2350] mx-3 text-[17px]'
        >{e}</Link>
    })
    return (
        <nav className="hidden md:flex flex-1 ml-10">
            {MdLinks}
        </nav>
    )
}

export default MdNavs