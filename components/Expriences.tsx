import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

function Expriences() {
  return (
    <div className='py-20' id="testimonials">
      <h1 className='heading'>
        My
        <span className='text-purple'> work expriences</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
    {workExperience.map(({id, thumbnail,title,desc,className})=>(
        <Button key={id} borderRadius='1.75rem'
        duration={Math.floor(Math.random()*10000 + 10000)} 
        className='flex-1 text-white border-neutral-200 dark:border-slate-800' >
          <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
          <img src={thumbnail} alt={thumbnail} className='lg:w-32 md:w-20 w-16' />
          </div>
          <div className="lg:ms-5">
            <h1 className='text-xl md:text-2xl font-bold text-start'>{title}</h1>
            <p className='text-white-100 text-start font-semibold mt-3'>{desc}</p>
          </div>
        </Button>
    ))}
      </div>
    </div>
  )
}

export default Expriences
