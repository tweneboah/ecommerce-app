import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/HomePage/Home';
import {Route } from 'react-router-dom'
import Shop from './Pages/Shop/ShopPage';
import Header from './Components/Header/Header';
import SignInSignOut from './Components/SignIn-SignOut/SignIn-SignOut';

import { auth} from './firebase/firebase-utils'



export class App extends Component {

 state = {
   currentUser: null
 }

//  unsubscribeFromAuth = null;

//  componentDidMount(){
//   this.unsubscribeFromAuth =  auth.onAuthStateChanged((user) => this.setState({
//      currentUser: user
//    }))
//  }

//  componentWillMount(){
//    this.unsubscribeFromAuth()
//  }


unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {

    return (
      <div>
      <Header currentUser={this.state.currentUser} />

       <Route exact path = '/signin' component = {SignInSignOut}/>
       <Route exact path = '/' component = {HomePage}/>
       <Route exact path = '/shop' component = {Shop}/>
       
    </div>
    );
  }
}

export default App;

