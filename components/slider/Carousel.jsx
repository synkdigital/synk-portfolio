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
              <div className='flex items-center justify-center gap-10'>
                <img src={_.imgurl} alt={_.title} className='w-[500px] lg:w-auto lg:h-[500px] h-auto'/>
                <Link href={_.url} className='text-4xl font-bold uppercase bg-white text-black rounded-full h-48 w-48 flex items-center justify-center gap-2'>
                  VISIT
                  <LuArrowUpRight className="text-purple-600 text-5xl"/>
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