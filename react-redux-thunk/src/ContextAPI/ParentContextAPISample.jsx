import ChildA from "./ChildA";

import {createContext} from 'react';
// createContext
// Provider
// Consumer

export const userContextAPIObj = createContext();
export const userLevelContextAPIObj = createContext();

const ParentContextAPISample = () => {
const name = "Message from Parent ";
const level = "Parent Level";

    return (
        <>
        <userContextAPIObj.Provider value={name}>
        <userLevelContextAPIObj.Provider value={level}>    
        <h1>Parent Context API Sample </h1>
        <ChildA />
        </userLevelContextAPIObj.Provider>
        </userContextAPIObj.Provider>
       </>)
}

export default ParentContextAPISample;