(function() {
  // Do a ping to Kinvey whenever the button is clicked.
  var button = document.getElementById('ping');
  button.addEventListener('click', function() {
    var promise = Kinvey.ping();
    promise.then(function(response) {
      alert('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    }, function(error) {
      alert('Kinvey Ping Failed. Response: ' + error.description);
    });
  });
}());