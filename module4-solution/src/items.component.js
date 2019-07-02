(function () {

	angular.module('MenuApp')
		.component('items', {
			templateUrl: 'src/Templates/items.template.html',
			bindings: {
				items: '<'
			}
		});
})();