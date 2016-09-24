function mySecCtrl($scope, getprovincies, $location, $routeParams) {
	getprovincies.bringData().then(function(response){
		
		$scope.getprovincies = response.data ;
		$scope.single = $routeParams.onepro; 	
	});
}