import { FormEvent } from 'react';
import useScaledrone, { publish } from './hooks/useScaledrone';
import { Box, Button, TextField, Paper, Chip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { CustomFormElement } from './types/formElements';

function App() {
	const messages = useScaledrone();

	const handleSubmit = (event: FormEvent<CustomFormElement>) => {
		event.preventDefault();

		publish(event.currentTarget.elements.message.value);
		event.currentTarget.reset();
	};

	return (
		<Box
			minHeight="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
			padding="16px"
			boxSizing="border-box">
			<Paper elevation={12}>
				<Box
					minHeight="600px"
					border="1px solid rgba(0, 0, 0, 0.23)"
					mb="16px"
					borderRadius="16px"
					padding="8.5px 14px"
					display="flex"
					flexDirection="column"
					justifyContent="flex-end"
					alignItems="flex-start"
					gap="8px">
					{messages.map((message, key) => (
						<Chip key={key} label={message.data} variant="filled" color="primary" />
					))}
				</Box>
				<Box component="form" display="flex" flexDirection="row" gap="8px" onSubmit={handleSubmit}>
					<TextField
						name="message"
						autoComplete="off"
						variant="outlined"
						fullWidth
						color="primary"
						size="small"
					/>
					<Button type="submit" variant="contained" color="primary" size="large" endIcon={<SendIcon />}>
						Send
					</Button>
				</Box>
			</Paper>
		</Box>
	);
}

export default App;
