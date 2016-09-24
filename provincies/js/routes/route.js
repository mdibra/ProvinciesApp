myApp.config(function($routeProvider){
	
	$routeProvider.when('/',{
		templateUrl : 'pages/main.html',
		controller  : 'myCtrl'
	})
	
	$routeProvider.when('/single/:onepro', {
		
		templateUrl : 'pages/single.html',
		controller  : 'mySecCtrl'
		
	})
});