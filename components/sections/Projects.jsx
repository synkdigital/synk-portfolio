import React from 'react'
import Carousel from '../slider/Carousel'

const Projects = () => {
    const OPTIONS = { axis: 'y' }
    const SLIDE_COUNT = 4
    const SLIDES = [
        {
            id:1,
            title:'Groove Room',
            imgurl:'slider-imgs/img1.png',
            url:'https://groove-room-pearl.vercel.app'
        },
        {
            id:2,
            title:'Voxcast AI',
            imgurl:'slider-imgs/img2.png',
            url:'https://voxcast-ai.vercel.app'
        },
        {
            id:3,
            title:'Bharat Debate',
            imgurl:'slider-imgs/img3.png',
            url:'https://bharatdebate.org'
        },
        {
            id:4,
            title:'Great Prompts',
            imgurl:'slider-imgs/img4.png',
            url:'https://project-great-prompts.vercel.app'
        },

    ]
  return (
    <div className='w-full min-h-screen bg-black p-4 rounded-3xl flex-col items-start justify-start text-white'>
      <h1 className='text-9xl font-semibold uppercase text-white'>discover the<br/>power<br/>of Infinite<br/>Development</h1>
      <div className='flex items-center justify-end w-full mb-10'>
        <p className='text-right text-white text-lg font-thin uppercase w-[400px]'>
            at our agency we believe in breaking boundaries and pushing the limits of creativity. our team of visionary designers and strategists is dedicated to transform your ideas into an extraordinary visual experience.
        </p>
      </div>
      <Carousel slides={SLIDES} options={OPTIONS}/>   
    </div>
  )
}

export default Projects
