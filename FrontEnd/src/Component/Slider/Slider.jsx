import React, { useState } from 'react'
import "./Slider.css"
const Slider = (props) => {
  const [CurrentIndex , SetCurrentIndex] = useState(0);
  const { slides } = props;
  const goToPrev = () => {
    const isFirstSlide = CurrentIndex === 0;
    const newIndex = isFirstSlide ? slides.length-1 : CurrentIndex -1
    SetCurrentIndex(newIndex) 
  }
  const goToNext = () => {
    const isLastSlide = CurrentIndex === slides.length-1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    SetCurrentIndex(newIndex);
  }
  const goToSlide = (index) => {
    SetCurrentIndex(index)
  }
  return (
    <div className='slider'>
      <div className='leftArrow' onClick={goToPrev}> ❰</div>
      <div className='rightArrow' onClick={goToNext}>❱</div>
      <div style={{backgroundImage:`url(${slides[CurrentIndex].url})`}} className='slide'>
      </div>
        <div className='slidesDots'>
          {slides.map((slide,index) => (
          <div 
          key={index} 
          className={`slidesDot ${index === CurrentIndex ? 'active' : ''}`}
          onClick={() => goToSlide(index)}
          
          > ● </div>
      ))}
      </div>
    </div>
  )
}

export default Slider
