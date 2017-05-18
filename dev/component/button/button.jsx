const React=require('react');


//按钮传参  
//icon    按钮中是否有icon图标
//background    背景颜色
//color    字体颜色
//font     按钮中文字  
//function       回调函数，功能

export class Button extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		}
		this.callback=this.callback.bind(this);
	}
	callback(){
		if(this.props.para.fn){
			this.props.para.fn();
		}else{
			return;
		}
		
	}
	render(){
		var para=this.props.para===undefined?new Object:this.props.para;
		var icon =para.icon===undefined?'':para.icon;
		var font=para.font===undefined?'':para.font;
		var fn=para.fn===undefined?'':para.fn;
		
		var iel='';
		if (icon){
			var cm=icon+' iconfont';
			iel=<div className="icon-box"><i className={cm} ></i></div>
		}
		var fel='';
		if(font){
			fel=<h5>{font}</h5>;
		}



		return(
			<button onTouchEnd={this.callback} >
				{iel}
				{fel}
			</button>
		)
	}
}