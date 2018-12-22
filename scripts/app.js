    angular
    .module('myApp', ['ngRoute', 'firebase'])
    .constant('firebaseConfig', {
        apiKey: "AIzaSyCxp97FqBuCDRNKs2F7IcviGRot-USebW4",
        authDomain: "to-do-list-revamp.firebaseapp.com",
        databaseURL: "https://to-do-list-revamp.firebaseio.com",
        projectId: "to-do-list-revamp",
        storageBucket: "to-do-list-revamp.appspot.com",
        messagingSenderId: "1024744737533"
    })
    .run(function (firebaseConfig){
        firebase.initializeApp(firebaseConfig)
    })
    .controller('todoCtrl', function ($scope, $firebaseObjecy, $firebaseArray) {
        // Should be setting up the database...
        var dbRef = firebase.database().ref().child('todos')
        $scope.todos = $firebaseArray(dbRef)
        
        this.blankTodo = function () {
            ({
                title: ''
            })
        }
        
        $scope.newTodo = this.blankTodo()
        // Adding a new To Do Item
        $scope.addTodo = function () {
            $scope.todos.$add($scope.newTodo)
            $scope.newTodo = this.blankTodo()
        }
    })