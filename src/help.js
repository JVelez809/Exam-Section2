var express = require('express');

var helpRouter = express.Router();
helpRouter.route('/help')
    .get((request, response) => { response.send('<h3>/api/v2/help got GET - text/html directly returned from server.js</h3>'); })
    .post((request, response) => { response.send('<h3>/api/v2/help got POST - text/html directly returned from server.js</h3>'); })
    .put((request, response) => { response.send('<h3>/api/v2/help got PUT - text/html directly returned from server.js</h3>'); });

module.exports = helpRouter;