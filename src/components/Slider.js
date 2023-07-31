import React from 'react'
import { Carousel } from 'react-bootstrap';
import Weather from '../weather/weather';
import News from '../news/News'
import Video from '../video/video';

const Slider = () => {

  return (
    <>
    <Carousel>
      <Carousel.Item interval={5000}>
        
        <Video/>

      </Carousel.Item>
      <Carousel.Item interval={1000}>
      
        <News/>
      
      </Carousel.Item>
      <Carousel.Item>
       
        <Weather/>
        
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Slider