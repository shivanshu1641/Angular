(function () {
	
	angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
	$scope.itemlist = '';
	$scope.list = $scope.itemlist.split(',').length ;
	
	$scope.sayMessage = function () {
		$scope.list = $scope.itemlist.split(',').length ;
    if($scope.list==0) {$scope.message = 'Enter Data first';} 
		else if ($scope.list<=3) {$scope.message = 'Enjoy';} 
    else if($scope.list>=3) {$scope.message = 'Too Much !!!';}
  };
  $scope.printMessage = function () {
    return $scope.message;
  };
  }
})();
