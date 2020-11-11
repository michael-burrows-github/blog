import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

function MovieData() {
  const [data, setData] = useState({});
  useEffect(() => {
    Tabletop.init({
      key: "1SJ8LxWmaxKBTgDJLvfD9NZLctBT931x19--qH2yLxck",
      simpleSheet: true,
    }).then(function (data) {
      setData(data);
    });
  }, []);
  const movies = Array.from(data);  
  return (
    <ul>
      {movies.map((el) => (
        <li key={el.movie}>
          {el.movie} ({el.year}) - Rating {el.rating}
        </li>
      ))}
    </ul>
  );
}

export default MovieData;
