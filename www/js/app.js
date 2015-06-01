
//Angular module definition
angular.module('App', ['ionic'])

//Ionic is built to work with an third-party routing framework called ui-router,
//which is like the central brain for navigation. Ionic uses ui-router instead
//of Angular's ngRoute because ngRoute does not support some important features
//that the ui-router project supports, such as named views, nested views, and parallel views.
//Ionic is built to work only with ui-router, so attempting to use ngRoute will cause issues.

//Application States are a concept given to us from the ui-router. A state is the current
//representation of the application, which is visually represented in the view, which would contain
//details such as the url associated with the view, the name of the controller for the view, and
//the template attached to the view.

//The states declared include a way to route the user to a particular place in the app,
//which can be done using URLs or using the name of a state. In this app navigation is
//typically implemented using the state name.

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })
    .state('reservation', {
      url: '/reservation',
      controller: 'ReservationController',
      templateUrl: 'views/reservation/reservation.html'
    })
    .state('weather', {
      url: '/weather',
      controller: 'WeatherController',
      templateUrl: 'views/weather/weather.html'
    });

    //The otherwise is important because it is able to catch situations where the application is
    //unable to find the requested route, much like a 404 error page on a website. If the user tries to
    //request a state that doesn’t exist, the otherwise route will be used to display the home view.

    $urlRouterProvider.otherwise('/home')
})

//auto-generated boot run
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
