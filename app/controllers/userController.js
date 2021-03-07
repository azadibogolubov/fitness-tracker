const userController = {
    getUserData (req, res) {
        let response = { firstName: "Test", lastName: "User" } 
        res.send(response)
    }
}

module.exports = userController