import ImageFaq from "./ImageFaq"
import faq from '../../../constans/Faq'
import { useState } from "react"
import BrowserImage from "./BrowserImage"
const FaqAbout = () => {
    const [show, setshow] = useState<string>(faq[0].titel)
    const cards = faq.map((e, i) => {
        return <article
            onClick={() => {
                setshow(e.titel)
            }}
            className="bg-[#fff] border-[0.3px] border-l-4 my-3 rounded-md border-[#5b3d77] p-5 "
            key={i}>
            <strong
                className="text-[#322d49] text-[20px] font-[500]  flex"
            >{e.titel}</strong>
            {e.titel === show && <div
                className="mt-3 "
            >
                <p>{e.des}</p>
                {e.icon && <BrowserImage />}
            </div>}
        </article>
    })
    return (
        <div className="flex w-full flex-wrap mt-28 ">
            <div className="w-full md:w-5/12 px-3 mb-10">
                {cards}
            </div>
            <div className="w-full md:w-7/12">
                <ImageFaq />
            </div>
        </div>
    )
}

export default FaqAbout