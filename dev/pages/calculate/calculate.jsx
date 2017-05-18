const React=require('react');
import {enter_page} from '../../API/enter-page.js';

export class Calculate extends React.Component{
	constructor(props){
		super(props);
		this.state={
			stateway:'enter',
			formula:'0',
			num:'0',
			type:'',
			lastnum:'0',
			again:false
		}
		this.numkey=this.numkey.bind(this);
		this.symbolkey=this.symbolkey.bind(this);
		this.backkey=this.backkey.bind(this);
		this.clearkey=this.clearkey.bind(this);
		this.calculate=this.calculate.bind(this);
		this.backpage=this.backpage.bind(this);
	}
	
	//数字按键
	numkey(e){
		var newnum=e.target.value;
		var num=this.state.num+'';
		var formula=this.state.formula;
		if(newnum==10){
			var reg=/\./;
			if(!reg.test(num)){
				formula+='.';
				num+='.';
			}
		}else{
			if(num.indexOf('.')==num.length){

			}
				if(num.length<11){
					if(num=='0'){
						num=parseFloat(num)+newnum;
					}else{
						num=num+''+newnum;
					}
				}
				if(formula=='0'){
					formula=(parseFloat(formula)+parseFloat(newnum))+'';
				}else{
					formula=formula+newnum;
				}	
		}
		this.setState({
			num:num,
			formula:formula
		})
	}
	
	//符号按键
	symbolkey(e){
		var sb='';
		var formula=this.state.formula;
		var again=this.state.again;
		var l=parseFloat(this.state.lastnum);
		var n=parseFloat(this.state.num);
		if(again){
			formula=this.state.num;
			again=!again;
		}
		switch(e.target.value){
			case 15:
			sb='+';
			break;
			case 16:
			sb='-';
			break;
			case 17:
			sb='*';
			break;
			case 18:
			sb='/';
			break;
		}
		formula=formula+sb;
		if(this.state.type){
			switch(this.state.type){
				case '+':
				n=l+n;
				break;
				case '-':
				n=l-n;
				break;
				case '*':
				n=l*n;
				break;
				case '/':
				if(n==0){
					n=1;
				}
				n=l/n;
				break;
			}
			formula=parseFloat(n)+sb;
			again=true;
		}
		this.setState({
			type:sb,
			num:'0',
			formula:formula,
			lastnum:n,
			again:again
		})
	}

	//回删
	backkey(e){
		var num=this.state.num+'';
		var formula=this.state.formula;
		var type=this.state.type;
		var lastnum=this.state.lastnum;
		var again=this.state.again;
		if(num=='0'){
			type='';
			formula=formula.slice(0,-1);
		}else{
			num=num.slice(0,-1);
			formula=formula.slice(0,-1);
		}
		if(num.length<1){
			formula='0';
			num='0';
			type='';
			lastnum='0';
			again=false;
		}
		this.setState({
			num:num,
			formula:formula,
			type:type,
			lastnum:lastnum,
			again:again
		})

		

	}

	//清0
	clearkey(e){
		this.setState({
			formula:'0',
			num:'0',
			type:'',
			lastnum:'0',
			again:false
		})
	}

	//计算
	calculate(){
		var type=this.state.type;
		var l=parseFloat(this.state.lastnum);
		var n=parseFloat(this.state.num);
		switch(type){
			case '+':
			n=l+n;
			break;
			case '-':
			n=l-n;
			break;
			case '*':
			n=l*n;
			break;
			case '/':
			if(n==0){
				n=1;
			}
			n=l/n;
			break;
		}
		n=parseFloat(n)+'';
		this.setState({
			lastnum:'0',
			num:n,
			again:true,
			type:''
		})
	}
	

	//返回上一页
	backpage(){
		this.setState({
			stateway:'leave'
		})
		enter_page('/');
	}



	render(){
		var self=this;
		var cm='animate-scale-enter';
		if(this.state.stateway==='leave'){
			cm='animate-scale-leave';
		}
		var num=[9,8,7,6,5,4,3,2,1];
		var symbol=[{
				text:'+',
				value:15
			},{
				text:'-',
				value:16
			},{
				text:'*',
				value:17
			},{
				text:'/',
				value:18
			},{
				text:'=',
				value:19
			}
		];
		var numbtn=num.map(function(v,i){
			return(<li className="numbtn key" onTouchEnd={self.numkey}  value={v} key={i} >{v}</li>)
		})
		var symbolbtn=symbol.map(function(v,i){
			if(i==4){
				return(<li className='symbolbtn key' onTouchEnd={self.calculate}  value={v.value} key={i} >{v.text}</li>)
			}
			return(<li className='symbolbtn key' onTouchEnd={self.symbolkey}  value={v.value} key={i} >{v.text}</li>)
		})
		//动画效果类名
		var ancm='';
		if(this.state.stateway=='enter'){
			ancm='animate-scale-enter';
		}else if(this.state.stateway=='leave'){
			ancm='animate-scale-leave';
		}

		return(
			<div id="calculate" className={ancm} >
				<div className="iconfont icon-fanhui " onTouchEnd={this.backpage} ></div>
				<div className="inputBox">
					<p>{this.state.formula}</p>
					<h4>{this.state.num}</h4>
				</div>
				<div className="btnbox">
					<div className="clear key" onTouchEnd={this.clearkey} >C</div>
					<div className="back-delete key iconfont icon-iconfrontfuzhi" onTouchEnd={this.backkey} ></div>
					<ul className="symblebtn-box no-float">
						{symbolbtn}
					</ul>
					<ul className="numbtn-box no-float">
						{numbtn}
					</ul>
					<ul className="no-float ached-box">
						<li className="ached fl key" onTouchEnd={this.numkey} value='0'>0</li>
						<li className="ached fl key" onTouchEnd={this.numkey}  value="10">.</li>
					</ul>
				</div>
			</div>
		)
	}
}