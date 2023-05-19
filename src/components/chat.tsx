import { FormEvent } from 'react';
import { Box, Button, TextField, Paper, Chip, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChatFormElements } from '../types/formElements';
import useScaledrone from '../hooks/useScaledrone';

interface Props {
	userName: string;
	userColor: string;
}

const Chat = ({ userName, userColor }: Props) => {
	const { messages, publish, currentClientId } = useScaledrone(userName, userColor);

	const handleSubmit = (event: FormEvent<ChatFormElements>) => {
		event.preventDefault();

		publish(event.currentTarget.elements.message.value);
		event.currentTarget.reset();
	};

	return (
		<Paper elevation={12}>
			<Box
				height="clamp(60vh, 600px, calc(100vh - 20rem))"
				overflow="auto"
				border="1px solid rgba(0, 0, 0, 0.23)"
				mb="16px"
				borderRadius="16px"
				padding="8.5px 14px"
				sx={{
					'&::-webkit-scrollbar': {
						width: '4px',
					},
					'&::-webkit-scrollbar-track': {
						background: 'transparent',
					},
					'&::-webkit-scrollbar-thumb': {
						background: '#1976d2',
						borderRadius: '4px',
					},
					'&::-webkit-scrollbar-thumb:hover': {
						background: '#145ea8',
					},
				}}>
				<Box
					overflow="hidden"
					width="100%"
					minHeight="100%"
					display="flex"
					flexDirection="column"
					justifyContent="flex-end"
					alignItems="flex-start"
					gap="8px">
					{messages.map((message, key) => (
						<Box
							key={key}
							alignSelf={message.clientId === currentClientId ? 'flex-end' : 'flex-start'}
							display="flex"
							flexDirection="column"
							maxWidth="100%">
							<Box display="flex" flexDirection="row" fontSize="0.75rem" color="grey" ml="2px">
								<Typography component="span">{`${message.member.clientData.name}${
									message.clientId === currentClientId ? ' (me)' : ''
								}`}</Typography>
								<Typography component="span" mx="4px" aria-hidden="true">
									&middot;
								</Typography>
								<Typography component="span">
									{new Date(message.timestamp * 1000).toLocaleTimeString('hr-HR', {
										hour: '2-digit',
										minute: '2-digit',
									})}
								</Typography>
							</Box>
							<Chip
								label={message.data}
								variant="filled"
								sx={{ backgroundColor: message.member.clientData.color }}
							/>
						</Box>
					))}
				</Box>
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
	);
};

export default Chat;
