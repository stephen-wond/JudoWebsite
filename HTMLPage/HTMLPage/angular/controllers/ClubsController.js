(function (app) {
    var ClubsController = function ($scope, $http) {
        $http.get("/Data.json").success(function (data) {
                $scope.clubs = data;
            })
            .error(function () {
                $scope = "Error";
            });

        $scope.orderByField = "Club_Name"; // set the default sort type
        $scope.reverseSort = false;  // set the default sort order
        $scope.searchClubs = "";
    };
    app.controller("ClubsController", ClubsController);
}(angular.module("app")));