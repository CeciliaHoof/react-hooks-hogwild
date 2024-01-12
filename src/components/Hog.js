import { useState } from "react";

function Hog({ name, image, specialty, weight, medal, greased }){
    const [detailToggle, setDetailToggle] = useState(false)
    
    function clickHandler(){
        setDetailToggle(!detailToggle)
    }

    return(
        <div className="card">
            <div className="image">
                <img src={image} alt={name}></img>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                {detailToggle ? (
                    <div>
                    <div className="meta">
                        <div>{`Specialty: ${specialty}`}</div>
                        <div>{`Weight: ${weight} little piggies`}</div>
                        <div>{`Highest Medal Achieved: ${medal}`}</div>
                        <div>{greased ? `greasy boi` : `squeaky clean`}</div>
                    </div>
                    <span onClick={clickHandler}>Click to Hide Details</span>
                    
                    </div>) : <span onClick={clickHandler}>Click for More Detail</span>
                }
            </div>
        </div>
    )     
}

export default Hog