
/*
 * Configuration of requireJS
 */

require.config({
    baseUrl: "app_components/",
    paths: {
        //JQuery
        'jquery': '../third_party/jquery',
        
        //AngularJS
        'angular': '../third_party/angular',
        
        //AngularUI
        'ui-router': '../third_party/angular-ui-router',
        'ui-bootstrap': '../third_party/ui-bootstrap-tpls.min',
        'ngGrid': '../third_party/ng-grid-2.0.12.debug',
        
        'ocLazyLoad': '../third_party/ocLazyLoad',
        'app-module':'app-module',
        

    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular': ['jquery'],
        'ocLazyLoad': ['angular'],
        'ui-router':['angular'],
        'ngGrid': ['angular'],
        'ui-bootstrap': ['angular'],
         'app-module':[
            'ocLazyLoad', 
            'ui-router',
            'ui-bootstrap']

        

       

    }
});

// Start maui app
requirejs(['app-module'], function() {
    angular.bootstrap(document.body, ['app-module']);
});