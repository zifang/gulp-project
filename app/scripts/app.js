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
    $urlRouterProvider.when('','/orderDishes');

    $stateProvider
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
    .state('orderDetails',{
      url:'/orderDetails/:orderId/:tableId/:tableCode/:orderType',
      templateUrl:'views/orderDetail.html',
      controller:'orderDetailsCtrl'
    })
    
    $urlRouterProvider.otherwise('/orderDishes');
  });
