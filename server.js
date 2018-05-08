const bodyParser = require('body-parser');
const request = require('request');
const Mta = require('mta-gtfs');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/test3', function (req, res) {
  let trainName = req.body.train;
  let direction = req.body.direction;
  let trainNum =  req.body.trainnum;
  let directionBound =  req.body.directionBound;

  var feedID;
  var route;
  switch(trainNum) {
      case 'L':
        feedID = 2;
        route = 'L';
        break;
      case '6':
        feedID = 1;
        route = 6;
        break;
      case '1':
        feedID = 1;
        route = 1;
        break;
      default:
  }
  const mta = new Mta({
    key: 'ee7842a77cf413f79fc1f1628b7770fb', // only needed for mta.schedule() method
    feed_id: feedID                  // optional, default = 1
  });
  var station2 = mta.status('subway').then(function (result) {
});

  var station = mta.stop(trainName).then(function (result) {
    station = (result.stop_name);
  })
if (direction === "N") {
 	 mta.schedule(trainName).then(function (result) {
     var currentTime2 = new Date();
     var currentTime = currentTime2.getTime();
     var i;
     var matchesRoute;
     for (i = 0; i < result.schedule[trainName].N.length; i++) {
       var timeCheck = result.schedule[trainName].N[i].departureTime * 1000;
       if (result.schedule[trainName].N[i].routeId == route && (timeCheck > currentTime)) {
         matchesRoute = result.schedule[trainName].N[i].departureTime;
         break;
       }
     }
    			var nextTrain = matchesRoute;
          if (nextTrain === undefined) {
              res.json('NO ' + trainNum + ' TRAINS FROM ' + station + ' Heading ' + directionBound + ' at this time');
          } else {
          var nextTraintimestamp = nextTrain * 1000;
          var nextTrainString = nextTrain.toString();
          var nextTrainToNumber = (Number(nextTrainString) * 1000);
          var countDownDate = new Date(nextTrainToNumber);
          var time = countDownDate.toLocaleTimeString();
          var combine = time + " is the Next " + directionBound + " Train from " + station + " ";
          res.json(combine);
      }
	});
} else {
  mta.schedule(trainName).then(function (result) {
      var currentTime2 = new Date();
      var currentTime = currentTime2.getTime();
      var i;
      var matchesRoute;
      for (i = 0; i < result.schedule[trainName].S.length; i++) {
        var timeCheck = result.schedule[trainName].S[i].departureTime * 1000;
        if (result.schedule[trainName].S[i].routeId == route && (timeCheck > currentTime)) {
          matchesRoute = result.schedule[trainName].S[i].departureTime;
          break;
        }
      }
         var nextTrain = matchesRoute;
       if (nextTrain === undefined) {
           res.json('NO ' + trainNum + ' TRAINS FROM ' + station + ' Heading ' + directionBound + ' at this time');
       } else {
         var nextTraintimestamp = nextTrain * 1000;
         var nextTrainString = nextTrain.toString();
         var nextTrainToNumber = (Number(nextTrainString) * 1000);
         var countDownDate = new Date(nextTrainToNumber);
         var time = countDownDate.toLocaleTimeString();
         var combine = time + " is the Next " + directionBound + " Train from " + station + " ";
         res.json(combine);
    }
 });
}
});



app.listen(port, () => console.log(`Listening on port ${port}`));
