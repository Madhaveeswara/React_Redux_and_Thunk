
import {useState, useEffect} from 'react';


const Users = () => {

    const [usersData, setUsersData] = useState({});


    useEffect(() => {
        getUsers();
    },[])
  
    const getUsers = () => {

     
      try{
           fetch("https://jsonplaceholder.typicode.com/users")
           .then((res) => {
            console.log(" Success !!! ", res); 
            return res.json();
            }).then((data) => {
               setUsersData(data);
            })
           .catch((err) => console.log("Error :: ",err))
      }catch(err){
        console.log("Error :: ",err);
      }
    }




      return (
        <section>
          <h1> Users </h1>
               
        </section>
      );

}

export default Users;