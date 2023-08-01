import {Button, Input} from '../Components/Index';
import URL from '../Constants/Constants';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {


    
    const [formData, setFormData] = useState({});
    const [isValid, setValid] = useState(false);
    const navigate = useNavigate();
   

    const inputChangeHandler = (event) => {
        console.log(" input changed...", event);
        const {name, value} = event.target;

        setFormData((formData) => ({
          ...formData, [name] : value
        }));

    }

    const submitForm = () => {

      console.log(formData);
      try{
           fetch(URL.LOGIN,{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formData)
           })
           .then((res) => {
              console.log(" Success !!! ", res); 
              return res.json();
            }).then((data) => {
                console.log(" data :: ", data);
                if(data === 'Incorrect password' || data === 'Cannot find user'){
                    console.log(" Username or password incorrect !! ");

                } else {
                    navigate("/user");
                    localStorage.setItem("accessTk",data.accessToken);
                }
            })
           .catch((err) => console.log("Error :: ",err))
      }catch(err){
        console.log("Error :: ",err);
      }
    }

    const validateForm = () => {

      if(formData.fullname != '' & formData.password !=''){
        setValid(true);
        submitForm();
      } else {
        setValid(false);
      }
    }

    const buttonClickHandler = (e) => {
        console.log(" button clicked...", e);
        validateForm();
    }

      return (
        <section>
            <h1> Login Form </h1>
                <div>
                <Input name="email" type="text" placeholder="Enter your email" changeHandler={inputChangeHandler}></Input>
                </div> 
                <div>
                <Input name="password" type="text" placeholder="Enter your password" changeHandler={inputChangeHandler}></Input>
                </div> 

                <Button buttonLabel="Login" clickHandler={buttonClickHandler}/>
        </section>
      );

}

export default Login;