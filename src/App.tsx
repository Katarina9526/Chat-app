import { FormEvent, useState, useEffect } from 'react';

import { Box } from '@mui/material';
import { LoginFormElements } from './types/formElements';
import Chat from './components/chat';
import SessionStorage from './helpers/sessionStorage';
import Login from './components/login';

function App() {
	const [userName, setUserName] = useState<string | null>(null);

	const handleLogin = (event: FormEvent<LoginFormElements>) => {
		event.preventDefault();

		if (event.currentTarget.elements.name.value.length) {
			SessionStorage.setUserName(event.currentTarget.elements.name.value);
			setUserName(event.currentTarget.elements.name.value);
		}
	};

	useEffect(() => {
		const userName = SessionStorage.getUserName();

		if (userName && userName.length) {
			setUserName(userName);
		}
	}, []);

	return (
		<Box
			minHeight="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
			padding="16px"
			boxSizing="border-box">
			{userName ? <Chat userName={userName} /> : <Login handleLogin={handleLogin} />}
		</Box>
	);
}

export default App;
