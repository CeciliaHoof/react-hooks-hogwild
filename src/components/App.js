import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import FilterSort from "./FilterSort.js";
import hogs from "../porkers_data";

function App() {
	const [toggleGreased, setToggleGreased] = useState(false)
	const [sortWeight, setSortWeight] = useState(false)
	const [sortName, setSortName] = useState(false)
	const [hogsArr, setHogsArr] = useState(hogs)
	const filterHogs = hogsArr.filter(hog => 
		{if(toggleGreased === false) {return true}
		else{return hog.greased === true}})
	
	if(sortName === true){
		filterHogs.sort((a, b) => {
			const nameA = a.name.toLowerCase();
			const nameB = b.name.toLowerCase();
			if (nameA < nameB){ return -1}
			else{ return 1}
		})
	}

	if(sortWeight === true){
		filterHogs.sort((a, b) => {
			const weightA = a.weight;
			const weightB = b.weight;
			if (weightA < weightB){return -1}
			else{return 1}
		})
	}

	function sortHogs(e){
		if (e.target.value === "name"){setSortName(true); setSortWeight(false)}
		else if (e.target.value === "weight"){setSortName(false); setSortWeight(true)}
		else {setSortName(false); setSortWeight(false)}
	}
	function handleClick(){
        setToggleGreased(!toggleGreased);
    }
	
	// function sortByName(){
	// 	setSortName(!sortName)
	// }

	// function sortByWeight(){
	// 	setSortWeight(!sortWeight)
	// }

	return (
		<div className="App">
			<Nav />
			<FilterSort
				toggle={toggleGreased} 
				filterPigs={handleClick}
				sort={sortHogs}/>
			<HogContainer hogsArr={filterHogs}/>
		</div>
	);
}

export default App;
