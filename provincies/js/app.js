var myApp = angular.module('provinciesApp', ['ngRoute']);
myApp.controller('myCtrl', ['$scope', 'getprovincies', myCtrl]);	
myApp.controller('mySecCtrl', ['$scope', 'getprovincies', '$location','$routeParams', mySecCtrl]);
myApp.service('getprovincies',getprovincies);
myApp.directive('searchResult',searchResult);
myApp.directive('onePage',onePage);