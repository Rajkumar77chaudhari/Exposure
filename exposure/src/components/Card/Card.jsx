import React, { useState } from "react";
import "./Card.scss";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const Card = ({
  Title,
  Year,
  Rated,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Language,
  Country,
  Awards,
  Poster,
  Ratings,
  Type,
  DVD,
  BoxOffice,
}) => {
  const [toggle, setToggle] = useState(false);

  const listRatings = Ratings?.map((Rating) => {
    return (
      <div className="rating" key={Ratings.indexOf(Rating)}>
        <span>{Rating.Value}</span>
        <p>
          {Rating.Source === "Internet Movie Database" ? "IMDb" : Rating.Source}
        </p>
      </div>
    );
  });

  const toggleHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className="card-container">
      <div className="poster-plot-container">
        <img src={Poster} alt="Poster" className="poster" />
        <div className="detail">
          <div className="title-year-container">
            <h3 id="title">{Title}</h3>
            <p>({Year})</p>
          </div>
          <p id="rated">{Rated}</p>
          <p id="genre">{Genre}</p>
          <div id="cast">
            <span>Cast:</span>
            <p>{Actors}</p>
          </div>
        </div>
      </div>
      <div className="rating-container">{listRatings}</div>
      <div className="dropDown">
        {!toggle ? (
          <IoIosArrowDropdown
            size={30}
            color={"#ffcead"}
            onClick={toggleHandler}
          />
        ) : (
          <IoIosArrowDropup
            size={30}
            color={"#ffcead"}
            onClick={toggleHandler}
          />
        )}
        <div className="plot-more-detail-container">
          <textarea id="plot" name="plot" defaultValue={Plot} disabled>
            {Plot}
          </textarea>
          <div className="more-details">
            <div id="language">
              <span>Language:</span>
              <p>{Language}</p>
            </div>
            <div id="awards">
              <span>Awards:</span>
              <p>{Awards}</p>
            </div>
            <div id="box">
              <span>Box-Office Collection:</span>
              <p>{BoxOffice}</p>
            </div>
            <div id="runtime">
              <span>Runtime:</span>
              <p>{Runtime}</p>
            </div>
            <div id="runtime">
              <span>Released:</span>
              <p>{Released}</p>
            </div>
            <div id="runtime">
              <span>DVD:</span>
              <p>{DVD}</p>
            </div>
            <div id="runtime">
              <span>Director:</span>
              <p>{Director}</p>
            </div>
            <div id="runtime">
              <span>Type:</span>
              <p>{Type}</p>
            </div>
            <div id="runtime">
              <span>Writer:</span>
              <p>{Writer}</p>
            </div>
            <div id="runtime">
              <span>Country:</span>
              <p>{Country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
