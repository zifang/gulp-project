'use strict';
/*
create by fangdx 2017/3/11
*/
eparty.controller('homeCtrl',function($scope){
	$scope.name="弄堂里（文三路店）";
	$scope.address="餐台  A120";
	$scope.image="http://static.bootcss.com/www/assets/img/lesscss.png";
	$scope.storeImage = "http://static.bootcss.com/www/assets/img/chart.js.png";
	$scope.notices = [
		{id:1,name:"1、全场在线点菜满100减5"},
		{id:2,name:"2、双击下载的安装包，默认就会用Extension Manager，按照提示步骤进行安装即可。"}
	];
	if($scope.notices.length>1){
		marquee.marqueeSlider(30,"notice-list","box1","box2");
	}
	
});

//重置字体
setHtml();
window.addEventListener('resize', function(){
	setHtml();
});

function setHtml(){
	var width = document.documentElement.clientWidth;
	document.querySelector('html').style.fontSize = 20 * (width / 320) + 'px';
}

var marquee = function(){
	return {
		 marqueeSlider:function(speed,container,obj,copyObj){
			var _speed = speed;
			var _container  = document.getElementById(container);
			var _obj = document.getElementById(obj);
			var _objCopy = document.getElementById(copyObj);
			_objCopy.innerHTML = _obj.innerHTML;
			
			function Marquee(){
				if (_obj.offsetWidth-_container.scrollLeft <= 0){ 
				    _container.scrollLeft-=_objCopy.offsetWidth;
				}else {
				    _container.scrollLeft++;
				}
			}
			var MyMar = setInterval(Marquee,_speed);
		}
	}
}();