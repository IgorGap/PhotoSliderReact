import React from 'react'
import { countStyle } from './css/componStyle'

const Counter = ({ currentIndex, slides }) => {
  return <div style={countStyle}>{`${currentIndex + 1} / ${slides.length}`}</div>
}
export default Counter
