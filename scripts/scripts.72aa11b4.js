"use strict";angular.module("diplopcApp",["ngAnimate","ngMessages","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when('/', {templateUrl: 'views/companyoverview.html', controller: 'MainCtrl'}).when("/companyoverview",{templateUrl:"views/companyoverview.html",controller:"MainCtrl"}).when("/addcompany",{templateUrl:"views/addcompany.html",controller:"MainCtrl"}).when("/siteoverview",{templateUrl:"views/siteoverview.html",controller:"MainCtrl"}).when("/sites/:siteID",{templateUrl:"views/sitedetail.html",controller:"MainCtrl"}).when('/company/:companyID', {templateUrl: 'views/companydetail.html', controller: 'MainCtrl'}).when("/addsite",{templateUrl:"views/addsite.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("diplopcApp").controller("MainCtrl",["$scope","$http","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.get("json/company.json").success(function(b){a.companies=b,a.whichCompany=c.companyID}),b.get("json/site.json").success(function(b){a.sites=b,a.whichSite=c.siteID}),a.countChecked1=function(){var b=0;return angular.forEach(a.companies,function(a){a.isselected&&b++}),b},a.countChecked=function(){var b=0;return angular.forEach(a.sites,function(a){a.isselected&&b++}),b},jQuery(document).ready(function(a){a(".clickable-row").click(function(){window.document.location=a(this).data("href")})})}]),angular.module("diplopcApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);