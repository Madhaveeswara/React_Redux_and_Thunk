import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [users, setUsersData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = () => {
        console.log(" URL :: ",url);

            fetch(url).then((res) => {
                console.log(" Response  in UseFetch()  :: ", res);
                return res.json();
            }).then((data) => {
                console.log(" Data  in UseFetch() :: ", data);
                setUsersData(data);
                setIsLoading(false);
            }).catch((err) => {
                console.log(" Error in UseFetch() ",err);
                setError(err);
                setIsLoading(false);
            })

    }
    

   return ({ users, isLoading, error});

}

export default useFetch;