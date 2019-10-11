import React  from 'react';
import FormInput from '../Form-Input/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import '../../style/sign-in.scss'
import {signInWithGoogle } from '../../firebase/firebase-utils'
// class SignIn extends Component {

//     state ={
//         email: '',
//         password: ''
//     }

//     //HandleSubmit
//     handleSubmit = (e) => {
        
//       e.preventDefault();
//       console.log('Form Submitted', this.state)
//       this.setState({
//           email: '',
//           password: ''
//       })
//     }

//     //e.target, when it's used inside a form, it targets the form but if it's used inside a field input, it target the form input. The form input is an object which has a value and name attribute so we can destructure it

//     handleChange = (e) => {
//         //destructure e.target
//         const {name, value} = e.target
        
//        this.setState({
//            [name]: value
//        })
//     }


//     render() {
//         return (
//             <div>
//             <h2>I already have an account</h2>
//             <span>Sign In</span>
//               <form onSubmit={ this.handleSubmit}>
//                  <input type='text' name='email' value={this.state.email} required onChange={this.handleChange}/>
//                    <label>Email</label>
//                  <input type='password' name='password' value={this.state.password} required onChange={this.handleChange}/>
//                  <label>Password</label>

//                  <input type='submit' value='Submit Form'/>
//               </form>
               
//             </div>
//         );
//     }
// }

// export default SignIn;




class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={this.handleChange}
          value={this.state.email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={this.state.password}
          handleChange={this.handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
    );
  }
}

export default SignIn;