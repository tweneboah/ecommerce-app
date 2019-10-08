import React from 'react';
import '../../style/homepage.scss'
import Directory from '../../Components/Directory/Directory'


const HomePage = (props) => {
  console.log(props)
    return (
        <div className='homepage'>
        <h1>Ecommerce App</h1>
  
        <Directory/>
      </div>
       
    );
};

export default HomePage;