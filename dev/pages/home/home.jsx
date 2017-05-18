const React=require('react');

import {Link} from 'react-router';



//数据
import {home_data} from '../../data/home_data.js';
// 按钮
import {Button} from '../../component/button/button.jsx';
//计算器
import {Calculate} from '../calculate/calculate.jsx';
import {Footer} from '../../component/footer/footer.jsx';




 
export class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			animate:true,
			cm:'',
			action:home_data.action,
			title:home_data.title,
			avatar:home_data.avatar,
			title:home_data.title,
			github:home_data.github
		}
	}
	componentWillMount(){

	}
	componentDidMount(){
		// var self=this;
		// function an (){
		// 	self.setState({
		// 		animate:false
		// 	})
		// }
		// setTimeout(an,3000);
	}
	
	render(){
		var self=this;
		//首页刚进入动画效果
		var el='';
		if(this.state.animate){
			el=(<div className='animate' >
					<h1>welcome Chenjia App</h1>
				</div>)
		}
		//button 传参
		

		var btn=this.state.action.map(function(v,i){
			var button_data={
				icon:v.icon,
				font:v.name,
				fn:function(){
					
				}
			}
			var t=v.name;
			return (
					<li className="col-xs-6 col-sm-3" key={i}>
						<Link to={t} >
							<Button  para={button_data} />
						</Link>
					</li>
				)
		})
		


		return (
			<div id='home' >
				<div className="my-Avatar">
					<div 
					className="img" 
					style={{backgroundImage:'url('+this.state.avatar+')'}} />
				</div>
				<div className="container action">
					<ul className="row">
						{btn}
					</ul>
				</div>
				<h2>{this.state.title} </h2>
				<div className="link">
					<a href={this.state.github} >{this.state.github}</a>
				</div>
				<Footer data='home' />
			</div>
		)
	}
}
