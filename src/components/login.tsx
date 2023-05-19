import { Paper, Box, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { FormEvent } from 'react';
import { LoginFormElements } from '../types/formElements';

interface Props {
	handleLogin: (event: FormEvent<LoginFormElements>) => void;
}

const Login = ({ handleLogin }: Props) => {
	return (
		<Paper elevation={12} sx={{ width: 'min(100%, 320px)', }}>
			<Box component="form" display="flex" flexDirection="column" gap="8px" onSubmit={handleLogin}>
				<TextField
					name="name"
					autoComplete="off"
					variant="outlined"
					fullWidth
					color="primary"
					size="small"
					label="Name"
					placeholder="Enter your name"
				/>
				<Button type="submit" variant="contained" color="primary" size="large" endIcon={<LoginIcon />}>
					Login
				</Button>
			</Box>
		</Paper>
	);
};

export default Login;
