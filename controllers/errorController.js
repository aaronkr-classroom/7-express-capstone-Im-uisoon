// errorController.js
"use strict";

const httpStatus = require("http-status-codes");
 
/**
 * Listing 11.2 (p. 168)
 * 에러 컨트롤러 추가
 */

exports.logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
}; // @TODO: 에러 처리를 위한 미들웨어 추가

exports.resNotFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.resInternalError = (err, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    // res.send("500 | Server Error"); 
    res.render("error");
}; // @TODO: 500 상태 코드로 모든 에러 처리