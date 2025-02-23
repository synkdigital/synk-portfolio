'use client'
import { LuArrowUpRight } from "react-icons/lu";
import { DotButton, useDotButton } from './CarouselDotBtn'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowBtn'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'

const Carousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <div className='flex items-center justify-center gap-10 lg:flex-row flex-col'>
                <img src={_.imgurl} alt={_.title} className='w-[500px] lg:w-auto lg:h-[500px] h-auto'/>
                <Link href={_.url} className='lg:text-4xl text-xl font-bold uppercase bg-white text-black rounded-full lg:h-48 lg:w-48 h-32 w-32 flex items-center justify-center gap-2 group'>
                  <span className="z-20">VISIT</span>
                  <LuArrowUpRight className="text-purple-600 lg:text-5xl text-2xl z-20 lg:group-hover:text-white transition-all duration-500 ease-in-out"/>
                  <span className="absolute lg:group-hover:h-48 lg:group-hover:w-48 h-0 w-0 bg-purple-600 rounded-full z-10 transition-all ease-in-out duration-500"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel