export const search=function(data,reg){
	var nd=new Array;
	data.forEach(function(v,i){
		if(reg.test(v.content)||reg.test(v.title)){
			nd.push(v);
		}
	})
	return nd;
}




