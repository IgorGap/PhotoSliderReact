import React from 'react'
import {leftArrowStyles,rightArrowStyles} from './css/componStyle.js'

const Btn = ({currentIndex,setCurrentIndex,slides}) => {
  const goToPrevios = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isFirstSlide = currentIndex === slides.length - 1
    const newIndex = isFirstSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <>
      <div style={leftArrowStyles} onClick={goToPrevios}>
        ←
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        →
      </div>
    </>
  )
}
export default Btn
