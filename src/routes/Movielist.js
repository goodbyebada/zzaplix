import Movie from "../component/Movie";
import styles from "../component/Movie.module.css";

export default function Moivelist({ list, genreTitle, loading }) {
  return (
    <div className={styles.movie_category}>
      <div className={styles.intro}>
        <h1>{genreTitle}</h1>
        <h3>이런 {genreTitle}은 어때요?</h3>
      </div>

      <div className={styles.movie_list}>
        {loading ? (
          <h2 className={styles.loading_tag}>loading..</h2>
        ) : (
          list.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              mediumCoverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))
        )}
      </div>
    </div>
  );
}
