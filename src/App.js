import ImageSlider from './components/imgSlider'
import slides from './Data'
import { containerStyles, borderStyles, titleStyles } from './AppStyle.js'
import ModalWind from './components/modalWindow'
import { useState } from 'react'

function App() {
  const [newSlides, setNewSlides] = useState(slides)
  console.log('newSlides',newSlides)

  return (
    <div style={borderStyles}>
      <h1 style={titleStyles}>Photo Album</h1>
      <div style={containerStyles}>
        <ImageSlider slides={newSlides} />
        <ModalWind setNewSlides={setNewSlides} newSlides={newSlides}/>
      </div>
    </div>
  )
}

export default App
