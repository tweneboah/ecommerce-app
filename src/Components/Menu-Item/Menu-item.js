import React from 'react';
import '../../style/menu-item.scss'
const MenuItem = ({title, image}) => {
    
    return (
        
        <div className='menu-item' style={{backgroundImage: `url(${image})`}}>
            <div className='content'>
              
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
               
            </div>
        </div>
    );
};

export default MenuItem;