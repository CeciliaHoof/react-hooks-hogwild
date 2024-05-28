import { Card } from "semantic-ui-react";
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";
import { useState } from "react";

export default function HogContainer({ hogsArr }) {
  const [filtered, setFiltered] = useState(false);
  const [sortName, setSortName] = useState(false);
  const [sortWeight, setSortWeight] = useState(false);

  const filterHogs = () => {
    setFiltered(!filtered);
  };

  const handleSort = (e) => {
    if (e.target.value === "name") {
      setSortName(true);
      setSortWeight(false)
      console.log(`"NAME:" ${sortName}`)
    } else {
      setSortWeight(true)
      setSortName(false);
    }
  };

  let hogsDisplay;

  filtered
    ? (hogsDisplay = hogsArr.filter((hog) => hog.greased))
    : (hogsDisplay = hogsArr);

  sortName &&
    hogsDisplay.sort((hogA, hogB) => {
      const nameA = hogA.name.toUpperCase();
      const nameB = hogB.name.toUpperCase();

      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });

  sortWeight &&
    hogsDisplay.sort((hogA, hogB) => {
      const weightA = hogA.weight;
      const weightB = hogB.weight;

      return weightA - weightB;
    });

  hogsDisplay = hogsDisplay.map((hog) => <HogTile key={hog.name} hog={hog} />);

  return (
    <>
      <FilterSort
        filtered={filtered}
        filterHogs={filterHogs}
        name={sortName}
        weight={sortWeight}
        setSort={handleSort}
        
      />
      <Card.Group>{hogsDisplay}</Card.Group>
    </>
  );
}
