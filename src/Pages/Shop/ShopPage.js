import React, { Component } from 'react';
import SHOP_DATA from '../Shop/shop-data';
import CollectionPreview from  '../../Components/Collection-preview/Collection-Preview'


class Shop extends Component {

state = {
  collections: SHOP_DATA
}
    
    render() {
     //Destructure state
     const {collections} = this.state 
        return (
            <div className='shop_page'>
             
             {collections.map(({id, ...otherCollectionProps}) => (
               <CollectionPreview key={id} {...otherCollectionProps}/>
             ))}
                
            </div>
        );
    }
}

export default Shop;