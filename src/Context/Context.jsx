import { createContext, useReducer } from "react";

export const MyContext = createContext();

import React from 'react'

const Context = ({children}) => {
  const reducer =(state, action)=>{
    switch(action.type){
      case "1":
        return state+=1;
      case "5":
        return state+=5;
      case "10":
        return state+=10;
      case "15":
        return state+=15;
      case "20":
        return state+=20;
      case "0":
        return state=0;
      default :
      console.log("Invalid Choice")                  
      
    }
  }
    const [state, dispatch]= useReducer(reducer, 0);
  return <MyContext.Provider value={{state, dispatch}}>{children}</MyContext.Provider>
}
export default Context