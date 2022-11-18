

const express = require('express');
const cors = require('cors');
const http = require('http');

const APIKey = process.env.REACT_APP_WEATHER_API_KEY;
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const axios = require('axios');

const city = 'helsinki';

const expressServer = express();
expressServer.use(cors({
    origin:'*'
}));
//expressServer.use(express.json());

async function getWeather(){
  expressServer.get('https://jsonplaceholder.typicode.com/todos/1', (req, res) => {
res.send({msg: "sending you data!"})}
); 
}



http.createServer(expressServer).listen(port, host, () => console.log('server is listening on port', port));
getWeather(); 
/**
 * for endpoint testing:
 * https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/helsinki/next5days?key=8WZRHWN5ZRVL5C9375RBFJZFJ 
 * expressServer.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/
        rest/services/timeline/${city}/next5days?key=${APIKey}`*/