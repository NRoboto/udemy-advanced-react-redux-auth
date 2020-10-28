import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";

export const Signout = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.signout());
  }, []);

  return <div>Sorry to see you go!</div>;
};
