import { Link } from 'react-scroll'

const heroImg = "./img/intro.svg"

const Hero =()=>{
    return(
    <>
        <div className="hero" id = "hero">
            <div className="intro__img hidden ">
                <img src={heroImg} alt="intro"/>
            </div>
    
            <div className="intro__text rhidden" >
                <div><span className="bigletter">G</span>et <span className="bigletter">Y</span>our <span style={{color: "var(--clr-htext)"}}><span className="bigletter">D</span>ream<br/> <span>C</span>ollege</span>
                </div>
                <p className="caption">
                    We guide you through your college selection process and helps you to choose the best college you deserve.
                </p>
                <Link to="predictor" spy={true} smooth={true} offset={-150} duration={500}><button className="btn_tn">Try Now</button></Link>
            </div>
        </div>
    </>
    )    
}

export default Hero