angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'Quiz-Api-BG.us-east-2.elasticbeanstalk.com/';

    return service;
}]);