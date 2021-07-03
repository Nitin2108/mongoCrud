function Authenticate(req, res, next) {
  const auth = { login: "nitin", password: "goswami" };
  let b = req.headers.authorization.split(" ")[1];
  const [login, password] = Buffer.from(b, "base64").toString().split(":");
  if (login && password && login === auth.login && password === auth.password)
    return next();

  res.status(401).send("you dont have permission to access this resource");
}

module.exports = { Authenticate };
