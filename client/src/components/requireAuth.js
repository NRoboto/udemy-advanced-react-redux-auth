import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const requireAuth = (ChildComponent) => (props) => {
  const isLoggedIn = useSelector((state) => state.auth.authenticated);
  const history = useHistory();

  React.useEffect(() => {
    if (!isLoggedIn) history.push("/");
  }, [history, isLoggedIn]);

  return <ChildComponent {...props} />;
};
