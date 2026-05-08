import {useState} from 'react'

function CounterApp(){
    //state variable and fun
    const [count,setCount]= useState(0)
     
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>
        <div>
            <button onClick={increment} 
            >increment</button>
        </div><br></br>
        <div>
            <button onClick={decrement}
            >decrement</button>
        </div><br></br>
        <div>
            <button onClick={reset}
            >reset</button>
        </div><br></br>
        {
            count==10
            &&
            <h3>CONGRATULATION! 
                count reached 10
            </h3>
        }
        </div>
    )

}
export default CounterApp;