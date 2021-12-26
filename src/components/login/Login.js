import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onSubmit = (e) => {
      let successful = true;
      
      // Some Login check
      
      if(successful) {
          onLoginSuccess()
          navigate("/",{replace:true})
      } else {
          alert("Login Failed")
      }
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
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

      <input type="submit" value="Login" className="btn btn-block" />
    </form>
  );
};

export default Login;
