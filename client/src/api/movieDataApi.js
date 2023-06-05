import fetch from "node-fetch";

export function getMovies() {
  // TODO: fetch를 이용해 endpoint로부터 영화 정보를 받아오세요
  let endpoint = "http://localhost:3001/movies";

  return fetch(endpoint).then((res) => res.json());
}
