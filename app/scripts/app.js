'use strict';

/**
 * @ngdoc overview
 * @name gulpProjectApp
 * @description
 * # gulpProjectApp
 *
 * Main module of the application.
 */
var eparty = angular
  .module('gulpProjectApp', [
    'ui.router'
  ]);
eparty.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when('','/home');

    $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'views/home.html',
      controller:'homeCtrl'
    })
    .state('orderDishes',{
      url:'/orderDishes',
      templateUrl:'views/orderDishes.html',
      controller:'orderDishesCtrl'
    })
    .state('alreadyOrder',{
      url:'/alreadyOrder',
      templateUrl:'views/alreadyOrder.html',
      controller:'alreadyOrderCtrl'
    })
    .state('wxPay',{
      url:'/wxPay',
      templateUrl:'views/wxPay.html',
      controller:'wxPayCtrl'
    })
    .state('evaluate',{
      url:'/evaluate',
      templateUrl:'views/evaluate.html',
      controller:'evaluateCtrl'
    })
    .state('orderDetails',{
      url:'/orderDetails/:orderId/:tableId/:tableCode/:orderType',
      templateUrl:'views/orderDetail.html',
      controller:'orderDetailsCtrl'
    })
    
    $urlRouterProvider.otherwise('/home');
  });
