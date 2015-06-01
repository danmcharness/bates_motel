
angular.module('App')

//attach the controller to the app module.
//inject the scope service into the controller
.controller('ReservationController', function ($scope) {

  //attach the reservation model object to the scope
  $scope.reservation = {
    checkin: new Date(),
    checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),   // calculate a 1 week stay
    room: 156,
    rate: 121,
    wifi: 'resortwifi'
  };
});