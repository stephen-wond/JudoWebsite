(function () {
    var app = angular.module("app", ["ngRoute"]);

    var config = function ($routeProvider) {
        $routeProvider
            .when("/home",
                { templateUrl: "/angular/views/home.html", controller: "HomeController" })
            .when("/about",
                { templateUrl: "/angular/views/about.html", controller: "AboutController" })
            .when("/events",
                { templateUrl: "/angular/views/events.html", controller: "EventsController" })
            .when("/gradings",
                { templateUrl: "/angular/views/gradings.html", controller: "GradingsController" })
            .when("/clubs",
                { templateUrl: "/angular/views/clubs.html", controller: "ClubsController" })
            .when("/contact",
                { templateUrl: "/angular/views/contact.html", controller: "ContactController" })
            .otherwise(
                { redirectTo: "/home", controller: "HomeController" });
    };

    app.config(config);
}());