import { FormEvent, useState, useEffect } from 'react';

import { Box } from '@mui/material';
import { LoginFormElements } from '../types/formElements';
import Chat from '../components/chat';
import SessionStorage from '../helpers/sessionStorage';
import Login from '../components/login';
import { getRandomColor } from '../helpers/messageColors';
import { colorRegex } from '../consts/regex';

function Home() {
	const [userName, setUserName] = useState<string | null>(null);
	const [userColor, setUserColor] = useState<string | null>(null);

	const handleLogin = (event: FormEvent<LoginFormElements>) => {
		event.preventDefault();

		if (event.currentTarget.elements.name.value.length) {
			const userColor = getRandomColor();

			SessionStorage.setUserName(event.currentTarget.elements.name.value);
			SessionStorage.setUserColor(userColor);
			setUserName(event.currentTarget.elements.name.value);
			setUserColor(userColor);
		}
	};

	useEffect(() => {
		const userName = SessionStorage.getUserName();
		const userColor = SessionStorage.getUserColor();

		if (userName && userName.length) {
			setUserName(userName);

			if (userColor && colorRegex.test(userColor)) {
				setUserColor(userColor);
			} else {
				const userColor = getRandomColor();

				SessionStorage.setUserColor(userColor);
				setUserColor(userColor);
			}
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
			{userName && userColor ? (
				<Chat userName={userName} userColor={userColor} />
			) : (
				<Login handleLogin={handleLogin} />
			)}
		</Box>
	);
}

export default Home;
