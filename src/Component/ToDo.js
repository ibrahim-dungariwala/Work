// import { Button, TextField } from "@mui/material"
// import { useState } from "react"
// import React from "react"


// export const ToDo = () => {

//     const [text, setText] = useState("")
//     const [save, setSave] = useState([])
//     const [search,setSearch] =useState([])


//     const handleText = (e) => {

//         setText(e.target.value)
//     }

//     const handleSave = () => {

//         if (text.trim() != "") {
//             setSave([...save, text])
//             setSearch([...save,text])

//         }
//         setText("")
//     }

//     const handleDEl = (item) => {

//         const Data = save.filter((elem) => elem != item)
//         console.log(Data);
//         setSave(Data)
//     }


//     const serchData=(value)=>{

//         const find = save.filter((item)=> ) 


     
//     }

//     return (
//         <div>
//             <h1>ToDo</h1>
//             <TextField placeholder="seach here" onChange={(e)=> serchData(e.target.value)} ></TextField>

//             <TextField onChange={handleText} value={text} ></TextField> <span>
//                 <Button variant="contained" onClick={() => handleSave()} >SAVE</Button>

//                 <ol>
//                     {save.map((item, index) =>

//                         <li>{item} y<span> </span>

//                             <Button variant="contained" onClick={() => handleDEl(item)} key={index} >DEL </Button>


//                         </li>

//                     )}
//                 </ol>
//             </span>
//         </div>

//     )
// }