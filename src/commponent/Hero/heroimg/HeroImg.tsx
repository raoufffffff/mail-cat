import Hero from '../../../assets/helo-img.png'

const HeroImg = () => {
    return (
        <div className='w-full z-20 mt-28'>
            <img src={Hero}
                alt="hero"
                className=''
            />
        </div>
    )
}

export default HeroImg