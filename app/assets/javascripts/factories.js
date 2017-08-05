/**
 * Created by mikey on 10/13/2016
 */


app.factory('Characters', ['$resource', function ($resource) {
    return $resource('/characters');
}]);

app.factory('Combine', ['$resource', function ($resource) {
    return $resource('/combine');
}]);

app.factory('Coordinates', ['$resource', function ($resource) {
    return $resource('/coordinates');
}]);

app.factory('Draw', ['$resource', function ($resource) {
    return $resource('/draw');
}]);
