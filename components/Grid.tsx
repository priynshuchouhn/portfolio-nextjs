import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, spareImg, titleClassName })=>(
        <BentoGridItem 
        key={id} 
        id={id}
        description={description} 
        title={title}
        className={className}
        img={img}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        spareImg={spareImg}
        />))}
      </BentoGrid>
    </section>
  )
}

export default Grid
