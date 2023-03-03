import React, { useState } from 'react'
import DotActive from './dotActive.jsx'
import {
  dotsContainerStyles,
  dotStyles,
} from './css/componStyle.js'

import Counter from './counter.jsx'
import Btn from './btn.jsx'
import '../app.css'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  console.log('slides[currentIndex].url',slides[currentIndex].url);

  const goToSlide = (index) => {
    console.log('index', index)
    setCurrentIndex(index)
  }

  return (
    <>
      <div style={{ height: '100%', position: 'relative' }}>
        <Btn
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          slides={slides}
        />
        <div className='img_slider' style={slideStyles}></div>
        <div style={dotsContainerStyles}>
          <Counter currentIndex={currentIndex} slides={slides} />
          {slides.map((el, index) => (
            <div key={index} style={dotStyles}>
              <DotActive
                onClickPag={() => goToSlide(index)}
                active={currentIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default ImageSlider
