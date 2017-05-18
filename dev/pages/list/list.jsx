const React=require('react');


import {react_data} from '../../data/react_data.js';
import {vue_data} from '../../data/vue_data.js';
import {html_data} from '../../data/html_data.js';
import {Footer} from '../../component/footer/footer.jsx';
import {search} from '../../API/search.js';
import { Link} from 'react-router';

export class list extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
		this.serchCode=this.serchCode.bind(this);
	}
	componentWillMount(){
		var name=this.props.location.pathname.substring(1,this.props.location.pathname.length);
		var data;
		if(name==='react'){
			data=react_data;
		}else if(name==='vue'){
			data=vue_data;
		}else if(name==='html'){
			data=html_data;
		}
		this.setState({
			data:data,
			showdata:data,
			name:name
		})
	}
	componentWillReceiveProps(nextProps){
		var name=nextProps.location.pathname.substring(1,nextProps.location.pathname.length);
		var data;
		if(name==='react'){
			data=react_data;
		}else if(name==='vue'){
			data=vue_data;
		}else if(name==='html'){
			data=html_data;
		}
		this.setState({
			data:data,
			showdata:data,
			name:name
		})
	}

	serchCode(e){
		var reg=new RegExp(e.target.value);
		var data=this.state.data;
		this.setState({
			showdata:search(data,reg)
		}) 
	}
	

	render(){
		var self=this;
		if(this.state.showdata.length>0){
			var el=self.state.showdata.map((v,i)=>{
				var t='/article/'+self.state.name+'/:'+v.id;
				var content=v.content.replace(/<->/g,'');
				return(
					<div className="list-group-item"
					data={v} 
					key={v.id}>
						<Link to={t} >
							<h4 className="list-group-item-heading">{v.title}</h4>
							<p className="list-group-item-text .text-overflow">{content}</p>
						</Link>
					</div>
				)
			})
		}else{
			var el=<h4 className='ts'>Sorry,I search nothing.</h4>
		}
		return(
			<div id="list" className={this.state.animate_name} >
				<header>
					<div className="serch-input-box">
						<input type="text"
						placeholder="Please enter your looking for..."
						className='serch-input'
						onChange={this.serchCode} />
					</div>
				</header>
				<div className="list-group">
					{el}
				</div>
				<Footer data={this.state.name} ></Footer>
			</div>
		)
	}
}