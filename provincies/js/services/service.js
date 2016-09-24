function getprovincies($http) {
	var url = 'http://api-nghyf.rhcloud.com/provinces';
	getprovincies = this;
	getprovincies.bringData = function () {
		
		return $http.get(url)
	}
}