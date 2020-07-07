(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope', '$filter'];
function LunchCheckerController($scope, $filter) {
  $scope.lunch_menu = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function() {
    console.log("Message is being updated");
    $scope.lunch_menu = $scope.lunch_menu.toString().trim();
    if ($scope.lunch_menu.length == 0) {
      $scope.message = "Please enter data first";
      return;
    }

    var item_count = 0;
    for (var menu_item in $scope.lunch_menu.split(",")) {
      console.log("Menu item is: "+menu_item);
      if (menu_item.trim().length > 0) item_count++;
    }
    if (item_count == 0) $scope.message = "Please enter data first";
    else if (item_count < 4) $scope.message = "Enjoy!";
    else $scope.message = "Too much!";
  }

  console.log($scope.message);

}

})();
