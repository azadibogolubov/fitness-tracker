let express = require('express')
let router  = express.Router()
let userController = require('../controllers/userController')

router.get('/userData', userController.getUserData)
router.post('/userData', userController.postUserData)

module.exports = router