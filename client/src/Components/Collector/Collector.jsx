import { useState } from "react"
import "./Collector.css"
import { getcolleges } from "../../actions/college";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import district from "./district";

const collectorImg = "./img/collector.svg"

const listOfBranch =[
    { value: "civil", label: "Civil" },
        { value: "comp", label: "Computer/IT" },
        { value: "entc", label: "Electronic & Telecommunication" },
        { value: "mech", label: "Mechanical" },
        { value: "ele", label: "Electrical" }
]
const listOfCat =[
    { value: "open", label: "Open" },
        { value: "obc", label: "OBC" },
        { value: "sc", label: "SC" },
        { value: "st", label: "ST" },
]
const listOfDistrict=district
const listOfExam =[
    {value:"CET",label:"CET"}
]
const listOfGender = [
    {value:"male",label:"Male"},
    {value:"female",label:"Female"}
]

const Collector =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [page,setpage] = useState(false)

    const initData = {percentile :"", exam:"CET",category:"open",branch:"comp",district:"all",gender:"male",dist1:"all",dist2:"all",dist3:"all"};
    const [formData,setFormData] = useState(initData)

    const handlenext=(e)=>{
        e.preventDefault()
        if (!page&& formData.percentile !==""){
            setpage(true);
        }else{
            window.alert("enter percentile")
        }
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(getcolleges(formData, navigate));
        console.log("Sending the data")
    }

    const handleChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})    
    }
    return(
        <div className="collector align_center">
            <img src={collectorImg} alt="" />
            <form className="collector__form">
                <>{
                    !page?<><div>
                    <label htmlFor="">Enter your Percentile</label>
                    <input required onChange={handleChange} name ="percentile" type="number"/>
                </div>

                <div>
                    <label htmlFor="">Choose Your Exam : </label>
                    <select name="exam" onChange={handleChange} id="">
                        {listOfExam.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor="">Choose Your Category : </label>
                    <select name="category" onChange={handleChange} id="">
                        {listOfCat.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor="">Choose Your Branch : </label>
                    <select name="branch" onChange={handleChange} id="">
                        {listOfBranch.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div>
                
                <div>
                    <label htmlFor="">Completed Your 12th in (district) </label>
                    <select name="district" onChange={handleChange} id="">
                        {listOfDistrict.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor="">Select Your Gender </label>
                    <select name="gender" onChange={handleChange} id="">
                        {listOfGender.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div></>:<>
                <div className="Collector__page__title">
                    Intereseted District To Study in?
                </div>
                <div>
                    <label htmlFor="">Choose your First District </label>
                    <select name="dist1" onClick={handleChange}  id="">
                        {listOfDistrict.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor="">Choose your Second District </label>
                    <select name="dist2" onClick={handleChange} id="">
                        {listOfDistrict.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor="">Choose your Third District </label>
                    <select name="dist3" onClick={handleChange} id="">
                        {listOfDistrict.map((i)=>{
                            return<option key={i.value} value = {i.value}>{i.label}</option>
                        })}
                    </select>
                </div>
                </>
                }
                
                </>
                {!page ?<button onClick={handlenext}>Next</button>:
                <button onClick={handlesubmit}>Submit</button>
                }

                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot" style={{"background-color":"var(--clr-highlight)"}}></div>
                </div>
            </form>
        
        </div>
        
    )
}

export default Collector