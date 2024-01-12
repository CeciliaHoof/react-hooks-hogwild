import Hog from "./Hog"

function HogContainer({ hogsArr }){
    
    return(
        <div className="ui link cards">
            {hogsArr.map(hog => <Hog hogObj={hog} key={hog.name}/>)}
        </div>
    )
}

export default HogContainer