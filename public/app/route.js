


app.config(['$locationProvider','$routeProvider','$stateProvider','$urlRouterProvider', function ($locationProvider,$routeProvider,$stateProvider,$urlRouterProvider) {


 
   $locationProvider.hashPrefix('');
  

$stateProvider.state('mainControl', {
  url:'/',
  templateUrl: 'views/main.html',
  controller:'mainCtrl'
}).state('profileControl', {
  url:'/profile',
  templateUrl: 'views/profile.html',
  controller:'profileCtrl'
}).state('watchControl', {
  url:'/watch',
  templateUrl: 'views/watch.html',
  controller:'watchCtrl'
});

$urlRouterProvider.otherwise('/');
  
}]);