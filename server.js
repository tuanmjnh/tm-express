var express = require('express');
var path = require('path');
// var serveStatic = require('serve-static');
app = express();
// app.use(serveStatic(__dirname + "/spa"));
var port = process.env.PORT || 5000;

app.use(`${process.env.BASE_URL}${process.env.PUBLIC_PATH}`, express.static(process.env.PUBLIC_DIR))

app.get(process.env.BASE_URL, function(req, res, next) {
  // res.render('index', { title: 'Express' })
  res.end('TM-Store Express Server api', { title: 'Express' })
})

const server = app.listen(port) //, '192.168.1.10' // '127.0.0.1'
  .on('listening', () => {
    process.env.HOST = `http://${server.address().address}:${port}`
    console.log(`Web server listening on: ${process.env.HOST}`)
    console.log(`Mode: ${process.env.NODE_ENV}`)
  })
  .on('error', (err) => { console.log(err) })
