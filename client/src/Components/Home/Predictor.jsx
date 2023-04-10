import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as api from "../../api/index";

const predictorgif = "./img/giphy.gif"
const predictorpop ="./img/predictorpop.svg"

const Predictor =()=>{
    const getchance = async()=>{
       
        try{
            await api.getchance(formData).then().catch((error)=>{
            console.log("outside erro")    
            console.log(error)}

        )
        }catch(err){
            window.alert("something went wrong")
        }
    }

    const init_chance = {chance :90 ,collegename :"Pimpir Chinchwad College of Engineering and Research Ravet"}
    const [resultData,setResultData] = useState(init_chance)

    const init_data = {percentile :"",dte:"6938",branch:"comp"}
    const [formData,setFormData] = useState(init_data)

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})    
    }
    const [showgif,setShowgif] = useState(true);
    const handlePredict =(e)=>{
        e.preventDefault();
        if(formData.percentile ===""){
            window.alert("Enter Percentile to Check your Change")
        }else{
        const predictdiv = document.getElementById("PredictPopup");
        predictdiv.style.transform= "scale(1)";
        setTimeout(()=>setShowgif(false),5000)
        getchance()
        console.log("inside predict")
        }
    }

    const handleClose=(e)=>{
        e.preventDefault();
        const predictdiv = document.getElementById("PredictPopup");
        predictdiv.style.transform = "scale(0)"
    }

    const collegeList = [
        {name:"Pimpri Chinchwad College of Engineering and Research,Ravet",value:"6003"}
    ]
    const listOfBranch =[
        { value: "civil", label: "Civil" },
            { value: "comp", label: "Computer/IT" },
            { value: "entc", label: "Electronic & Telecommunication" },
            { value: "mech", label: "Mechanical" },
            { value: "ele", label: "Electrical" }
    ]
    return(
        <><div className="predictor_warp align_center" id = "predictor">
        <div className="predictor_img hidden">
            <img src="./img/predictor.svg" alt="Predictor" />
        </div>
        <form className="predictor_form rhidden">
            <div className="text">
                Let's Predict Your <span style={{color: "var(--clr-highlight)"}}> Fortune</span> !
            </div>
            <label htmlFor="college">Enter College</label>
            <select name="dte" onChange={handleChange} id="college">
                {collegeList.map((data)=>{
                    return(

                        <option value={data.dte}>{data.name}</option>
                    )
                })}
            </select>
            
            <label htmlFor="branch">Enter Branch</label>
            <select name="branch" onChange={handleChange}>
                {listOfBranch.map((data)=>{
                    return(
                        <option value={data.value}>{data.label}</option>
                    )
                })}
                
            </select>

            <label htmlFor="percentile">Percentile</label>
            <input type="number" max = "100" min="0" onChange={handleChange} name="percentile" id=""/>

            <button onClick={handlePredict}>Predict</button>
        </form>
        <div className="predictor__popup" id = "PredictPopup">
            {showgif?
            <img src={predictorgif} alt="" />:<>
            <div className="predictor__popup__result ">
                <img src={predictorpop} alt="" />
                <div>
                    <h2><span style={{color:"var(--clr-highlight)"}}>Congrats</span> Your Prediction <br/>Score</h2>
                    <div className="popup__percentile">{resultData.chance}%</div>
                    <div className="popup__college" style={{color:"var(--clr-text)"}}>Chance of Getting into</div>
                    <div className="popup__college">{resultData.collegename}</div>
                    <div className="popup__note">* this is for open categories only and may vary based on other factors, for getting 
                    better result
                    </div>
                    <button className="btn_1"><NavLink to = "/login">Click Now</NavLink></button>
                </div>
                <button className="close_btn" onClick={handleClose}>x</button>
            </div>
            
            </>}
        </div>

    </div>
</>
    )
}

export default Predictor