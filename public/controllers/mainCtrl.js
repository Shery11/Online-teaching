var app = angular.module('myApp');


app.controller('mainCtrl', function ($scope,$rootScope,$firebaseAuth,$location,$state,$firebaseArray) {


	const db   = firebase.database().ref();
	const users = db.child('users');
	const fireDb = db.child('fireData'); 




$scope.auth = $firebaseAuth();


$scope.launchModel = function(){
  $('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
  });
    
}


$scope.afterLogin = function(){
//$scope.is = true;

$rootScope.hideX = true;
$rootScope.showX = true;
if($rootScope.status === 'valid'){
	
  $state.go('profileControl');

} else {
  console.log("Error");
	$scope.result ='error , Unable to access admin panel';
}

}

    
       $scope.afterSignUp = function(){
        console.log("Called");
        
            users.child($scope.uid).set({  /*create new user*/
            	
            	full_name:$scope.name,
              password:$scope.password,
            	phone:$scope.phone,
              about:$scope.text,
            // img:$scope.img,
              email:$scope.email,
              uniqueId:$scope.uid
        });
            $rootScope.val = $scope.email;
            $rootScope.hideX = true;
            $rootScope.showX = true;
            if($rootScope.status === 'valid'){
              $state.go('profileControl');
            } else {
              console.log("error");
            	$scope.result ='error , Unable to access admin panel';
            }



        }



       $scope.signUp = function(){
  
              $scope.auth.$createUserWithEmailAndPassword($scope.email, $scope.password).then(
                function(firebaseUser){

               
                    // logic after sign up 
                    $scope.result = "user signed up with following email" + firebaseUser.email + firebaseUser.uid;
                    $scope.uid = firebaseUser.uid;
                    $rootScope.status = 'valid';
                    $scope.resultColor = 'green';
                    $scope.afterSignUp();



                }).catch(function(error){
               
                console.log(error);
                $scope.result = "Error : "+error;
                $scope.resultColor = 'red';
              });


} 
// Works if the user exists in our Firebase Authentication User list. 

$scope.signIn = function(){
	$scope.auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser){
  // my logic after sign In 
  $scope.result = "login Succesful!: UID = "+firebaseUser.uid;
  $scope.resultColor = 'green';     
  $rootScope.status = 'valid';
  $rootScope.val = $scope.email;
   console.log('signed in'); 
   $scope.afterLogin();

  //more logic...
}).catch(function(error){
	console.log("authentication Error",error);
	$scope.result = "authentication Error "+ error ;
	$scope.resultColor = 'red';
    //more error handling 


});
}




});


/*how DOES Firebas eAUthentication Works ? 

So when the user Sign Up , 
User is asigned a special unique ID. 
This ID is what returned of the user. 


>>Database Strategy 
> So we cna do this as whenever signup, create a field in database, and saves its unique ID. 
once unique id is saved in database, that user can have more credentials. 


*/