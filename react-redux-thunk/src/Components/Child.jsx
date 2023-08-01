import { memo } from 'react';

//Memo is a HOC Higher Order Component which avoids the rerender of the component 
//if no value changes from Parent.

//Usememo is used for avoid Heavy computation functions to re compute 
//unless a dependency is changed.
// const getValue = useMemo(() => {
//          
// },[state]);

const Child = ({value}) => {

console.log("Child ")
    return(
    <>
    <h2>Child</h2>
    </>
    );

}

export default memo(Child);