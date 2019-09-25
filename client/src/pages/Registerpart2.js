import React from 'react';

import SignUp from "../component/personalInfoForm";

const RegisterPage2 = (props)=>{


  if(props.location.state){
    return (
      <div className="w80 auto">
        <SignUp {...props.location.state}/>
      </div>);
    }else{
      return window.location.replace('/signup');
    }
  }
    
export default RegisterPage2;