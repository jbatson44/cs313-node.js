var express = require('express')
var app = express();
var url = require('url');
//const path = require('path')
/*const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/
app.get('/getRates', function(request, response) {
	getRates(request, response);
});

function getRates(request, response) {
	
}
app.listen(8888, () => console.log('Example app listening on port 3000!'))
