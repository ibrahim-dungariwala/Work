import React, { useEffect, useReducer, useRef } from "react";

export const Dom=()=>{
    
    const first=useRef("")
    const second=useReducer('')
    const handelADD=()=>{

      second.current.focus()
    }

    useEffect(()=>{

        first.current.focus()

    },[])
    return(
        <div>
            <h1>helow</h1>

            <input type="text"  ref={second} placeholder="1"/>
            <input type="text" placeholder="2"/>
            <input type="text" placeholder="3"/>
            <input type="text" ref={first} placeholder="4"/>

            <button onClick={handelADD}>ADD</button>
        </div>


    )
}