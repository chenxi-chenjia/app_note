
// 进入页面所需动画函数
import {browserHistory} from 'react-router';

export function enter_page(page,time){
	var t = time===undefined?1000:time;
	function m (){
		browserHistory.push(page);
	}
	setTimeout(m ,t);
}