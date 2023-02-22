
import { Button } from "@mui/material";
import React, { useEffect, useRef, useState, } from "react";

export const Task = () => {


    const inputRef=  useRef("")
    const [text, setText] = useState('')
    const [todo, setTodo] = useState([])


    const handleADD = () => {

        if(!text.trim())return
        
        setTodo([...todo, text])
        
        
    }

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <h1>helow</h1>

            <input type="text"
                onChange={e => setText(e.target.value)}
                ref={inputRef} value={text}
                placeholder="type here..." />

            <Button variant="contained"
            
                onClick={handleADD}
            >ADD</Button>

            <ol>
                {todo.map((item, index) => {

                    return (


                        <li key={index}>{item}</li>


                    )
                })}
            </ol>

        </div>
    )
}