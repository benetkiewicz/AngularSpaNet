(function() {
    angular
        .module('registration')
        .directive("localizeddistance", localizeddistance);

    function localizeddistance() {
        var directive = {
            restrict: "E",
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            var unit = "km";
            if (attrs.location === "A") {
                unit = "mi";
            }

            element.text(attrs.distance + " " + unit);
        }
    }
})();