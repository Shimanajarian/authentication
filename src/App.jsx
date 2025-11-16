
import  { AuthProvider } from "./AuthContext"
import LoginForm from "./components/LoginForm"
import Dashboard from "./components/Dashboard"
import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"


const App= ()=> {


 return (
 <AuthProvider>
 
<Routes>
  <Route    path='/' element={<LoginForm/>} />
  <Route    path='/login' element={ <LoginForm/>}/>
  <Route    path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute> }/>
</Routes>

   </AuthProvider>
  )
}














export default App