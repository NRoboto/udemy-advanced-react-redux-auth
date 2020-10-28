import React from "react";
import { reduxForm, Field } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../actions";

const SignupComponent = ({ handleSubmit }) => {
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (formProps) => {
    dispatch(
      actions.signup(formProps, () => {
        history.push("/feature");
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" autoComplete="none" component="input" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          autoComplete="none"
          component="input"
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign Up!</button>
    </form>
  );
};

export const Signup = reduxForm({ form: "signup" })(SignupComponent);
