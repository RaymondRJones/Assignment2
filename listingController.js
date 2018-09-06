angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      //Needs Code, Name, coordinates, and address as user input
        //How to create an object given those variables?
    };
    $scope.deleteListing = function(index) {
      listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.coordinateX = listings[index].coordinates[0];
      $scope.coordinateY = listings[index].coordinates[1];
      $scope.address = listings[index].address;
    };
  }
]);