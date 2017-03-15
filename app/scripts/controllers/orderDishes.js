'use strict';

eparty.controller('orderDishesCtrl',function($scope,$http){
	$scope.isList = true;
	$http.get('/json/orderDishes.json')
	.then(function(res){
		if(res.data.code==='200'){
			$scope.data = res.data.model[0];
		}
		
	},function(error){
		console.log(error);
	});

	$http.get('/json/loadStoreInfo.json')
	.then(function(res){
		if(res.data.code==='200'){
			$scope.info = res.data.model;
		}
	})
});