const React =require('react');
import {Nav} from '../footer-nav/nav.jsx';

export class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			footer_nav:[
				{
					name:'home',
					icon:'icon-zhuye',
					to:'/'
				},
				{
					name:'react',
					icon:'icon-react',
					to:'/react',
				},
				{
					name:'vue',
					icon:'icon-weibiaoti-',
					to:'/vue'
				},
				{
					name:'html',
					icon:'icon-h5',
					to:'/html'
				}]
		}
	}
	render(){
		var now=this.props.data;
		var lis=this.state.footer_nav.map((v,i)=>{
			var ic="iconfont "+v.icon;
			var name='';
			if(v.name==now){
				name='now';
			}
			return(
				<Nav data={v} key={i} show={name} ></Nav>
			)
		})
		return(
			<footer className='container-fluid' >
				<div className="row">
					{lis}
				</div>
			</footer>
		)
	}
}

