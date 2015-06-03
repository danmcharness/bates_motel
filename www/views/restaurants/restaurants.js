
/*
This controller needs to handle the loading of the restaurants data, and also inform the infinite scroll component
when new data is loaded so it can hide itself.
*/

angular.module('App')
.controller('RestaurantsController', function ($scope, $http) {

    //view scroll component variables
    $scope.page = 0;            // track the last page that was requested from the API
    $scope.total = 1;           // total number of pages available from the API
    $scope.restaurants = [];    // used by view's ng-repeat to create card list of restaurants

    // every time the infinite scroll needs to load more data it calls getRestaurants()
    $scope.getRestaurants = function () {
        $scope.page++;
        $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?page=' + $scope.page).success(function (response) {

            angular.forEach(response.restaurants, function (restaurant) {
                $scope.restaurants.push(restaurant);
            });

            $scope.total = response.totalPages;

            /*
              When the infinite scroll is trigged and calls getRestaurants(), it does not know when the
              HTTP request has finished loading. So broadcast an event that will tell the infinite scroll component
              everything is done.
              When this event is called, the infinite scroll will stop showing the loading animation,
              otherwise if we fail to call it the animation will continue to run.
            */

            $scope.$broadcast('scroll.infiniteScrollComplete');
            
        }).error(function (err) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            console.log(err);
        });
    };

    //Load the first page of restaurants from the API on load event
    $scope.getRestaurants();
});