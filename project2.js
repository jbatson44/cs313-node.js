var express = require('express');
var app = express();
var url = require('url');
var pg = require('pg');
const { Pool } = require('pg')
const conString = 'postgres://pihjhrmbgekqsr:7057cd32622beac4f4a485479da8461cbb9d614630babe98b343a1bb4a2c5a3f@ec2-184-73-240-228.compute-1.amazonaws.com:5432/dfjs31n9un2b8q';
const pool = new pg.Pool({conString: conString});
app.set('port', (process.env.PORT || 5001));

// const client = new Client({
 // user: 'pihjhrmbgekqsr',
 // host: 'localhost',
 // database: 'dfjs31n9un2b8q',
 // password: '7057cd32622beac4f4a485479da8461cbb9d614630babe98b343a1bb4a2c5a3f',
 // port: 5432,
// })
// client.connect()



app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/getUser', function(request, response) {
	getPerson(request, response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function getPerson(request, response) {
	var requestUrl = url.parse(request.url, true);
	//var id = request.query.id;
	// pool.connect(conString, function(err, client, done) {
    // if (err) {
		// return console.error('error fetching client from pool', err);
	// }
	// console.log("connected to database");
	// client.query('SELECT * FROM person', function(err, result) {
		// done();
		// if (err) {
			// return console.error('error running query', err);
		// }
     // res.send(result);
   // })
	// })
	pool.query('SELECT * FROM person', (err, res) => {
	console.log(err, res)
	//client.end()
	})
	

}

