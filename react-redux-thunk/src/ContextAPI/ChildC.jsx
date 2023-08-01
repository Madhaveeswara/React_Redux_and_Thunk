import { userContextAPIObj, userLevelContextAPIObj } from './ParentContextAPISample';
import { useContext} from 'react';

const ChildC = () => {

    const uname = useContext(userContextAPIObj);
    const ulevel = useContext(userLevelContextAPIObj);

    return (
        <h1> ChildC : {uname} and {ulevel}</h1>
    )

    // return (
    //     <userContextAPIObj.Consumer>
    //         {
    //                 (uname) => {
    //                  return(

    //                     <userLevelContextAPIObj.Consumer>
    //                      {
    //                         (ulevel) => { 
    //                                     return (
    //                                             <>
    //                                             <h1>ChildC : {uname} and {ulevel}</h1>
    //                                             </>
    //                                     )
    //                             }
    //                     }      
    //                     </userLevelContextAPIObj.Consumer>

    //                     )
    //                 }
    //         }
    //     </userContextAPIObj.Consumer>
    // )
}

export default ChildC;