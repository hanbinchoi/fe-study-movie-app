### fe-study-movie-app

### 의존성 모듈 설치

- 클라이언트 디렉터리(`./client`)와 서버 디렉터리(`./server`)에서 `npm install`을 이용해 클라이언트 및 서버의 의존성 모듈(dependencies)를 설치합니다.

### 애플리케이션 실행

- 클라이언트 (`./client`)
  - `cd client` 명령어를 입력하여 클라이언트 앱 디렉터리로 이동합니다.
  - `npm start` npm script를 이용해 클라이언트 앱을 실행합니다.

- 서버 (`./server`)
  - `cd server` 명령어를 입력하여 서버 앱 디렉터리로 이동합니다.
  - `index.js` 파일을 통해 서버 앱을 실행합니다.
  - 필요에 따라 `package.json`를 수정하여 npm script를 추가하거나 의존성 모듈을 설치할 수 있습니다.
    - 서버 실행 스크립트 `npm run start`를 직접 작성해 보세요.
    - 필요에 따라 nodemon 등의 유틸리티를 이용할 수 있습니다.

### 애플리케이션 테스트

- 클라이언트 디렉터리(`./client`)와 서버 디렉터리(`./server`)에서 테스트를 진행합니다.
  - 클라이언트 테스트: 클라이언트 디렉터리 `./client`에서 `npm test` 실행
  - 서버 테스트: 클라이언트 디렉터리 `./server`에서 `npm test` 실행

## 과제 설명

### Code States Movie Top 10 Client

- Code States Movie Top 10 클라이언트 코드가 React로 이미 작성되어 있습니다.
- 하드코딩된 데이터가 동적으로 렌더링 될 수 있도록 코드를 작성합니다.
  - movieDataApi.js를 이용하여 데이터를 직접 가져옵니다.

### Bare Minimum Requirements - client

Bare Minimum Requirements - client 테스트를 모두 통과하세요.

- Component unit test
  - mockMovie.js를 이용하여 샘플 데이터를 가져옵니다.
  - 각 컴포넌트의 기능을 테스트합니다.
    - MovieRankListEntry, MovieRankList, CurrentMovie
- App feature test
  - 컴포넌트 간 상호작용을 통한 기능 구현을 테스트합니다.
    - 영화 목록 클릭 시 현재 영화정보 화면 업데이트 기능을 테스트합니다.
    - movieDataApi.js를 이용하여 데이터를 직접 가져옵니다.


### Code States Movie Top 10 Server

- 클라이언트 앱에서 이용한 영화 정보 조회용 서버를 직접 구현합니다.
- 다음 REST API를 구현해야 합니다.

| 메소드    | endpoint          | 설명                            |
| ------- | ----------------- | ------------------------------ |
| GET     | `/movies`         | 영화 목록을 전부 조회               |
| GET     | `/movies/{id}`    | id가 일치하는 한 개의 영화 데이터만 조회 |

### Bare Minimum Requirements - server

Bare Minimum Requirements - server 테스트를 모두 통과하세요.

- `/movies` 앤드포인트를 완성하세요.
- `/movies/{id}` 앤드포인트를 완성하세요.

실제 응답의 모양은 `data.json` 파일에 예시로 제공됩니다. 참고하여 API를 작성하세요.
서버의 요청을 클라이언트에서 처리할 수 있도록 만드는 것도 잊지 마세요.

### tips for server code

- `index.js` 파일을 통해 서버를 실행시킬 수 있습니다.
  - 서버가 실행되면, Postman으로 응답을 잘 받아오는지 테스트할 수 있습니다.
- 필요에 따라 `package.json` 파일에 scripts를 설정할 수 있습니다.
  - 서버 실행 스크립트를 직접 작성해 보세요.
- 필요에 따라 nodemon 등의 유틸리티를 설치하여 이용할 수 있습니다.