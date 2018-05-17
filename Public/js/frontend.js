console.log("first");

angular.module('frontend')
    .controller('frontendController', function($scope){


    $scope.text="Sign up now";
    $scope.sub = true;
    $scope.Thanks = false;
    var i = 1;


    $scope.myFunction = function(){
        if($scope.email){



            //for(i=0; i<2002; i++){
            $scope.text = "submitting...";
            //$scope.delay={"transition-property": "div","transition-delay": "10s"}
            console.log(i);
            //if(i>1){

            $scope.Thanks = true;
            $scope.sub = false;

            //}
            //}


        }else{

            $scope.otext = "Please enter a valid email address";

        }


    }


});