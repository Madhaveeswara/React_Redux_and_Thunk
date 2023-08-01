

const Welcome = () => {

    const logout = () => {
        localStorage.clear();
    }
return(<>
    <h2> Welcome !!! </h2>
    <button onClick={()=> { logout()}}>Logout</button>
    </>)
}

export default Welcome;