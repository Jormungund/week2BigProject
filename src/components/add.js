import React from 'react'

const Add = (props) => {
     const handleClick = ()=> {
        let a = parseInt(props.num1, 10) + parseInt(props.num2, 10);
        let b = 'Here is the result: ' + a;
        console.log(b);
        props.settingState(b)
      }
    return (
        <button onClick={()=>handleClick()}>Add</button>
    )
}

export default Add;