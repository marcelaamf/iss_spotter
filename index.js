const {fetchMyIP, fetchCoordByIP, fetchISSFlyOverTimes} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! returned IP:", ip);
// });

// fetchCoordByIP("172.219.205.28",(error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates: ', data);
// });

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(exampleCoords,(error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned flyover times: ', data);
});