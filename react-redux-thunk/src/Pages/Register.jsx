import Button from '../Components/Button';
import Input from '../Components/Input';
import {useState} from 'react';
import URL from '../Constants/Constants';
import {useNavigate} from 'react-router-dom';




const Register = () => {

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
           fetch(URL.REGISTER,{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formData)
           })
           .then((res) => {
            console.log(" Success !!! ", res); 
            navigate("/login"); 
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
          <h1> Register Form </h1>
                <div>   
                <Input name="fullname" type="text" placeholder="Enter your name" changeHandler={inputChangeHandler}></Input>
                </div> 
                <div>
                <Input name="password" type="text" placeholder="Enter your password" changeHandler={inputChangeHandler}></Input>
                </div> 
                <div>
                <Input name="email" type="text" placeholder="Enter your email" changeHandler={inputChangeHandler}></Input>
                </div> 
                <Button buttonLabel="Register" clickHandler={buttonClickHandler}/>
        </section>
      );

}

export default Register;