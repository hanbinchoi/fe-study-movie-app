const app = require('../index');
const request = require('supertest');

describe('Bare Minimum Requirements - Server', () => {
  test('모든 영화의 정보를 요청받은 경우, 모든 영화의 정보를 응답합니다.', () => {
    return request(app)
      .get('/movies')
      .then((res) => {
        const { body } = res;
        expect(Array.isArray(body)).toEqual(true);
        expect(body.length).toEqual(10);
        return;
      });
  });
  test('모든 영화의 정보를 요청받은 경우, 상태 코드 200을 응답합니다.', () => {
    return request(app)
      .get('/movies')
      .then((res) => {
        const { status } = res;
        expect(status).toEqual(200);
        return;
      });
  });

  test('특정 id에 대한 영화정보를 요청받은 경우, 해당하는 영화의 정보를 응답합니다.', () => {
    return request(app)
      .get('/movies/8462')
      .then((res) => {
        const { body } = res;
        expect(body.id).toEqual(8462);
        expect(body.title).toEqual('Avengers: Infinity War');
        expect(body.summary).toEqual(
          'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.'
        );
        return;
      });
  });
  test('요청받은 영화의 id가 존재하지 않는경우, 상태 코드 404를 응답합니다.', () => {
    return request(app)
      .get('/movies/4639')
      .then((res) => {
        const { status } = res;
        expect(status).toEqual(404);
        return;
      });
  });
  test('요청받은 영화의 id가 존재하는 경우, 상태 코드 200를 응답합니다.', () => {
    return request(app)
      .get('/movies/8462')
      .then((res) => {
        const { status } = res;
        expect(status).toEqual(200);
        return;
      });
  });
});
