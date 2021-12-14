var app = angular.module('raspisanie', []);
    app.controller('raspisanieCtrl', function($scope) {
        //accounts
        $scope.accounts = [{
            login: "admin",
            password: "admin",
            isSignIn: false,
            edit: false
        },{
            login :"user",
            password: "user",
            isSignIn: false,
            edit: false
        }];
        $scope.login = "admin",
        $scope.password = "admin",
        $scope.isSignIn = false,
        $scope.edit = false

        $scope.inputLogin = "";
        $scope.inputPass = "";

        //signUp
        $scope.signUp = function() {
            $scope.accounts.push({
                login: $scope.su_inputLogin,
                password: $scope.su_inputPass,
                isSignIn: false,
                edit: false
            });
            document.getElementById('signUpForm').style.display = "none";
            document.getElementById('overflow').style.display = "none";
            $scope.su_inputLogin = $scope.su_inputPass = "";
        };

        //signIn
        $scope.signIn = function() {
            if ($scope.si_inputLogin == $scope.login && $scope.si_inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('signInForm').style.display = "none";
                document.getElementById('overflow').style.display = "none";
                $scope.si_inputLogin = $scope.si_inputPass = "";
            }
        };
        //расписание

        //raspisanie list
        $scope.raspisanieList = [{
            troll: 10,
            start: '6:00',
            finish: '7:00',
            route: 'Ботаника-Рышкановка', 
            del: false
        },{
            troll: '24',
            start: '6:30',
            finish: '7:30',
            route: 'Телецентр-Рышкановка', 
            del: false
        },{
            troll: '30',
            start: '5:30',
            finish: '6:30',
            route: 'Ботаника-Буюканы', 
            del: false
        },{
            troll: '2',
            start: '6:30',
            finish: '7:00',
            route: 'Ботаника-Центр', 
            del: false
        },{
            troll: '17',
            start: '5:00',
            finish: '6:00',
            route: 'Чеканы-Буюканы', 
            del: false
        }
    ];

        //добавить новое расписание
        $scope.raspisanieAdd = function() {
            $scope.raspisanieList.push({
                troll: $scope.troll, 
                start: $scope.start, 
                finish: $scope.finish, 
                route: $scope.route,
                del: false
            });

            $scope.troll = ""; 
            $scope.start = ""; 
            $scope.finish = ""; 
            $scope.route = ""; 
        };
        
        //удалить расписание из таблицы
        $scope.raspisanieRemove = function(finroute) {
            const index = $scope.raspisanieList.findIndex(x => x.route == finroute);
            $scope.raspisanieList.splice(index, 1);
        }

        //валютный курс

        $scope.exch = [{
            name : "mdl",
            value : 1
        },
        {
            name : "rub",
            value : 0.24
        },
        {
            name : "dol",
            value : 17.40
        },
        {
            name : "euro",
            value : 20.13
        },
        {
            name : "grivna",
            value : 0.66
        },]

    });


$(document).ready(function(){
    $('.signUpButt').click(function(){
        $('.signUpForm').css('display', 'flex');
        $('.overflow').show();
    })
    $('.signInButt').click(function(){
        $('.signInForm').css('display', 'flex');
        $('.overflow').show();
    })

    $('.close').click(function(){
        $('.signUpForm').hide();
        $('.signInForm').hide();
        $('.accounts').hide();
        $('.overflow').hide();
    })
    $('.helloAdm').click(function(){
        alert("Hello, Admin");
    })
    $('.viewAccounts').click(function(){
        $('.accounts').show();
        $('.overflow').show();
    })
});