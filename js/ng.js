"use strict";
var app = angular.module('myApp', ['ui.router']);
app.config(['$urlMatcherFactoryProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
		$httpProvider.defaults.withCredentials = true;
		$urlRouterProvider.otherwise("/");
		$urlMatcherFactoryProvider.caseInsensitive(true);
		var route = [{
				name: 'Main',
				url: '/',
				abstract: true,
				templateUrl: "A-Study/app/blog/layouts/main.html"
			},
			{
				name: 'Main.news',
				url: '',
				templateUrl: "A-Study/app/blog/views/news.html"
			},
			{
				name: 'Main.css',
				url: 'css',
				templateUrl: "A-Study/app/blog/views/html-css/css.html"
			},
			{
				name: 'Main.jquery',
				url: 'jquery',
				templateUrl: "A-Study/app/blog/views/jquery/jquery.html"
			},
			{
				name: 'Main.ng1',
				url: 'ng01',
				templateUrl: "A-Study/app/blog/views/angular/ng1.html"
			}
		];
		angular.forEach(route, function(obj) {
			$stateProvider.state(obj);
		});
		$locationProvider.html5Mode(true);
	}]);

app.controller('myController', ['$scope', '$state', function($scope, $state) {
	$scope.Cut = function(){
		console.log($state.current);
	}
}]);