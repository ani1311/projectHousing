import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../firebaseConfig.json";
import { initializeApp } from "firebase/app";



const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  
  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);

  function submit() {
    signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      onLoginSuccess();
      alert("Logged in");
      console.log(user);
      // navigate("/", { replace: true });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Login Failed " + errorCode + errorMessage);
    });
  };

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

export default Login;
