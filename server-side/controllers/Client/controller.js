const login = require("./auth/login");
const register = require("./auth/register");
const verifyEmail = require("./auth/verifyEmail")
const verifyCfID = require("./auth/verifyCfID")
const generateCfVerificationRequestToken = require("./auth/genrateCfVerificaitonToken")
const checkSession = require("./auth/checkSession")
const userFeedback = require("./userFeedBack")

module.exports = {
    login,
    register,
    verifyEmail,
    verifyCfID,
    generateCfVerificationRequestToken,
    checkSession,
    userFeedback
};