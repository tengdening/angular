//点击old-ul折回
var oldUl=document.querySelector(".old-ul");
var oldLi=document.querySelector(".old-ul>.old-ul-li");
var oldBtn=document.querySelector(".old-btn");
var oldTitleI=document.querySelector(".old-title>i")
var lh=oldLi.offsetHeight;
oldUl.style.overflow="hidden";
oldUl.style.height=lh+"px";
var flag=true;
oldLi.onclick=function(){
	if (flag) {
		oldUl.style.height="auto";
		oldUl.style.overflow="auto";
		oldBtn.style.display="block";
		oldTitleI.style.backgroundPosition="-23px -526px";
		flag=!flag;
	}else{
		oldUl.style.overflow="hidden";
		oldUl.style.height=lh+"px";
		oldBtn.style.display="none";
		oldTitleI.style.backgroundPosition="-96px -497px";
		flag=true;
	}
}
var cols1=["#cb72e0","#64df37","#ffda15","#28b3f2","#FF8200","#ff2868","#A1835D"];
var data=[{
	id:1,
	title:"新建1",
	colors:"#cb72e0",
	todo:[{
		t:"今天吃饭了吗?",
		state: false 
	},{
		t:"今天吃饭了吗?",
		state: false
	},{
		t:"今天吃饭了吗",
		state: true 
	},{
		t:"今天吃饭了吗",
		state: true
	},{
		t:"今天吃饭了吗",
		state: true
	}]
}]
var app=angular.module("app",[]);
app.controller("ctrl",function($scope){
	$scope.data=data;
	$scope.index=0;
	$scope.cols1=cols1;
	$scope.flags1=false;
	//选择
	$scope.say=function(i){
		$scope.index=i;
		$scope.inputbl=$scope.data[$scope.index].title;
	}
	//添加
	$scope.odd=function(){
		var id=$scope.data[$scope.data.length-1].id+1;
		console.log(id)
		$scope.data.push({
			id:id,
			title:"新建"+id,
			colors:$scope.cols1[(id-1)%7],
			todo:[]
		})
	}
	$scope.inputbl=$scope.data[$scope.index].title;
	//确定
	$scope.queding=function(){
		$scope.data[$scope.index].title=$scope.inputbl;
		$scope.flags1=false;
		$scope.data[$scope.index].colors=$scope.yanse;
	}
	//删除
	$scope.del=function(){
		$scope.data.splice($scope.index,1);
		$scope.flags1=false;
		$scope.index=0;

	}
	//更换颜色
	$scope.yanse=$scope.data[$scope.index].colors;
	$scope.colorbtn=function(v){
		$scope.yanse=v;
	}
	// 点击新建li
	$scope.newli=function(){
		$scope.data[$scope.index].todo.push({
			t:'',state:true
		})
	}
	//
	$scope.genggai=function(ev,v){
		v.t=(ev.target.innerText);
		console.log(ev)
	}
})