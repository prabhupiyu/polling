// Angular module, defining routes for the app
angular.module('polls', ['pollServices']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/polls', { templateUrl: '/partials/list.ejs', controller: PollListCtrl }).
			when('/poll/:pollId', { templateUrl: '/partials/item.ejs', controller: PollItemCtrl }).
			when('/new', { templateUrl: '/partials/new.ejs', controller: PollNewCtrl }).
			// If invalid route, just redirect to the main list view
			otherwise({ redirectTo: '/polls' });
	}]);