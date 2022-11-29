import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app_aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="A big G" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img className='spoon__img' src={images.spoon} alt='spoon about' />
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, dolor corrupti voluptate quo nulla cumque dolorem autem. Sit repudiandae tempore pariatur. Eius maxime ut fuga repudiandae, incidunt quidem pariatur quas?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img className='spoon__img' src={images.spoon} alt='spoon about' />
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, dolor corrupti voluptate quo nulla cumque dolorem autem. Sit repudiandae tempore pariatur. Eius maxime ut fuga repudiandae, incidunt quidem pariatur quas?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
