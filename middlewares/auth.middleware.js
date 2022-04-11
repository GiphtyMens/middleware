const authRequire = (req, res, next) => {
    const body = req.body;

    if (body.username !== "Giphty" || body.password !== "secret") {
        return res.send("Invalid Credential");
    };
    next();
};

module.exports = {
    authRequire,
}
