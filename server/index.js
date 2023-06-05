const express = require("express");
const cors = require("cors");

// HINT: 영화 데이터는 다음 movies 변수를 이용하세요
const { movies } = require("./data.json");
const app = express();
// ✕ 모든 영화의 정보를 요청받은 경우, 모든 영화의 정보를 응답합니다. (12 ms)
// ✓ 모든 영화의 정보를 요청받은 경우, 상태 코드 200을 응답합니다. (3 ms)
// ✕ 특정 id에 대한 영화정보를 요청받은 경우, 해당하는 영화의 정보를 응답합니다. (2 ms)
// ✕ 요청받은 영화의 id가 존재하지 않는경우, 상태 코드 404를 응답합니다. (1 ms)
// ✓ 요청받은 영화의 id가 존재하는 경우, 상태 코드 200를 응답합니다. (1 ms)

app.use(cors());
app.use(express.json());

app.get("/movies", (req, res) => {
  // TODO:
  return res.send(movies);
});

app.get("/movies/:id", (req, res) => {
  // TODO:
  const { id } = req.params;
  const movie = movies.find((ele) => ele.id === Number(id));
  if (movie) return res.send(movie);
  else return res.status(404).send("not found");
});

// 테스트를 위한 코드입니다. 건드리지 마세요.
if (process.env.NODE_ENV !== "test") {
  app.listen(3001, () => {
    console.log("server listen on 3001");
  });
}

module.exports = app;
