import { useState, useEffect } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const clickHandler = () => {

        setCount((prevState)=>{ return prevState+1});
       // setCount(count + 1);
    }

   useEffect(()=>{
    console.log(" useEffect() => componentDidMount() ");
   },[]);


   useEffect(()=>{
    console.log(" useEffect() with no Array param => componentDidUpdate() ");
   });

   useEffect(()=> {
        return () => {
        console.log("  useEffect() with Array param and returning a function => componentWillUnmount()  ")
     }
   },[])

    return(
    <>
    <h1> Counter : {count}</h1>
    <button onClick={clickHandler}> Add </button>
    </>)

}

export default Counter;