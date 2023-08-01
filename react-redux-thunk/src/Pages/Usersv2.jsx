

import useFetch from '../Hooks/useFetch';

const Usersv2 = () => {

    const { users, isLoading, error }= useFetch({url:"https://jsonplaceholder.typicode.com/users"});

    console.log(" users :: ", users);

      if(isLoading){
        return <div> Loading... </div>
      }
      if(error) {
        return <div> Error encountered... </div>
      }
  

      return (<>
       
          <h1> Users </h1>
             {users && users.map(
              (item) => <h2>{item.name}</h2>
              )}  
       
        </>
      );

}

export default Usersv2;