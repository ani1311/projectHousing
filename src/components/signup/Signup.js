import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../firebaseConfig.json";
import { initializeApp } from "firebase/app";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth();

  function submit() {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        alert("Login Successful");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Login Failed " + errorCode + errorMessage);
      });
  }

  return (
    <form className="login-form">
      <div className="form-control">
        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="button" className="btn" onClick={submit}>
        Submit
      </button>
    </form>
  );
};

export default Signup;
