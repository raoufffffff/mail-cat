import about from '../../constans/About'
import AboutCart from './AboutCart'
const About = () => {
    const aboutUs = about.map((e, i) => {
        return <AboutCart key={i} des={e.des} i={i} titel={e.titel} />
    })
    return (
        <section id='about' className="w-full">
            <h2
                className="text-[#5b3d77] font-bold text-3xl text-center mt-3 mb-5"
            >What is Mail-cat?</h2>
            <p
                className="text-[#777] px-2 text-center "
            >Mail-cat is an online web app that lets you convert email designs into modern, responsive and optimized HTML emails.</p>
            <div
                className="flex flex-wrap mt-10 px-5"
            >
                {aboutUs}
            </div>
        </section>
    )
}

export default About