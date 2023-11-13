import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, mediumCoverImage, title, summary, genres }) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    console.log(hover);
  }, [hover]);

  return (
    <div className={styles.single_movie}>
      <img
        src={mediumCoverImage}
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        alt="There is no Img :("
      />
      <h2>
        <Link id="movieTitle" to={`/movies/${id}`}>
          {title}
        </Link>
      </h2>
      {/* <p>{summary}</p> */}
      {/* <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul> */}
    </div>
  );
}

export default Movie;
