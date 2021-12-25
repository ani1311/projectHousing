import { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
      let successful = false;
      
      // Some Login check
      
      if(successful) {
          onLoginSuccess()
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
