(function(){
	angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject =['$scope'];
	function LunchCheckController($scope){
		$scope.list="";
		$scope.msg="";
      $scope.Msg = function(string){
      	var num = string.replace(/,,/g, ",");
     	num = num.replace(/ /g, ",").split(",");
     	var nn=num.length;
     	for (var i = 0; i<num.length; i++){
     		if((num[i]=="")||(num[i]==" ")){
                nn--;
     		}
     	}
        showMsg(nn);
     }
       function showMsg(number){
        var x =document.getElementById("msg");
        if(number==0){
        	$scope.msg="Please enter data first";
        	x.style.color="red";

        }
        else	
        if(number<=3){
        x.style.color="green";	
         $scope.msg=" Enjoy!.";
        }
        else 
        if(number>3){
        x.style.color="green";	
        $scope.msg=" Too much! ";
        }
        console.log(number);
        };  
	}
})();