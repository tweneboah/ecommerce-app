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
            <div className='shop-page'>
              {/* We have to pass pieces of info to this component to render therefor we have to loop and pass both individual data and an arraay 
                NOTE: Anytime you use destructure you have to use the original property names on the data

               */}
               
               {
                 collections.map(({id, ...otherCollections}) => (
                  <CollectionPreview key={id} {...otherCollections}/>
                 ))
               }
            </div>
        );
    }
}

export default Shop;