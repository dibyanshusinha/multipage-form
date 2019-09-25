import React from "react";
import { withFormik, Form, Field } from "formik";
import { object, string, boolean, ref} from "yup";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

const SignUpForm2 = ({errors, touched, isSubmitting, isValid}) => {

    return (
      <Form className="input-cart w100 flex-col p15">
        <div className="flex w100">
          <div className="login col-4">
            <h4 className="center">Log in</h4>
            <br />
            <div className="row">
              <div>
                <div className="input-field">
                  <Field name="username" type="text" placeholder="UserName"/>
                  <p className="err">{errors.username}</p>
                </div>

                <div className="input-field s12">
                  <Field name="email" type="email" placeholder="Email"/>
                  <p className="err">{errors.email}</p>
                </div>

                <div className="input-field s12">
                  <Field name="password" type="password" placeholder="Password"/>
                  <p className="err">{errors.password}</p>
                </div>

                <div className="input-field s12">
                  <Field name="confirmpassword" type="password" placeholder="Confirm Password" />
                  <p className="err">{errors.confirmpassword}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="valign-wrapper col-6 p15">
            <div className="w100">
              <h4 className="center">More Details</h4>
              <br />
              <div className="input-field">
                <div className="radio">
                  <label>Male</label>
                  <Field name="gender" type="radio" value="Male" />
                  <label>Female</label>
                  <Field name="gender" type="radio" value="Female" />
                </div>
                <p className="err">{touched.gender?errors.gender:null}</p>
              </div>


              <div className="input-field">
                <Field name="org" type="text" placeholder="Organisation"/>
                <p className="err">{touched.org?errors.org:null}</p>
              </div>

              <div className="input-field">
                <Field name="contact" type="text" placeholder="Contact Number"/>
                <p className="err">{touched.contact?errors.contact:null}</p>
              </div>

              <div className="input-field">
                <Field name="country" component="select">
                  <option value="">select country</option>
                  <option value="India">India</option>
                  <option value="SriLanka">Sri Lanka</option>
                </Field>
                <p className="err">{touched.country?errors.country:null}</p>
              </div>

              <div className="input-field">
                <Field name="marital" component="select">
                  <option value="">Select Marital Status</option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                </Field>
                <p className="err">{touched.marital?errors.marital:null}</p>
              </div>

            </div>
          </div>
        </div>
        
        <div className="p15">

          <div className="input-field">
            <div className="radio">
              <label htmlFor="btech">BTech</label>
              <Field type="checkbox" name="btech" />
              <label htmlFor="mba">MBA</label>
              <Field type="checkbox" name="checkboxes" />
              <label htmlFor="mtech">MTech</label>
              <Field type="checkbox" name="checkboxes" />
            </div>
            <p className="err">{errors.checkboxes || errors.btech}</p>
          </div>
          <br />
          <button className={`btn ${isValid?'blue':''}`} disabled={isSubmitting || !isValid} type="submit" >Signup</button></div>
      </Form>
  )};
  
  
  const validationSchema = object().shape({
    email: string().email(),
    password: string()
      .min(5, "minimum 5 characters for password")
      .required("password is required field"),
    btech: boolean()
      .test(
        "is-btech",
        "Btech is required!",
        value => value === true
      )
      .required(),
    checkboxes: boolean().oneOf([true], 'MBA or Mtech is reqd!!'),
    gender: string().required(),
    contact: string().required(),
    org: string().required(),
    country: string().required(),
    marital: string().required(),
    confirmpassword: string()
    .oneOf([ref('password'), null], 'Password Confirmation Mismatch')
    .required('Required')
  });
  
  const mapPropsToValues = ({email, password, username, confirmpassword}) => {
    return {
      email: email||'', 
      password: password||'', 
      username: username||'', 
      confirmpassword: confirmpassword||'',
      checkboxes: false,
      gender: '',
      org:'',
      country: '',
      contact: '',
      marital: ''
    };
  };
  
  const handleSubmit = (values, formikBag) => {
    formikBag.setSubmitting = false;
    formikBag.props.onUserSignup(values);
    formikBag.props.history.push('/dashboard');
  };

  const Signup = withFormik({
    mapPropsToValues,
    validationSchema,
    handleSubmit,
    displayName: "EnterpriseProfileForm"
  })(SignUpForm2)


  const sendActionForStore = dispatch =>{
    return{
        onUserSignup: (user) => dispatch({type: 'REGISTER', payload: user})
    };
  }
  
  export default connect(null, sendActionForStore)(withRouter(Signup));