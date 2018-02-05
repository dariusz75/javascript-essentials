var myApp = angular
						.module('myApp', ['ui.router', 'ngAnimate'])
						.config(function ($stateProvider, $urlRouterProvider) {
							$stateProvider
								.state('home', {
									url: '/home',
									templateUrl: 'templates/home.html',
									controller: 'homeController',
									//abstract: true
								})
								.state('page-1', {
									url: '/page-1',
									templateUrl: 'templates/side-nav-templates/angular-side-nav.html',
									//controller: 'homeController',
									//abstract: true
								})
								.state('home.nested', {
									url: '/nested',
									templateUrl: 'templates/nested.html',
									controller: 'nestedController'
								})
								.state('setup', {
									url: '/setup',
									templateUrl: 'templates/setup.html',
									controller: 'setupController'
								})
								.state('module', {
									url: '/module',
									templateUrl: 'templates/module.html',
									controller: 'moduleController'
								})
								.state('controller', {
									url: '/controller',
									templateUrl: 'templates/controller.html',
									controller: 'controllerController'
								})
								.state('src-directive', {
									url: '/src-directive',
									templateUrl: 'templates/src-directive.html',
									controller: 'srcDirectiveController'
								})
								.state('two-way-databinding', {
									url: '/two-way-databinding',
									templateUrl: 'templates/two-way-databinding.html'
								})
								.state('ng-repeat-directive', {
									url: '/ng-repeat-directive',
									templateUrl: 'templates/ng-repeat-directive.html',
									controller: 'ngRepeatController'
								})
								.state('events-handling', {
									url: '/events-handling',
									templateUrl: 'templates/events-handling.html',
									controller: 'eventsHandlingController'
								})
								.state('filters', {
									url: '/filters',
									templateUrl: 'templates/filters.html',
									controller: 'filtersController'
								})
								.state('data-sorting', {
									url: '/data-sorting',
									templateUrl: 'templates/data-sorting.html',
									controller: 'dataSortingController'
								})
								.state('data-sorting-by-search-filter', {
									url: '/data-sorting-by-search-filter',
									templateUrl: 'templates/data-sorting-by-search-filter.html',
									controller: 'dataSortingController'
								})
								.state('data-sorting-by-multiple-properties', {
									url: '/data-sorting-by-multiple-properties',
									templateUrl: 'templates/data-sorting-by-multiple-properties.html',
									controller: 'filtersController'
								})
								.state('ng-hide-and-ng-show-directives', {
									url: '/ng-hide-and-ng-show-directives',
									templateUrl: 'templates/ng-hide-and-ng-show-directives.html',
									controller: 'filtersController'
								})
								.state('ng-include-directive', {
									url: '/ng-include-directive',
									templateUrl: 'templates/ng-include-directive.html',
									controller: 'filtersController'
								})
								.state('services', {
									url: '/services',
									templateUrl: 'templates/services.html',
									controller: 'servicesController'
								})
								.state('services-separated', {
									url: '/services-separated',
									templateUrl: 'templates/services-separated.html',
									controller: 'servicesSeparatedContorller'
								})
								.state('anchorscroll-service', {
									url: '/anchorscroll-service',
									templateUrl: 'templates/anchorscroll-service.html'
								})
								.state('routing', {
									url: '/routing',
									templateUrl: 'templates/routing.html'
								})
								.state('nested-routing', {
									url: '/nested-routing',
									templateUrl: 'templates/nested-routing.html'
								})

								//$urlRouterProvider.otherwise('/home');
						})
						.controller('homeController', function($scope) {
							$scope.message = "Home Page";
						})
						.controller('nestedController', function($scope) {
							$scope.message = "Message from Nested Controller";
						})
						.controller('setupController', function($scope) {
							$scope.message = "Message from Setup Controller";
						})
						.controller('moduleController', function($scope) {
							$scope.message = "Message from Module Controller";
						})
						.controller('controllerController', function($scope) {
							$scope.message = "Message from Controller Controller";
						})
						.controller('srcDirectiveController', function($scope) {
							var country = {
										flag: './img/GB.png'
									};

							$scope.country = country;
						})
						.controller('ngRepeatController', function($scope) {
							var employees = [ 
																														{ firstName: 'Ben', lastName: 'Hastings', gender: 'Male',salary: 5500 },
																														{ firstName: 'John', lastName: 'Smith', gender: 'Male', salary: 6500 },
																														{ firstName: 'Ana', lastName: 'Tylor', gender: 'Female', salary: 7500 },
																														{ firstName: 'Josh', lastName: 'Maker', gender: 'Male', salary: 8500 },
																														{ firstName: 'Sofia', lastName: 'Cool', gender: 'Female', salary: 9500 },
																													];

																					var countries = [
																														{
																															name: 'UK',
																															cities: [
																																				{name: 'London'},
																																				{name: 'Bristol'},
																																				{name: 'Leeds'},
																																			]
																														},
																														{
																															name: 'Poland',
																															cities: [
																																				{name: 'Warsaw'},
																																				{name: 'Krakow'},
																																				{name: 'Poznan'},
																																			]
																														},
																														{
																															name: 'Germany',
																															cities: [
																																				{name: 'Berlin'},
																																				{name: 'Hamburgh'},
																																				{name: 'Frankfurt'},
																																			]
																														},
																													];



																					$scope.employees = employees;
																					$scope.countries = countries;
						})
						.controller('eventsHandlingController', function($scope) {
							var technologies = [
																						{
																							name: 'HTML5', 
																							likes: 0, 
																							dislikes: 0
																						},
																						{
																							name: 'CSS3', 
																							likes: 0, 
																							dislikes: 0
																						},
																						{
																							name: 'JavaScript', 
																							likes: 0, 
																							dislikes: 0
																						},
																						{
																							name: 'PHP', 
																							likes: 0, 
																							dislikes: 0
																						},

																					];

																					$scope.technologies = technologies;

																					$scope.incrementLikes = function (technology) {
																						technology.likes++
																					};

																					$scope.incrementDislikes = function (technology) {
																						technology.dislikes++
																					};
						})
						.controller('filtersController', function($scope) {
							var employees = [
													{
														name: 'Ben',
														dateOfBirth: new Date('November 23, 1999'), 
														gender: 'Male',
														salary: 22222.959696,
														city: 'London'
													},
													{
														name: 'Claire',
														dateOfBirth: new Date('November 13, 1989'), 
														gender: 'Female',
														salary: 33333.76777,
														city: 'Warsaw'
													},
													{
														name: 'Josh',
														dateOfBirth: new Date('November 23, 1993'), 
														gender: 'Male',
														salary: 44444.6666,
														city: 'London'
													},
													{
														name: 'Benny',
														dateOfBirth: new Date('November 13, 2000'), 
														gender: 'Male',
														salary: 55555.099,
														city: 'Warsaw'
													},
													{
														name: 'John',
														dateOfBirth: new Date('November 23, 1999'), 
														gender: 'Male',
														salary: 66662.959696,
														city: 'Berlin'
													},
													{
														name: 'Andrew',
														dateOfBirth: new Date('November 13, 1989'), 
														gender: 'Male',
														salary: 77777.76777,
														city: 'London',
														city: 'Berlin'
													},
													{
														name: 'Josh',
														dateOfBirth: new Date('November 23, 1993'), 
														gender: 'Male',
														salary: 88888.6666,
														city: 'Barcelona'
													},
													{
														name: 'Betty',
														dateOfBirth: new Date('November 13, 2000'), 
														gender: 'Female',
														salary: 99999.099,
														city: 'Berlin'
													},
												];

										$scope.employees = employees;
										$scope.rowLimit = 2;
										$scope.employeeTable = 'components/employee-table.html';
										$scope.employeeList = '../components/employee-list.html';
										$scope.defaultDisplay = '../components/employee-table.html';
						})
						.controller('dataSortingController', function($scope) {
							var employees = [
																{
																	name: 'Ben',
																	dateOfBirth: new Date('November 23, 1999'), 
																	gender: 'Male',
																	salary: 22222.959696,
																},
																{
																	name: 'Bill',
																	dateOfBirth: new Date('September 13, 1989'), 
																	gender: 'Male',
																	salary: 33333.76777,
																},
																{
																	name: 'Josh',
																	dateOfBirth: new Date('June 23, 1993'), 
																	gender: 'Male',
																	salary: 44444.6666,
																},
																{
																	name: 'Andrew',
																	dateOfBirth: new Date('January 13, 2000'), 
																	gender: 'Male',
																	salary: 55555.099,
																},
																{
																	name: 'John',
																	dateOfBirth: new Date('March 13, 2000'), 
																	gender: 'Male',
																	salary: 66666.999,
																},
															];

										$scope.employees = employees;
										$scope.sortColumn = 'name';

						})
						.controller('sidebarController', function($scope) {
							var chapters = [
															{chapterName: 'Module', url: 'module'},
															{chapterName: 'Controller', url: 'controller'},
															{chapterName: 'src directive', url: 'src-directive'},
															{chapterName: 'Data binding', url: 'two-way-databinding'},
															{chapterName: 'ng-repeat-directive', url: 'ng-repeat-directive'},
															{chapterName: 'Events Handling', url: 'events-handling'},
															{chapterName: 'Filters', url: 'filters'},
															{chapterName: 'Data Sorting', url: 'data-sorting'},
															{chapterName: 'Data sorting by search filter', url: 'data-sorting-by-search-filter'},
															{chapterName: 'Data sorting by multiple properties', url: 'data-sorting-by-multiple-properties'},
															{chapterName: 'ng-hide and ng-show directives', url: 'ng-hide-and-ng-show-directives'},
															{chapterName: 'ng-include-directive', url: 'ng-include-directive'},
															{chapterName: 'Services', url: 'services'},
															{chapterName: 'Services separated', url: 'services-separated'},
															{chapterName: 'Anchorscroll service', url: 'anchorscroll-service'},
															{chapterName: 'Routing', url: 'routing'},
															{chapterName: 'Nested routing', url: 'nested-routing'}
															];

							$scope.chapters = chapters;
						})
						.controller('servicesController', function($scope) {
							
							$scope.transformString = function (input) {
																																		
																																		var output = '';

																																		if (!input) {
																																			return input;
																																		} 

																																		for (var i = 0; i < input.length; i++) {
																																			if (i > 0 && input[i] === input[i].toUpperCase()) {
																																				output = output + ' ';
																																			} 
																																				output = output + input[i];															
																																		}
																																			
																																		$scope.output = output;
																																		
																									}
								
						})
						.controller('servicesSeparatedContorller', function ($scope, stringService) {
												
												$scope.putSpaces = function (input) {
														
													$scope.output = stringService.processString(input);

												}
											})
						.directive('ngPrism', function() {
					    return {
					        restrict: 'A',
					        link: function(scope, element, attrs) {
					            Prism.highlightElement(element.find('code')[0]);
					        }
					    }
						})

