"use strict";
var app = angular.module('myApp', ['ngRoute']);
//这是因为Angular 1.6 版本更新后对路由做的处理，要加上$locationProvider.hashPrefix('');这样才可以和以前版本一样正常使用
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/news', {
			templateUrl: '../blog/views/news.html'
		})
		.when('/css', {
			templateUrl: '../blog/views/html-css/css.html'
		})
		.when('/jquery', {
			templateUrl: '../blog/views/jquery/jquery.html'
		})
		.when('/ng01', {
			templateUrl: '../blog/views/angular/ng1.html'
		})
		.otherwise({
			redirectTo: '/news'
		});
}]);