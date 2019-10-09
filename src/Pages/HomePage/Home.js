import React from 'react';
import '../../style/homepage.scss'
import Directory from '../../Components/Directory/Directory'


const HomePage = ({history}) => {
  console.log(history)
    return (
        <div className='homepage'>
        <h1>Ecommerce App</h1>
  
        <Directory history={history}/>
      </div>
       
    );
};

export default HomePage;