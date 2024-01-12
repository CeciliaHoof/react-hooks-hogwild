import Hog from "./Hog"

function HogContainer({ hogsArr }){
    
    return(
        <div className="ui link cards">
            {hogsArr.map(hog => 
                <Hog 
                    name={hog.name}
                    image={hog.image}
                    specialty={hog.specialty}
                    weight={hog.weight}
                    medal={hog["highest medal achieved"]}
                    key={hog.name}/>)}
        </div>
    )
}

export default HogContainer