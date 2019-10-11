import React from 'react';
import '../../style/homepage.scss'
import Directory from '../../Components/Directory/Directory'


const HomePage = (props) => {
  
    return (
        <div className='homepage'>
        <h1>Ecommerce App Day 4</h1>
  
        <Directory />
      </div>
       
    );
};

export default HomePage;