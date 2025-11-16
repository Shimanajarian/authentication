import { useContext } from "react"
import AuthContext from "../AuthContext"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
const {user,token,logout}=useContext(AuthContext)
const navigate=useNavigate()
const handleLogout=()=>{
    logout();
    navigate('/login')
}

  return (
    <div style={{textAlign:'center',marginTop:'100px'}} >
<h1 style={{fontStyle:'italic'}}>Welcome {user}</h1> <br />
<p> Your token : {token}</p><br />
<button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard