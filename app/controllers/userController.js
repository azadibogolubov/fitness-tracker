
const userController = {
    getUserData (req, res) {
        let q = req.query
        let output = new Array()
        if (q.firstName !== undefined && q.lastName !== undefined){
            let response = { id: 1 , firstName: q.firstName, lastName: q.lastName} 
            res.send(response)    
        } 
        else {
            if (q.firstName == undefined) {
                output.push('firstName is required query params.')
            }
            if (q.lastName == undefined) {
                output.push('lastName is required query params.')
            }
        }
        if (output.length > 0) {
            res.send({errors: output})
        }
    },

    postUserData (req, res) {
        res.json(req.body)
    }
    
}

module.exports = userController
