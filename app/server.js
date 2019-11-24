const http = require('http');
const fs = require('fs');

const router = require('./router');

let appPage = fs.readFileSync('app.html', 'utf8');

http.createServer(function (request, response) {
    let url = request.url;
    if (url !== '/favicon.ico') {
        let page = router.response(appPage, url);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(page);
    }
}).listen(8080);

require('./app');


