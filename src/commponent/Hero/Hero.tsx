import hero from '../../assets/hero.png'
import MyAnimation from './animation/MyAnimation'
import HeroImg from './heroimg/HeroImg'
import HeroText from './HeroText.tsx/HeroText'

const Hero = () => {
    return (
        <div
            className='bg-[#5b3d77ee] min-h-[180vh]  md:min-h-[100vh] w-full relative flex items-center flex-col md:flex-row overflow-hidden'
        >
            <img src={hero}
                alt='hero'
                className='min-h-[180vh]  md:min-h-[100vh] w-full absolute top-0 left-0 z-20'
            />
            <HeroText />
            <MyAnimation />
            <HeroImg />
        </div>
    )
}

export default Hero