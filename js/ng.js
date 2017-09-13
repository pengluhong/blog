"use strict";
var app = angular.module('myApp', ['ui.router']);
app.config(['$urlMatcherFactoryProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	$locationProvider.hashPrefix('');
	//$httpProvider.defaults.withCredentials = true;
	$urlRouterProvider.otherwise("/");
	//$urlMatcherFactoryProvider.caseInsensitive(true);
	var route = [{
			name: 'Main',
			url: '/',
			abstract: true,
			templateUrl: "layouts/main.html"
		},
		{
			name: 'Main.news',
			url: '',
			templateUrl: "views/news.html",
			controller: 'newsController'
		},
		{
			name: 'Main.css',
			url: 'css',
			templateUrl: "views/html-css/css.html"
		},
		{
			name: 'Main.jquery',
			url: 'jquery',
			templateUrl: "views/jquery/jquery.html"
		},
		{
			name: 'Main.ng01',
			url: 'ng01',
			templateUrl: "views/angular/ng01.html"
		},
		{
			name: 'Main.ng02',
			url: 'ng02',
			templateUrl: "views/angular/ng02.html"
		},
		{
			name: 'Main.js',
			url: 'js',
			templateUrl: "views/javascript/js.html"
		},
		{
			name: 'Main.php01',
			url: 'php01',
			templateUrl: "views/php/php01.html"
		}
	];
	angular.forEach(route, function(obj) {
		$stateProvider.state(obj);
	});
	//$locationProvider.html5Mode(true);
}]);

app.controller('myController', ['$scope', '$state', '$http', function($scope, $state, $http) {
	//初始化
	$scope.initFn = function() {
		//获取导航栏数据
		$http({
			method: 'GET',
			url: 'services/nav.json'
		}).then(function(response) {
			$scope.obj = response.data;
		});

		//页面返回顶部
		(function() {
			$(window).scroll(function() {
				if($(document).scrollTop() > 0) {
					$('.top-arrow').stop().fadeIn();
				} else {
					$('.top-arrow').stop().fadeOut();
				}
			});
			$('.top-arrow').click(function() {
				$('body,html').animate({
					scrollTop: 0
				});
			});
		})();
	} //initFn() end;
	$scope.lianjie = function(names) {
		if(names == $state.current.name) {
			return "current";
		} else {
			return "";
		}
	};
}]);