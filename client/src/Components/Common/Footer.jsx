
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
const Footer =()=>{
    
    return(
        <div className="footer">
            <div className="logo" style={{color: "var(--clr-text)"}}>MH College World</div>
            <div className="fnav">
                <NavLink to="/" spy={true} smooth={true} offset={-150} duration={500} ><span className="flink">Home</span></NavLink>
                <NavLink to="/about"><span className="flink">About</span></NavLink>
                <Link to="plan" spy={true} smooth={true} offset={-150} duration={500} ><span className="flink">Pricing</span></Link>
                <Link to="categories" spy={true} smooth={true} offset={-150} duration={500} ><span className="flink">Categories</span></Link>
                <NavLink to="/login"><span className="flink">Login</span></NavLink>
            </div>

            <div className="fnav">
                Contact us : mhcollegeworld@gmail.com
            </div>
        </div>


    )
}

export default Footer