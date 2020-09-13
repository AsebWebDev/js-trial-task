
'use strict';

const PORT = process.env.PORT || 5000;

const cors = require('cors')
let express = require('express');

let log = require('bunyan').createLogger({
  name: 'api-server',
  streams: [{ level: 'DEBUG', stream: process.stdout }]
});

let apiRouter = require('./lib/router');

express()
  .use(cors({  // Set "Access-Control-Allow-Origin" header
    origin: (origin, cb) => {
      cb(null, origin && ( origin.startsWith('http://localhost:') ) )
  }, optionsSuccessStatus: 200 }))
  .use('/api', (req, res, next) => {
    log.debug(`${req.method} ${req.url}`);
    next();
  })
  .use('/api', apiRouter)
  .listen(process.env.PORT || 5000, () => {
    log.info(`Server is listening on http://localhost:${PORT}`);
  });
