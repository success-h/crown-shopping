import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: '',
      };
   }

   handleSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();

      console.log({ val: this.state });

      this.setState({ email: '', password: '' });
   };

   handleChange = (event) => {
      const { value, name } = event.target;

      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Sign in with your gmail and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  value={this.state.email}
                  label='email'
               />

               <FormInput
                  name='password'
                  type='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label='password'
                  required
               />

               <CustomButton type='submit'>Sign in</CustomButton>
            </form>
         </div>
      );
   }
}

export default SignIn;
