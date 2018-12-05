angular 
.module('myApp', ['firebase'])
// Initialize Firebase
.constant('firebaseConfig', {
    apiKey: "AIzaSyCxp97FqBuCDRNKs2F7IcviGRot-USebW4",
    authDomain: "to-do-list-revamp.firebaseapp.com",
    databaseURL: "https://to-do-list-revamp.firebaseio.com",
    projectId: "to-do-list-revamp",
    storageBucket: "to-do-list-revamp.appspot.com",
    messagingSenderId: "1024744737533"
}) // end constant
.run(function (firebaseConfig) {
    firebase.initializeApp(firebaseConfig);
}) // end run
.controller('todoCtrl', function($scope, $firebaseObject, $firebaseArray) {
    var dbref = firebase.database().ref().child('todos')
    $scope.todos = $firebaseArray(dbref)
    
    $scope.addTodo = () => {
        $scope.newTodo.completed = false;
        $scope.todos.$add($scope.newTodo)
        $scope.newTodo = this.blankTodo()
    }
}) 