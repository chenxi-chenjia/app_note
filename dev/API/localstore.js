
//本地存储接收一个对象
// 对象中应包括  
// 标题  title  
// 时间  time
// 内容  content

// 本地存储名字为chenxi_remand

export function ls(obj){
	if(localStorage.chenxiRemind==undefined){
		var arr=new Array;
		localStorage.setItem('chenxiRemind',JSON.stringify(arr));
	}
	var arr=JSON.parse(localStorage.getItem('chenxiRemind'));
	arr.forEach(function(v,i){
		v.id=i;
	})

	if(typeof(obj)=='object'){

		// 增加
		var date=new Date();
		obj.time=obj.time==undefined?date.toLocaleString():obj.time;
		obj.day=obj.day==undefined?date.getDate():obj.day;
		obj.title=obj.title==''?date.toLocaleDateString():obj.title;
		obj.id=arr.length;
		arr.push(obj);
		localStorage.setItem('chenxiRemind',JSON.stringify(arr));


	}else if (typeof(obj)=='number'){
		
		// 删除
		arr.splice(obj,1);
		localStorage.setItem('chenxiRemind',JSON.stringify(arr));
		return arr;


	}else if(obj==undefined){

		// 读取
		return arr;
	}
}