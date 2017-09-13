angular.module('myApp').controller('newsController', ['$scope', '$http', function($scope, $http) {
	//获取外部链接
	$http({
		method: 'GET',
		url: 'services/externalLinks.json'
	}).then(function(response) {
		$scope.links = response.data;
	});
}]);