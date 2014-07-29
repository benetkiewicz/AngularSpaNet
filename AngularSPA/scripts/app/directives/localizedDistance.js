app.directive("localizeddistance", function () {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var unit = "km";
            if (attrs.location === "A") {
                unit = "mi";
            }

            element.text(attrs.distance + " " + unit);
        }
    };
});