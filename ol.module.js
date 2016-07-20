/*OpenLayers wrapper*/
angular.module('OpenLayers',[]).factory('ol', [
    '$window',
    function ($window) {
        if($window.ol){
            //Delete from window so it's not globally accessible, but keep in _thirdParty for testing
            $window._thirdParty = $window._thirdParty || {};
            $window._thirdParty.ol = $window.ol;

            //OpenLayers fails without global 'ol' :(
            //try {
            //    delete $window.ol;
            //} catch (e) {
            //    /*<IE8 doesn't do delete of window vars, make undefined if delete error*/
            //    $window.ol = undefined;
            //}
        }
        var ol = $window._thirdParty.ol;
        return ol;
    }
]).factory('WKT',[
    'ol',
    function(ol){
        return new ol.format.WKT();
    }
]);