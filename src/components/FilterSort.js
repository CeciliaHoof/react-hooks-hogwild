

function FilterGreased({ toggle, filterPigs, sort }){
    return(
        <div>
            <select onChange={sort}>
                <option>Sort Hogs By</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>

            <button onClick={filterPigs}>{toggle ? "Show All Hogs" : "Show Greased Hogs"}</button>
        </div>
    )
}

export default FilterGreased