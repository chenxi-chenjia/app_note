const React=require('react');
import {Link} from 'react-router';
import {react_data} from '../../data/react_data.js';
import {vue_data} from '../../data/vue_data.js';
import {html_data} from '../../data/html_data.js';
import {Footer} from '../../component/footer/footer.jsx';
import {search} from '../../API/search.js';
import {browserHistory } from 'react-router';
import {enter_page} from '../../API/enter-page.js';
import {ls} from '../../API/localstore.js';

export class article extends React.Component{
	constructor(props){
		super(props);
		this.data={

		}
		this.backpage=this.backpage.bind(this);
	}
	componentWillMount(){
		var arr=this.props.location.pathname.split('/');
		var id=parseInt(arr[3].slice(1,arr[3].length));
		var name=arr[2];
		var data;
		if(name==='note'){
			data=ls()[id];
		}else if(name=='react'){
			data=react_data[id];
		}else if(name=='vue'){
			data=vue_data[id];
		}else if(name=='html'){
			data=html_data[id];
		}
		this.setState({
			data:data,
			name:name
		})
	}
	backpage(){
		switch(this.state.name){
			case 'note':
			enter_page('/notepad',0);
			break;
			case 'react':
			enter_page('/react',0);
			break;
			case 'vue':
			enter_page('/vue',0);
			break;
			case 'html':
			enter_page('/html',0);
			break;

		}
	}
	render(){
		var el;
		var data=this.state.data;;
		var p_arr=data.content.split('<->');
		var p_el=p_arr.map(function(v,i){
			return <p key={i}>{v}</p>
		})
		var time;
		if(data.time){
			time=<h3><small>{data.time}</small></h3>
		}
		return(
			<div id="article">
				<header>
					<div className="iconfont icon-fanhui"
					onTouchEnd={this.backpage}
					></div>
				</header>
				<div className="container-fluid">
					<div className="content">
						<div className="page-header">
							<h3>
								{data.title}
							</h3>
							{time}
						</div>
						{p_el}
					</div>
				</div>
			</div>
		)
	}
}
