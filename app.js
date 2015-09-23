var questionList = angular.module('questionList', ['ui.router']);

questionList.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: "",
		templateUrl: "partials/home.html"
	});

	$stateProvider.state('questions', {
		url:"/questions",
		templateUrl: "partials/questions.html",
		controller: "QuestionsCtrl"
	});
	// $stateProvider.state('categories', {
	// 	url:"/questions",
	// 	templateUrl: "partials/questions.html",
	// 	controller: "QuestionsCtrl"
	// });
	//

	$stateProvider.state('questions.answers', {
		url: "/:questionId",
		templateUrl: "partials/questions.answers.html",
		controller: "AnswersCtrl"
	});


});