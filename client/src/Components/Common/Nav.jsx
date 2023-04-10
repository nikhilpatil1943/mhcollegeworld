import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const slidebar =()=>{
    const Hamburger = document.getElementById("hamburger");
    const state = Hamburger.getAttribute("data-is-visible");
    const navbar = document.getElementById("opts");

    if (state === "false") {
      navbar.style.transform = "translate(0)";
      Hamburger.setAttribute("data-is-visible", "true");
    } else {
      Hamburger.setAttribute("data-is-visible", "false");
      navbar.style.transform = "translate(-100%)";
    }
}




const Nav =({currentState})=>{
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [isUser, setIsUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
      );
    
      useEffect(() => {
        setIsUser(JSON.parse(localStorage.getItem("profile")));
      }, [location,isUser?.token]);
    
      const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        setIsUser(null);
      };

      const navigateToresult=()=>{
          navigate("/result")       
      }
    return(
        <>
        <div style={{backgroundColor: "var(--clr-light)"}}>
            <div className="nav align_center">
            <NavLink to = "/"><div className="logo">MH College World</div></NavLink>
                    <div className="opt" id = "opts">
                        {
                            !isUser?
                       <><button className = "btn_1 btn_login" onClick={()=>{currentState(true);navigate("/login")}}>Login</button>
                        <button className = "btn_1 btn_register" onClick={()=>{currentState(false);navigate("/login")}}>Register</button>
                        </>
                        :<>
                        <button className = "btn_1 btn_register" onClick={handleLogout}>Logout</button>
                        <button className="btn_1 btn_register" onClick={navigateToresult}>Your College</button>
                        </>}
                        
                    </div>
                    <div className="hamburger" id = "hamburger" data-is-visible = "false" onClick={slidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Nav;