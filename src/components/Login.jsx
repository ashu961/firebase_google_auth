import React from "react";
import { auth } from "../firebase/firebase.utils";
import { signInWithGoogle } from "../firebase/firebase.utils";

function Login() {
  return (
    <div>
      ddd
      <button onClick={signInWithGoogle}>jjj</button>
    </div>
  );
}

export default Login;
