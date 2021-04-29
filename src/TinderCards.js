import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://wallpapercave.com/wp/wp2048440.jpg",
    },
    {
      name: "Adriana",
      url:
        "http://s5.pics.vc/pics/n/7da/cb0/400/80e/7dacb040080e9b55822502280dcd4fec.jpg",
    },
    {
      name: "Kayden Kross",
      url:
        "https://content.thriveglobal.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-22-at-3.13.23-PM.png",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
