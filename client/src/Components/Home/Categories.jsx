const Categories =()=>{
    return(
        <>
        <div id = "categories">
        <div className="cat_title">
            Categories
        </div>
        <div className="categories align_center">
            <div className="card hidden">
                <div className="title">Engineering</div>
                <img src="./img/eng.svg" alt="Engineering" />
                <button className="btn_tn">Try Now</button>
            </div>

            <div className="card hidden">
                <div className="title">Medical</div>
                <img src="./img/medical.svg" alt="Engineering" />
                <button className="btn_tn">Try Now</button>
            </div>

            <div className="card hidden">
                <div className="title">DSE</div>
                <img src="./img/dse.svg" alt="Engineering" />
                <button className="btn_tn">Try Now</button>
            </div>

            <div className="card hidden">
                <div className="title">Diploma</div>
                <img src="./img/Diploma.svg" alt="Engineering" />
                <button className="btn_tn">Try Now</button>
            </div>
        </div>
    </div>

        </>
    )
}

export default Categories