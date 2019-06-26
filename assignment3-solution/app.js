(function () {

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

// This is the directive which is used to display the content on the screen
function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItem.html',
    scope: {
      found: '<',
      onRemove: '&',
      empty: '<',
      serchTerm: '<'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";
  menu.empty = '';

  menu.searchItem = function () {

    if (menu.searchTerm !== '') {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      promise.then(function(result) {
        menu.found = result;
        menu.empty = MenuSearchService.isEmpty();
      })
      .catch(function(error) {
      console.log(error);
      });
    }
    else {
      menu.empty = MenuSearchService.isEmpty();
      console.log(menu.empty);
    };
  };
menu.itemNotFound = function(){
    if(menu.empty==='Nothing Found'){
      return true;
    }
    else{
      return false;
    }
  };

  menu.remove = function (itemIndex) {
    return MenuSearchService.removeItem(itemIndex);
  }

}
MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http, searchTerm) {
  var service = this;
  var foundItems = [];
  var emptyMessage = [];
  service.getMatchedMenuItems = function (searchTerm) {
    
    searchTerm = searchTerm.trim().toLowerCase();

    return $http ({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    })
    .then(function(response) {

      for(var i=0; i<response.data.menu_items.length; i++) {
      
        if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(response.data.menu_items[i]);
          emptyMessage[i]=""
        }
         else{
          emptyMessage[i]="Nothing found";

         }
      }
      return foundItems;

    }).catch(function(errorResponse) {
      console.log(errorResponse);
    });   
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
    return foundItems;
  };
  function Nothing(currentValue){
    return currentValue == "Nothing found";
  }
  service.isEmpty = function () {
   var resp =emptyMessage.every(Nothing);
   if(resp == true){
     return "Nothing found";
   }
   else{
    return "";
   }

  };

}

})();
