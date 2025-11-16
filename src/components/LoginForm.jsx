import { useContext, useState } from "react";
import AuthContext from "../AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "shima" && password === "1234") {
      const fakeToken = "1234abcd";
   
      login(username, fakeToken);
      navigate("/dashboard");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است ");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        gap:'12px'
      }}
    >
      <h2>Login</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="UserName..."
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
      />

      <button>Login</button>
    </form>
  );
};

export default LoginForm;
