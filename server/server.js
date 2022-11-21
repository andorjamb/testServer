
//import { sendEmailVerification } from 'firebase/auth';
//import { db } from './firebaseconfig';
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const APIKey = process.env.REACT_APP_WEATHER_API_KEY;
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const city = 'helsinki';
const expressServer = express();
expressServer.use(cors({
  origin: '*'
}));
//expressServer.use(express.json());
let result;

expressServer.get('/help', (req, res) => {
  res = axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/helsinki/next5days?key=8WZRHWN5ZRVL5C9375RBFJZFJ', { responseType: "json" })
    .then((response) => {
      result = response.data;
      console.log(result);

    }

    );
  res.send();
}
);


expressServer.listen(port, host, () => console.log('server is listening on port', port));

/**
 * for endpoint testing:
 * https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/helsinki/next5days?key=8WZRHWN5ZRVL5C9375RBFJZFJ 
 * expressServer.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/
        rest/services/timeline/${city}/next5days?key=${APIKey}`
        'https://jsonplaceholder.typicode.com/todos/1'*/