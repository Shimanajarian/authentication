import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'
import Dashboard from './Dashboard'
import LoginForm from './LoginForm'

const Home = () => {
const {token}=useContext(AuthContext)



  return (
    <div style={{display:'flex' , minHeight:'100vh',justifyContent:'center',alignItems:'center'}}      >
{token ? <Dashboard/>: <LoginForm/>}
    </div>
  )
}

export default Home