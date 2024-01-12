import { useState } from "react";

function Hog({ hogObj }){
    const [detailToggle, setDetailToggle] = useState(false)
    
    function clickHandler(e){
        setDetailToggle(!detailToggle)
    }

    if(detailToggle === true){
        return(
        <div className="card">
            <div className="image">
                <img src={hogObj.image} alt={hogObj.name} name={hogObj.name} onClick={clickHandler}></img>
            </div>
            <div className="content">
                <div className="header">{hogObj.name}</div>
                <div className="meta">
                    <div>{`Specialty: ${hogObj.specialty}`}</div>
                    <div>{`Weight: ${hogObj.weight}`}</div>
                    <div>{`Highest Medal Achieved: ${hogObj["highest medal achieved"]}`}</div>
                    <div>{`Greased: ${hogObj.greased}`}</div>
                </div>
            </div>
        </div>
        )
    }
    else{
        return(
            <div className="card">
                <div className="image">
                    <img src={hogObj.image} alt={hogObj.name} name={hogObj.name} onClick={clickHandler}></img>
                </div>
                <div className="content">
                    <div className="header">{hogObj.name}</div>
                </div>
            </div>
         
    )}
}
export default Hog