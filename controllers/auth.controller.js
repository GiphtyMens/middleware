const login = (req, res) => {
    res.send("Login Successful");
}

const register = (req, res) => {
    res.send("Registration Successful");
}

module.exports = {
    register,
    login,
};