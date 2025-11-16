import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const AuthContext=createContext()

const initialState={
user:JSON.parse(localStorage.getItem('user')) || null,
token:localStorage.getItem('token') || null
}

function authReducer(state,action){
switch(action.type){
case 'LOGIN' : return {...state,user:action.payload.user,token:action.payload.token}
case 'LOGOUT' :  return {...state,user:null,token:null}
case 'REFRESH' :return {...state,user:action.payload.user || state.user,token:action.payload.token || state.token}
default : return state

}







}



export function AuthProvider({children}){
const[state,dispatch]=useReducer(authReducer,initialState)

useEffect(()=>{
    if(state.token ) localStorage.setItem('token',state.token)
        else  localStorage.removeItem('token')
   if(state.user)  localStorage.setItem('user',JSON.stringify(state.user))
    else localStorage.removeItem('user')
       
    



},[state.token,state.user])



const login=(user,token)=>{
    dispatch({type:'LOGIN',payload:{user,token}})
}

const logout=()=>{
    dispatch({type:'LOGOUT'})
}

const refresh=(user,token)=>{
    dispatch({type:'REFRESH',payload:{user,token}})
}



return (<AuthContext.Provider value={{...state,login,logout,refresh}}>

    {children}
</AuthContext.Provider>)








 
}

export default AuthContext