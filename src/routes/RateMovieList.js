// import { useEffect, useState } from "react";
// import Movie from "../component/Movie";
// import styles from "../component/Movie.module.css";

// function RateMovieList() {
//   const [loading, setLoading] = useState(true);
//   const [movie, setMovies] = useState([]);

//   const setAndGetMovies = async () => {
//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.8&sort_by=year`
//       )
//     ).json();
//     setLoading(false);
//     setMovies(json.data.movies);

//     console.log(movie);
//   };
//   useEffect(() => setAndGetMovies);

//   return (
//     <div className={styles.home}>
//       {loading
//         ? "loading"
//         : movie.map((movie) => (
//             <Movie
//               key={movie.id}
//               id={movie.id}
//               mediumCoverImage={movie.medium_cover_image}
//               title={movie.title}
//               summary={movie.summary}
//               genres={movie.genres}
//             />
//           ))}
//     </div>
//   );
// }
// //props를 이용해주자
// export default RateMovieList;
