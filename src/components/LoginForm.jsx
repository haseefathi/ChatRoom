import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID':  "236e2377-7735-4475-b22a-c03455da1694",
			'User-Name': userName,
			'User-Secret': password
		}

		try {
			console.log('getting from api');
			await axios.get('https://api.chatengine.io/chats', { headers: authObject });

			// logged in
			localStorage.setItem('username', userName);
			localStorage.setItem('password', password);

			window.location.reload();

		} catch(error) {
			setError('Invalid Username/Password');
		}
	}

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Welcome to Chatroom!</h1>
				<form onSubmit = {handleSubmit}>
					<input type="text" value = {userName} onChange = {(e) => setUsername(e.target.value)} className = "input" placeholder="Username" required/>
					<input type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "input" placeholder="Password" required/>
					<div align="center">
						<button type="submit" className = "button">
							<span>Login</span>
						</button>
					</div>
					<h5 className = "error">{error}</h5>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;