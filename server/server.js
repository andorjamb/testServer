'use strict';

const http = require('http');
const https = require('https')

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

const server = http.createServer(async (req, res) => {
    try {
        const data = await //request url;
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Cross-Origin-Control-Access': '*'
            })
        res.end(data)
    }
    catch (err) {
        res.statusCode = 404;
        res.end(err.message);
    }
})

server.listen(port, host, () => console.log('server is listening on port', port))

https.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next5days?key=${APIKey}`, response => {
})


//this file will be making the API requests and returning JSON?
/**`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next5days?key=${APIKey}` */