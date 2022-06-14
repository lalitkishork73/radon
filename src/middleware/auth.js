const jwt = require("jsonwebtoken");

const auth = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);

    jwt.verify(token, "functionup-radon",
        async function (err, decoded) {
            if (!decoded) {
                return res.send({ status: false, msg: "token is invalid" });
            } else if (err == null) {
                next()
            }
        }
    );
}
module.exports.auth = auth