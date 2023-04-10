import { useEffect } from "react";

import Hero from "./Hero";
import Predictor from "./Predictor";
import News from "./News";
import Categories from "./Categories";
import Plan from "./Plan";
import Testimonials from "./Testimonials"


const Home =({reference})=>{

    // Intro Animation Code 
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }else{
                    entry.target.classList.remove("show")
                }
            }))
        })
        const hiddenElements = document.querySelectorAll('.hidden,.rhidden')
        hiddenElements.forEach((el)=>{
            observer.observe(el)
        })

    })


    return(
        <>
        <Hero />
        <Predictor />
        <News />
        <Categories />
        <Plan />
        <Testimonials />
        </>
    )
}

export default Home;