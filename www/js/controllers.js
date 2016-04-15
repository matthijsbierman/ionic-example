angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('EventsCtrl', function ($scope, Events) {
    $scope.events = Events.list();
  })

  .controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
    // TODO finish view
    var id = $stateParams.id;
    $scope.event = Events.get(id);
  });
