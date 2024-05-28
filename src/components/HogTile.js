import { useState } from "react";
import { Card, Image } from "semantic-ui-react";

export default function HogTile({ hog }) {
  const { name, image, specialty, weight, greased } = hog;
  const [displayDetails, setDisplayDetails] = useState(false)

  const showDetails = () => {
    setDisplayDetails(!displayDetails)
  }
  
  return (
    <Card onClick={showDetails}>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {displayDetails && (
            <>
            <Card.Description>Specialty: {specialty}</Card.Description>
            <Card.Description>Weight: {weight}</Card.Description>
            <Card.Description>{greased ? "very greasy" : "squeaky clean"}</Card.Description>
            <Card.Description>Highest Honor: {hog["highest medal achieved"]}</Card.Description>
            </>
        )}
      </Card.Content>
    </Card>
  );
}
