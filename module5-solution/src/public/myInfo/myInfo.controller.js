(function(){
angular.module('public')
.controller('myInfoController', myInfoController);
myInfoController.$inject = ['MenuService','ApiPath'];
function myInfoController(MenuService, ApiPath) {
  var info = this;

 info.user = MenuService.user;
  info.basePath = ApiPath;
}

})();
