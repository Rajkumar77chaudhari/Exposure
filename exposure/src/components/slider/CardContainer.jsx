import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./style.scss"

const CardContainer = () => {
  const [movie, setMovie] = useState({});

  const url =
    "http://www.omdbapi.com/?t=iron+man&y=2008&plot=full&apikey=e48dad0c";

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        const movie = res.data;
        console.log(movie);
        setMovie(movie);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  // let Rating = [{ IM: "8.7" }, { RT: "8.0" }];

  return (
    <div className="container">
      <Card
        Title={movie.Title}
        Year={movie.Year}
        Rated={movie.Rated}
        Released={movie.Released}
        Runtime={movie.Runtime}
        Genre={movie.Genre}
        Director={movie.Director}
        Writer={movie.Writer}
        Actors={movie.Actors}
        Plot={movie.Plot}
        Language={movie.Language}
        Country={movie.Country}
        Awards={movie.Awards}
        Poster={movie.Poster}
        Ratings={movie.Ratings}
        Type={movie.Type}
        DVD={movie.DVD}
        BoxOffice={movie.BoxOffice}
      />
      <Card
        Title={movie.Title}
        Year={movie.Year}
        Rated={movie.Rated}
        Released={movie.Released}
        Runtime={movie.Runtime}
        Genre={movie.Genre}
        Director={movie.Director}
        Writer={movie.Writer}
        Actors={movie.Actors}
        Plot={movie.Plot}
        Language={movie.Language}
        Country={movie.Country}
        Awards={movie.Awards}
        Poster={movie.Poster}
        Ratings={movie.Ratings}
        Type={movie.Type}
        DVD={movie.DVD}
        BoxOffice={movie.BoxOffice}
      />
    </div>
  );
};

export default CardContainer;
