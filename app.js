(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

 LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.name='';
    $scope.output='';
    $scope.color = 'black';
    $scope.display='none';
    $scope.helpMessage='';
    $scope.hungry = function () {
      var len = $scope.name.length;

      if (len == 0){
        $scope.display='block';
        $scope.color = 'red';
        $scope.output = 'Please enter data first';
      }else if (len > 0) {
        $scope.display='block';
        var words = $scope.name.split(',');
        var size = words.length;
        var wlen=0;
        for(var i=0; i<words.length; i++){
          if(words[i].trim().length > 0){
            wlen++;
          }
        }

        if(wlen < size){
          $scope.helpMessage ="I don't consider empty item!";

        }else{
            $scope.helpMessage ="";

          }

        if(wlen <= 3){

          $scope.color = 'green';
          $scope.output = 'Enjoy!';
        }else   if(wlen > 3){
            $scope.color = 'green';
            $scope.output = 'Too Much!';
          }



      }

    }
  }
})();
