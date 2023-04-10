import { useEffect, useState } from "react"
import "./Login.css"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signin, signup } from "../../actions/auth";

const LoginImg = "./img/login.svg"

const Login =({currentstate})=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(()=>{
        setIsLogin(currentstate)
    },[currentstate])
    const [isLogin,setIsLogin] = useState(true)
    const [showpass,setShowpass] = useState(false)
    
    const init_formdata = {name :"",password:"",cpassword:"",phone:""}
    const [formData, setFormData] = useState(init_formdata)

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    // handling Login
    const handleSubmit =(e)=>{
        e.preventDefault()
        if (isLogin){
            dispatch(signin(formData, navigate));
        }else {
            dispatch(signup(formData, navigate));
          }
    }

    return (
        <>
            <div className="login align_center">
                <img src={LoginImg} alt="" />
                <form onSubmit={handleSubmit}>
                    {isLogin?
                    <div className="login__title">
                        Hey, <br/>Login Now
                    </div>:
                    <div className="login__title">
                        Hey,<br/>Register Now
                    </div>
                    }

                    <div className="login__inputs">
                        {!isLogin&&<input required placeholder="Name" name ="name" onChange={handleChange}/>}
                        <input placeholder="Phone Number" name = "phone" required type="text" onChange={handleChange}/>
                        <input placeholder ="Password" name="password" required type={showpass?"text":"password"} onChange={handleChange}/>
                        {!isLogin&&<input placeholder="Confirm Password" name ="cpassword" type={showpass?"text":"password"} required onChange={handleChange}/>}
                        <div><input type="checkbox" onChange={()=>{setShowpass((previous)=>!previous)}}/> <span>Show Password</span></div>
                        <button>{isLogin?<>Login</>:<>Register</>} </button>
                    </div>
                    
                    {isLogin?
                    <div className="changeform" onClick={()=>setIsLogin(previous=>!previous)}>
                        Don't have a account <span>create now</span> 
                    </div>:<div className="changeform" onClick={()=>setIsLogin(previous=>!previous)}>
                        Already have a account <span>Login Here</span>
                    </div>}
                </form>
            </div>
        </>
    )
}

export default Login 