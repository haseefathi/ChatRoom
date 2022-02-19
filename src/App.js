import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

	if(!localStorage.getItem('username')) return <LoginForm/>

	return (
		<ChatEngine
			height = "100vh"
			projectID = "236e2377-7735-4475-b22a-c03455da1694"
			userName = {localStorage.getItem('username')}
			userSecret = {localStorage.getItem('password')}
			renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
		/>
	);
}

export default App;