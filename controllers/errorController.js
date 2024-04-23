"use strict";

const httpStatus = require("http-status-codes");
 
exports.logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};

exports.resNotFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render('error', {
        errorCode: errorCode
    });
};

exports.resInternalError = (err, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.render('error', { errorCode: errorCode });
};
