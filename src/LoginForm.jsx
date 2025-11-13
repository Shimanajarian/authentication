import { useContext, useState } from "react";
import AuthContext from "./AuthContext";

const LoginForm = () => {
  const { handleToken } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "shima" && password === "1234") {
      handleToken("shima-auth-token");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است ");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "80px",
        flexDirection: "column",
        gap:'20px'
      }}
    >
        <h2>Login</h2>
      <input 
      type="text"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      placeholder="UserName..."
      
      />
      <input type="password"
       value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Password..."
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
