var express = require('express');
var myPower = require('../src/common/util/math/myPower')
var apiV2HelpRouter = require('../src/help');
var app = express();


app.set('views', './src/views');
app.engine('html', require('ejs').renderFile);

// routes
// set root route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello Test 2' },
        name: 'Jose',
        lastname: 'Velez'
    };
    res.render('./pages/home.ejs', data2template);
});

// set records route
app.get('/cube', function(req, res) {
    var inpNumber = 3;
    var data2template = {
        head: { title: 'Cube page' },
        inpNumber: inpNumber,
        resultNumber: myPower.toCube(inpNumber)
    };
    res.render('pages/cube.ejs', data2template);
});

app.get('/square', function(req, res) {
    var inpNumber = 2;
    var data2template = {
        head: { title: 'Square page' },
        inpNumber: inpNumber,
        resultNumber: myPower.toSquare(inpNumber)
    };
    res.render('pages/square.ejs', data2template);
});


app.get('/about', function(req, res) {
    res.status(200).render('pages/about.html');
});

var apiV1HelpRouter = express.Router();
apiV1HelpRouter.route('/help')
    .get((request, response) => { response.send('<h3>/api/v1/help got GET - text/html directly returned from server.js</h3>'); })
    .post((request, response) => { response.send('<h3>/api/v1/help got POST - text/html directly returned from server.js</h3>'); })
    .put((request, response) => { response.send('<h3>/api/v1/help got PUT - text/html directly returned from server.js</h3>'); });
app.use('/api/v1', apiV1HelpRouter);

// curl -i "http://localhost:8014/api/v1/help"

app.use('/api/v2', apiV2HelpRouter);

// set everything else to error page
app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});