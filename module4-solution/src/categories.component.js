(function () {

	angular.module('MenuApp')
		.component('categories', {
			templateUrl: 'src/Templates/categories.template.html',
			bindings: {
				categories: '<'
			}
		})

})();