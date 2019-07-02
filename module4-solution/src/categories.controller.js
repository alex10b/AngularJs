(function () {

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categoriesItems'];
	function CategoriesController (categoriesItems) {
		var ctrl = this;
		ctrl.categories = categoriesItems;
	}
})();