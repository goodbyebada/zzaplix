import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import styles from "../component/Movie.module.css";

function Details() {
  const [flag, toUpdate] = useState(false);
  const [movie, setMovie] = useState();
  const { id } = useParams();

  //useParams -> url 변수 반환한다
  //정확히는 props 반환 value 값 알고 싶다면 {x} 사용해야함
  //그럼 id 왜 쓰는가?
  //https://yts.mx/api/v2/movie_details.json?movie_id= 에 활용하려고! -> API 활용 !

  /*  const apiKey = "AIzaSyBsUlzD25HkoZHs8O9Q70QYDTLfkhzgMNs";

  const url = `https://www.googleapis.com/youtube/v3/search?order=viewCount&part=snippet
  &regionCode=KR&maxResults=100&q=${searchTitle}&type=video&key=${apiKey}`; */

  useEffect(() => {
    async function getMovie() {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      setMovie(json.data.movie);
      // movie.data.title로 하면 안됨 내가 보기엔 get movie 끝나고 되는듯? 클린업 함수랑 관련있을것 같은데 와이라노

      console.log(json.data.movie);
      toUpdate(true);
    }
    getMovie();
    //cleanUp 함수
  }, [id]);

  function showContent() {
    return (
      <div>
        <div
          className={style.background}
          style={{ backgroundImage: `url(${movie.background_image})` }}
        ></div>
        <div className={style.content_container}>
          <img className={style.thumnail} src={movie.medium_cover_image}></img>
          <div className={style.colum}>
            <h1 className={style.h1}>{movie.title_long}</h1>
            <p>{`Genres: ${movie.genres}`}</p>
            <p>{`Rate: ${movie.rating}`}</p>
            <p>{`running time: ${movie.runtime}`}</p>

            <p className={style.intro}>
              {movie.description_intro === ""
                ? `There is no description intro`
                : movie.description_intro}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {flag ? showContent() : <h2 className={style.loading_tag}>loading..</h2>}
    </div>
  );
}

export default Details;
