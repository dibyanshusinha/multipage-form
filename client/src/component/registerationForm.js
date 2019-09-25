import React from "react";
import { withFormik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { withRouter } from "react-router-dom";


const validationSchema = object().shape({
  email: string().email().required(),
  password: string()
  .min(8, 'Too Short!')
  .matches(/[A-Z]/, 'Must contain an uppercase character.')
  .matches(/[a-z]/, 'Must contain a lowercase character.')
  .matches(/[0-9]/, 'Must contain a number.')
  .required('Required'),
  username: string().min(4, 'Too Short!')
  .matches(/[a-z]/, 'Must contain only lowercase character.')
  .matches(/[0-9]/, 'Must contain a number.')
  .required('Required'),
  confirmpassword: string()
  .oneOf([ref('password'), null], 'Password Confirmation Mismatch')
  .required('Required')
});

const SignUpForm = ({
  errors,
  isSubmitting,
  isValid
}) => {

  return (
    <Form className="input-cart flex w100 p15">
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
              <p className="err">{errors.repassword}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="valign-wrapper col-6">
        <div className="auto">
        <button className={`btn ${isValid?'blue':''}`} disabled={isSubmitting || !isValid} type="submit" >Next</button>
        </div>
      </div>
    </Form>
  );
};


const initialValues = {
  email:'', password:'', confirmpassword:'', username:''
};

const mapPropsToValues = () => {
  return initialValues;
};


const handleSubmit = (values, formikBag) => {

  formikBag.props.history.push({
    pathname: '/signup',
    search: '',
    state: values
  });

  formikBag.setSubmitting = false;
};

const RegisterationForm = withRouter(withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "Registeration Form"
})(SignUpForm));

export default RegisterationForm;