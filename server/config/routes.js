console.log("Routes Loaded");

var friendController = require('../controllers/friendController.js');
module.exports = function(app){
    // access params with request.params.id
    // access form data with request.body

    app.get("/friends", function(request, response) {
        friendController.index(request, response);
    });

    app.get('/friends/:id', function(request, response){
        // console.log(request.params.id);
        friendController.show(request, response);
    });

    app.post("/friends", function(request, response) {
        friendController.create(request, response);
    });

    app.put('/friends/:id', function(request, response) {
        friendController.update(request, response);
    });

    app.delete('/friends/:id', function(request, response) {
        friendController.delete(request, response);
    });
}


