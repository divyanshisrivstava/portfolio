import {useState} from 'react'
function Counter() {
    //state variable
    const[ count,setCount ]= useState(0)

    return(
        <div>
            <h2>
            Count: { count }
            </h2>
            <button onClick={ ()=>setCount(count+1)}>Increament</button><br></br>
        </div>
    )
}

export default Counter 