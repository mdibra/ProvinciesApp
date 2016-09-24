function myCtrl($scope, getprovincies) {
	
	getprovincies.bringData().then(function(response){
		
		$scope.getprovincies = response.data;
		
		console.log(response.data);
		
	},function(error){console.log('error')});

}