import React from "react";
import "./styles/card.css";

type CardProps = {
  imgUrl: string;
  title: string;
  rank: string;
  release: string;
  lastest: string;
  rating: string;
};

const Card = ({ imgUrl, title, rank, release, lastest, rating }: CardProps) => {
  return (
    <div className="card">
      <img className="card-img" src={imgUrl} alt={title} />
      <div className="card-details">
        <p className="card-title">{title}</p>
        <p>
          <b>Release : </b> {release}
        </p>
        <p>
          <b>Lastest : </b> {lastest ? lastest : "now"}
        </p>
        <p>
          <b>Rating : </b> {rating}
        </p>
      </div>
      <span className="card-rank">{rank}</span>
    </div>
  );
};

export default Card;
