import React, { useContext } from "react";
import Card from "./Card";
import { AppContext } from "./context";
import "./styles/card-section.css";

type Props = {};

const CardsSection = (props: Props) => {
  const { animeList } = useContext(AppContext);

  return (
    <div className="cards-section">
      {animeList &&
        animeList.map((anime, index) => {
          let dates = anime.aired.string.split("to");
          const release = dates[0];
          const lastest = dates[1];
          return (
            <Card
              key={index}
              imgUrl={anime.images.jpg.image_url}
              title={anime.title}
              rank={`${index + 1}`}
              release={release}
              lastest={lastest}
              rating={anime.rating}
            />
          );
        })}
    </div>
  );
};

export default CardsSection;
