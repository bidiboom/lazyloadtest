'use strict';

// main application module
angular.module('app-module',
        [
            'oc.lazyLoad',
            'ui.bootstrap',
            'ui.router'
        ])
    .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config(
                    {
                        loadedModules: ['app-module'],
                        jsLoader: requirejs,
                        debug: true
                    }
                );

    }])
    .config(
        ['$stateProvider', '$locationProvider', '$urlRouterProvider',
            function ($stateProvider, $locationProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/login");
                $locationProvider.hashPrefix('!');


                
                var componentLocation = "app_components/login";


                $stateProvider.state('login', {
                    url: "/login",
                    views: {
                        "main-view": {
                            controller: "loginController",
                            templateUrl: "app_components/login/login.html"
                        }
                    },
                    resolve: {
                        loadMyHome: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([

                                {
                                    name: 'loginModule',
                                    files: [
                                        'app_components/login/login.css',
                                        'app_components/login/login.js'
                                    ]
                                }
                            ]);
                        }]
                    }
                });


                $stateProvider.state("shell", {
                    url: "/shell",
                    views: {
                        "main-view": {
                            controller: "shellController",
                            templateUrl: "app_components/shell/shell" + ".html"
                        }
                    },
                    resolve: {
                        loadMyHome: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([

                                {
                                    name: 'shellModule',
                                    files: [
                                        'app_components/shell/shell.css',
                                        'app_components/shell/shell.js'
                                    ]
                                }
                            ]);
                        }]
                    }
                });





                return $locationProvider.html5Mode(false);

            }]);