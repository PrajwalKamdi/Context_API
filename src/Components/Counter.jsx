import React, { useContext } from 'react'
import { MyContext } from '../Context/Context';

function Counter() {
  const { state, dispatch } = useContext(MyContext);
   return (
     <div className="">
       <div className="text-3xl text-center w-fit m-auto py-3 px-5 border-slate-500 border-[2px] ">
         Counter Application With Context API
       </div>
       <div className="p-5  w-fit mx-auto mt-5 space-x-3 border">
         <button
           className="border p-2 border-slate-950 hover:shadow-md hover:shadow-teal-300"
           onClick={() => {
             dispatch({ type: "1" });
           }}
         >
           Increment By 1
         </button>
         <button
           className="border p-2 border-slate-950 hover:shadow-md hover:shadow-teal-300"
           onClick={() => {
             dispatch({ type: "5" });
           }}
         >
           Increment By 5
         </button>
         <button
           className="border p-2 border-slate-950 hover:shadow-md hover:shadow-teal-300"
           onClick={() => {
             dispatch({ type: "10" });
           }}
         >
           Increment By 10
         </button>
         <button
           className="border p-2 border-slate-950 hover:shadow-md hover:shadow-teal-300"
           onClick={() => {
             dispatch({ type: "15" });
           }}
         >
           Increment By 15
         </button>
         <button
           className="border p-2 border-slate-950 hover:shadow-md hover:shadow-teal-300"
           onClick={() => {
             dispatch({ type: "20" });
           }}
         >
           Increment By 20
         </button>
         <button
           className="border p-2 border-slate-950 hover:shadow-md hover:shadow-teal-300"
           onClick={() => {
             dispatch({ type: "0" });
           }}
         >
           Reset
         </button>
       </div>
       <div className="p-2 border border-slate-950 w-fit mx-auto mt-5 text-3xl">Counter : {state}</div>
     </div>
   );
}

export default Counter