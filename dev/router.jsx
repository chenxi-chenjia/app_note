const React=require('react');
const ReactDOM=require('react-dom');


import {App} from './app.jsx';
import {Home} from './pages/home/home.jsx';
import {Calculate} from './pages/calculate/calculate.jsx';
import {Notepad} from './pages/notepad/notepad.jsx';
import {Notepad_edit} from './pages/notepad_edit/notepad_edit.jsx'
import {list} from './pages/list/list.jsx'
import {article} from './pages/article/article.jsx';


import {browserHistory , hashHistory , Router , Route , IndexRoute} from 'react-router';


ReactDOM.render((
	<Router history={browserHistory} >
		<Route path='/' component={App} >
			
			<Route path='/calculate' component={Calculate} ></Route>
			<Route path='/notepad' component={Notepad} ></Route>
			<Route path='/notepad_edit' component={Notepad_edit} ></Route>
			
			<Route path='/:name' component={list}></Route>
			<Route path='/article/:name/:id' component={article} ></Route>
			<IndexRoute component= {Home} />
		</Route>

		
	</Router>
	
),document.getElementById('app'));


