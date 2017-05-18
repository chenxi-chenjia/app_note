const React=require('react');
import { Link } from 'react-router';

export class App extends React.Component{
	
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}