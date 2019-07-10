(function(){
'use strict';
angular.module('public')
.controller('signUpController', signUpController);
signUpController.$inject = ['MenuService'];
function signUpController(MenuService){
    var reg = this;
    reg.submit = function (){
    console.log("dentro "+ reg.user);
    console.log( reg.user);
    var itemNumber = reg.user.fav;
    reg.user.completed = false;
    itemNumber = itemNumber.toUpperCase();
    var promise = MenuService.getFavItem(itemNumber);
    console.log(itemNumber);
    promise.then(function(response){
     reg.user.completed = true;
      reg.err = false; 
      reg.user.favItem = response;
      MenuService.user = reg.user;
    })
   .catch(function (error) {
     console.log("Something is not right");
   });
    };
}

})();