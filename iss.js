const request = require('request');
const getIP = "https://api.ipify.org?format=json";
const ipDetails = "http://ipwho.is/";
const latLon = "https://iss-flyover.herokuapp.com/json/?"

const fetchMyIP = function(callback) {
  request(getIP, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code${response.statuscode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data);
  });
};

const fetchCoordByIP = function(ip, callback) {
  request(`${ipDetails}${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.success) {
      const msg = `Success status was ${data.success}. Server message says: ${data.msg}}`;
      callback(Error(msg), null);
      return;
    }
    const {latitude, longitude} = data;

    callback(null, {latitude, longitude});
  });
};


const fetchISSFlyOverTimes = function(coords, callback) {
  request(`${latLon}lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code${response.statuscode} when fetching ISS pass times: ${body}`;
      callback(Error(msg), null);
    }
    const data = JSON.parse(body).response;
    callback(null, body);
  });
};






module.exports = {
  fetchMyIP,
  fetchCoordByIP,
  fetchISSFlyOverTimes
};