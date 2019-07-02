(function () {

	angular.module('MenuApp')
	.controller('itemsController', itemsController);

	itemsController.$inject = ['itemCategory'];
	function itemsController (itemCategory) {
		var ctrl = this;
		ctrl.items = itemCategory.menu_items;
		
	}
	
})();