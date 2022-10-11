import React from 'react';



const Result = (props) => {
    if(props.stage === "all") {
    return (
        props.name.map(todo => (
            <li key={todo.id}><label><input type="checkbox" checked={todo.checked} onChange={() => props.action(todo.id)}/>{todo.content}</label></li>
          ))
    )}else if (props.stage === "completed") {

        let arr = props.name.filter(stag => stag.checked === true)

        
        return(

        arr.map(todo => (
            <li key={todo.id}><label><input type="checkbox" checked={todo.checked} onChange={() => props.action(todo.id)}/>{todo.content}</label></li>
          ))
        )
    } else if (props.stage === "active") {

        let arr = props.name.filter(stag => stag.checked === false)

        
        return(

        arr.map(todo => (
            <li key={todo.id}><label><input type="checkbox" checked={todo.checked} onChange={() => props.action(todo.id)}/>{todo.content}</label></li>
          ))
        )

    }
}
 
export default Result;