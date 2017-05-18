const React = require('react');
import {Link , IndexLink} from 'react-router';

export class Nav extends React.Component{
	constructor(props){
		super(props);
		
	}
	render(){
		var data=this.props.data;
		var ic="iconfont "+data.icon;
		var nm='col-xs-3 '+data.name+' '+this.props.show;
		var el=data.to==='/'?<nav className={nm} ><IndexLink to={data.to} ><div className="iconBox"><i className={ic} ></i></div></IndexLink></nav>:<nav className={nm} ><Link to={data.to} ><div className="iconBox"><i className={ic} ></i></div></Link></nav>;
		return el;
	}
}


