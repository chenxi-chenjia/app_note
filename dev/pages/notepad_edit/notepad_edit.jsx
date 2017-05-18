const React=require('react');

import {enter_page} from '../../API/enter-page.js';
import {ls} from '../../API/localstore.js';
import { Link } from 'react-router';
import {Prompt} from '../../component/prompt/prompt.jsx'

export class Notepad_edit extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{
				title:'',
				content:''
			}
		}
		this.titleInput=this.titleInput.bind(this);
		this.contentInput=this.contentInput.bind(this);
		this.publish=this.publish.bind(this);
	}

	//标题输入
	titleInput(e){
		var data=this.state.data;
		data.title=e.target.value;
		this.setState({
			data:data,
			prompt:false
		})
	}

	//内容输入
	contentInput(e){
		var data=this.state.data;
		data.content=e.target.value;
		this.setState({
			data:data
		})
	}
	//发表
	publish(e){
		var data = this.state.data;
		e.preventDefault();
		var self=this;
		if (data.content) {
			ls(data);
			this.setState({
				prompt:true,
				prompt_data:{
					type:'success',
					content:'发布成功'
				}
			})
			setTimeout(function(){
				self.setState({
					prompt:false
				})
				enter_page('notepad',0);
			},2000);
		}else{
			this.setState({
				prompt:true,
				prompt_data:{
					type:'danger',
					content:'请输入发布的内容'
				}
			})
			setTimeout(function(){
				self.setState({
					prompt:false
				})
			},2000);
		}
	}
	

	render(){
		var prompt=this.state.prompt?<Prompt data={this.state.prompt_data}></Prompt>:null;
		return(
			<div id='notepad_edit'>
				<header>
					<Link to='notepad'>
						<div className="iconfont icon-fanhui"></div>
					</Link>
					<div className="iconfont icon-101"
					onTouchEnd={this.publish} ></div>
				</header>
				<h4><label htmlFor="Notepad_edit_title">title:</label><input type="text" id='Notepad_edit_title'
					onChange={this.titleInput} /></h4>

				<textarea  cols="30" rows="10"
				onChange={this.contentInput}></textarea>
				{prompt}
			</div>
		)
	}
}