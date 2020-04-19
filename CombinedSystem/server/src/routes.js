const AuthController = require('./controllers/AuthController')
const HopController = require('./controllers/HopController')
const BidController = require('./controllers/BidController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
    app.post('/register', AuthControllerPolicy.register, AuthController.register) 

    app.post('/login', AuthController.login) 

    app.post('/addhop', HopController.addhop) 

    app.get('/retrievehops', HopController.retrievehops) 
    app.get('/retrievehop/:id', HopController.retrievehop) 

    app.post('/addbid', BidController.addbid)
    app.get('/retrievebids', BidController.retrievebids)  
}