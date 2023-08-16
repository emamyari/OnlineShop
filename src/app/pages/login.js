import React from "react";
import {useSubheader} from "../../_metronic/layout";

export const Login = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Login Page");

  return (<>Login page</>);
};
