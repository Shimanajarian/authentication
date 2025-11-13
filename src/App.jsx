import { useEffect,useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm"
import Dashboard from "./Dashboard"
import AuthContext from "./AuthContext"

const App = () => {
const [token,setToken]=useState(localStorage.getItem('token') || null)
const navigate = useNavigate()

const handleToken=(tk)=>{
if(tk){
  localStorage.setItem('token',tk)
  setToken(tk)
  navigate('/dashboard')
}else{
  localStorage.removeItem('token')
  setToken(null)
  navigate('/login')
}




}

useEffect(()=>{
const saved=localStorage.getItem('token')
if(saved && !token) setToken(saved)

},[])

return (
    <AuthContext.Provider    value={{token , handleToken}}        >
<Routes>
<Route path="/login"  element={token?<Navigate  to='/dashboard'  /> : <LoginForm/>  }/>
<Route path="/dashboard"  element={token?<Dashboard/>: <Navigate to='/login'/>   }/>


</Routes>
    </AuthContext.Provider>
  )
}

export default App