import { useContext } from "react"
import AuthContext from "./AuthContext"


const Dashboard = () => {
 const {token,handleToken} = useContext(AuthContext)

  return (
    <div style={{textAlign:'center',marginTop:'80px'}}>
<h2>wlcome shima</h2>
<br />
<p> your token : {token}</p>
<br /> 
<button onClick={()=>handleToken(null)}      >Logout</button>
    </div>
   
  )
}

export default Dashboard