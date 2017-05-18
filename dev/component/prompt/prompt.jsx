const React=require('react');

export class Prompt extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		var data=this.props.data;
		var cm='alert alert-'+data.type;
		return(
			<div className={cm} role="alert">{data.content}</div>
		)
	}
}