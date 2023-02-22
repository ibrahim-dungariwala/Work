
import React, { useState, useRef, useEffect } from "react";

//useRef is React hook which is use to target DOM element Directly//
//useRef hook returns one object with key as Current{...}//
//To use useRef in our component we have to import it from react package//
//firstly we have to store userRef inside variable//
// eg.  const abc = useRef()
// we can terget the DOM element by adding ref={abc} atribute  


export const UseRef = () => {
    const [text, setText] = useState("")
    const [text1, setText1] = useState("")
    const [todo, setTodo] = useState([])

    const inputRef1 = useRef("")
    const inputRef2 = useRef("")

    const handleAdd = () => {

        setTodo([...todo, text])

        setText("")
        inputRef1.current.focus()
    }

    useEffect(() => {

        inputRef1.current.focus()

    }, [])

    return (
        <div>
            <br />
            <h1>Todo</h1>
            <input type="text"
                placeholder="Type here.."
                value={text}
                onChange={e => setText(e.target.value)}
                ref={inputRef1}
            />
            <input type="text"
                placeholder="Type here.."

                onChange={e => setText1(e.target.value)}
                ref={inputRef2}
            />

            <button onClick={() => handleAdd()}>ADD</button>

            <br />
            <br />

            {todo.map((item, index) => {
                return (
                    <li key={index}>{item}</li>

                )
            }


            )}

        </div>
    )
}