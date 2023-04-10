
const Plan =()=>{
return(
    <> <div id = "plan">
    <div className="cat_title">
        Our Plan
    </div>

    <div className="ourplan align_center">
        <div className="card hidden">
            <div className="head">Freeium</div>
            <div className="headprice">Rs 0 /-</div>
            <ul>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
            </ul>
            <button className="btn_2">Buy Now</button>
        </div>

        <div className="card hidden">
            <div className="head">Premium</div>
            <div className="headprice">Rs 99 /-</div>

            <ul>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
                <li>Lorem ipsum dol</li>
            </ul>
            <button className="btn_2">Buy Now</button>
        </div>
        
        <div>
            <img src="./img/Discount.svg" alt="" />
        </div>
    </div>
</div></>
)
}

export default Plan