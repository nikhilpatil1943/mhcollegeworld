import "./About.css"

const aboutImg = "./img/about.svg"
const carddetail = [{
    img:"https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    name:"Nikhil Patil",
    designation :"Backend"
},
{
    img:"https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",    
    name:"Mahesh Choudary",
    designation :"UI/ UX"
},
{
    img:"https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",    
    name:"Atharava Kale",
    designation :"Reserach / Marketing"

},
{
    img:"https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",    
    name:"Gouri Narawade",
    designation :"Reserach / Marketing"
},
{
    img:"https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",    
    name:"Shreeram Shanmugasundaram",
    designation :"DevOps & FrontEnd"
    
},


]

const About =()=>{
    return(
        <>
        <div className="about align_center">
                <div className="about__headline">
                    About Us
                </div>
            <div className="about__top">
                
                <img src={aboutImg} alt="" />
                <div className="about_pargraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum velit similique soluta consequuntur nemo ad. Dicta, ipsa eum porro, expedita amet, possimus fugit cum eligendi suscipit harum animi dignissimos!
                </div>
            </div>
            <div className="about__team">
                    Meet the Team
                </div>
            <div className="about__pics">
              
                {
                    carddetail.map((card)=>{
                        return(
                            <div className="about__card" key = {card.name}>
                                <img src={card.img} alt="" />
                                <div className="about__personal">
                                    <div className="about__name">
                                    {card.name}
                                    </div>
                                    <div className="about__des">
                                    {card.designation}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            
        </div>
        </>
    )
}

export default About