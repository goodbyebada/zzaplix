import { element } from "prop-types";
import { useEffect, useState } from "react";
import Movie from "../component/Movie";
import styles from "../component/Movie.module.css";
import Moivelist from "./Movielist";

function Home() {
  const [loading, setLoading] = useState(true);

  const [list0, setList0] = useState([]);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list4, setList4] = useState([]);
  const [list5, setList5] = useState([]);

  const movie_genres = [
    "Romance",
    "Action",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Horror",
  ];

  // const url = `https://yts.mx/api/v2/list_movies.json?&minimum_rating=8.0&sort_by=year&genre=${movie_genres[0]}`;

  function url(indexNum) {
    return `https://yts.mx/api/v2/list_movies.json?&minimum_rating=8.0&sort_by=year&genre=${movie_genres[indexNum]}`;
  }

  const getMovies = async () => {
    const json = await (await fetch(url(0))).json();
    setList0(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    async function setNewMovie() {
      const json = await (await fetch(url(1))).json();
      setList1(json.data.movies);
      setLoading(false);
    }
    setNewMovie();
    //cleanUp 함수
  }, []);

  useEffect(() => {
    async function setNewMovie() {
      const json = await (await fetch(url(2))).json();
      setList2(json.data.movies);
      setLoading(false);
    }
    setNewMovie();
    //cleanUp 함수
  }, []);

  useEffect(() => {
    async function setNewMovie() {
      const json = await (await fetch(url(3))).json();
      setList3(json.data.movies);
      setLoading(false);
    }
    setNewMovie();
    //cleanUp 함수
  }, []);

  useEffect(() => {
    async function setNewMovie() {
      const json = await (await fetch(url(4))).json();
      setList4(json.data.movies);
      setLoading(false);
    }
    setNewMovie();
    //cleanUp 함수
  }, []);

  useEffect(() => {
    async function setNewMovie() {
      const json = await (await fetch(url(5))).json();
      setList5(json.data.movies);
      setLoading(false);
    }
    setNewMovie();
    //cleanUp 함수
  }, []);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.home}>
      <h2 className={styles.title}>ZZAPFLIX</h2>
      <div className={styles.movie_category_list}>
        <Moivelist
          list={list0}
          genreTitle={movie_genres[0]}
          loading={loading}
        />
        <Moivelist
          list={list1}
          genreTitle={movie_genres[1]}
          loading={loading}
        />
        <Moivelist
          list={list2}
          genreTitle={movie_genres[2]}
          loading={loading}
        />
        <Moivelist
          list={list3}
          genreTitle={movie_genres[3]}
          loading={loading}
        />
        <Moivelist
          list={list4}
          genreTitle={movie_genres[4]}
          loading={loading}
        />
        <Moivelist
          list={list5}
          genreTitle={movie_genres[5]}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default Home;
