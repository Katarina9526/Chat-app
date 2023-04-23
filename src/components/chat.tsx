import { FormEvent } from 'react';
import { Box, Button, TextField, Paper, Chip, Typography, css } from '@mui/material';
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
					<Box
						key={key}
						alignSelf={message.clientId === currentClientId ? 'flex-end' : 'flex-start'}
						display="flex"
						flexDirection="column">
						<Typography component="span" fontSize="0.75rem" color="grey" ml="2px">{`${
							message.member.clientData.name
						}${message.clientId === currentClientId ? ' (me)' : ''}`}</Typography>
						<Chip label={message.data} variant="filled" css={chipStyles(message.member.clientData.color)} />
					</Box>
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
	);
};

export default Chat;

const chipStyles = (color: string) =>
	css({
		backgroundColor: color,
	});
