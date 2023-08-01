import {useState, useCallback} from 'react';
import Child from './Child';

const Parent = () => {

    const [count, setCount] = useState(0);

    const clickHandler = () => {
        console.log(" Handler click ");
        setCount((prevState) =>{ return prevState + 1});
    }

    const getValue = useCallback(() => {
          
    },[]);

    return(
    <>
    <h1>Parent  Counter: {count}</h1>
    <button onClick={clickHandler}>Add</button>
    <Child  value={getValue}/>
    </>
    );

}

export default Parent;