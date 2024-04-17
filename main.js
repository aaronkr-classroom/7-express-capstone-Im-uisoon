// main.js
// Capstone 2: Express
// "use strict";

// 앱 설정

/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */


/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */


/**
 * Listing 12.6 (p. 178)
 * 각 페이지 및 요청 타입을 위한 라우트 추가
 */


/**
 * Listing 12.12 (p. 184)
 * 에러 처리 라우트 
 */


// 3000번 포트로 리스닝 설정

// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
// 1. 먼저 모든 상수나 변수 정의 (const)

const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

// 2. 앱 설정 (set 함수, 그 다음에 use 함수) 
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.static("public"));

//get route, post route
app.get("/", homeController.getHome);
app.get("/name/:myName", homeController.respondWithName);
app.get("/test", (req, res) => {
    res.sendFile("./public/test.html");
});

// errorController app.use()
app.use(errorController.logErrors);
app.use(errorController.resNotFound);  //404
app.use(errorController.resInternalError); //500 Last.Error

// 3. 마지막 listen 함수
app.listen(app.get("port"), () => {
    console.log(`Server at: http://localhost:${app.get("port")}`);
});