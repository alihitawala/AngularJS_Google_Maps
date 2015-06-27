'use strict';

angular.module('myAppYoApp')
  .controller('InputMapCtrl', function ($scope) {
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
        $scope.result = ''
        $scope.options_source = {};
        $scope.options_destination = {};
        $scope.details_source = {};
        $scope.details_destination = {};

        $scope.watchSource = function () {
            return $scope.details_source
        };

        $scope.$watch($scope.watchSource, function () {
            plotSource();
        }, true);

        function plotSource()
        {
            if (angular.isDefined($scope.details_source.geometry))
            {
                var lat = $scope.details_source.geometry.location.k;
                var long = $scope.details_source.geometry.location.B;
                $scope.map.center.latitude = lat;
                $scope.map.center.longitude = long;
                $scope.map.zoom = 15;
            }
        }
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
//        $scope.disabled = function(date, mode) {
//            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
//        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;



        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = ! $scope.ismeridian;
        };

        $scope.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            $scope.mytime = d;
        };

        $scope.changed = function () {
            console.log('Time changed to: ' + $scope.mytime);
        };

        $scope.clear = function() {
            $scope.mytime = null;
        };
    });
