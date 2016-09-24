function searchResult(){
	return {
		restrict: 'AE',
		scope : {
			getprovincies : "="
		},
		templateUrl:'directive-content/all.html',
		replace: true
	}
	
}
function onePage(){
	
	return {
		restrict: 'AE',
		templateUrl:'directive-content/onepage.html',
		replace: true
		
	}
}