import { Box, Typography, Grid } from '@mui/material';
import loginImg from '../images/login.png';
import chatImg from '../images/chat.png';

const About = () => {
	return (
		<Box maxWidth="1200px" mt="108px" mx="auto" px="16px">
			<Typography component="h2" variant="h2" fontSize="3rem" mb="16px" >About ShareSms</Typography>
			<Typography maxWidth="600px">
				Welcome to our chat application! ShareSms is a platform where you can connect with friends, family, and colleagues in real-time.
			</Typography>
			<Typography maxWidth="600px">Feel free to start a conversation, send messages, and stay connected.</Typography>
			<Grid container spacing={2} my="16px">
				<Grid item xs={12} md={6}>
					<Box component="figure">
						<Box
							component="img"
							src={loginImg}
							alt="Login"
							loading="lazy"
							p="8px"
							border="2px solid white"
							borderRadius="16px"
							boxSizing="border-box"
						/>
						<Typography component="figcaption">
							<Typography component="b" fontWeight="bold">Step 1: </Typography>Insert your username
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box component="figure">
						<Box
							component="img"
							src={chatImg}
							alt="Chat"
							loading="lazy"
							p="8px"
							border="2px solid white"
							borderRadius="16px"
							boxSizing="border-box"
						/>
						<Typography component="figcaption">
							<Typography component="b" fontWeight="bold">Step 2: </Typography>Start and enjoy your conversation
						</Typography>
					</Box>
				</Grid>
			</Grid>
			
		</Box>
	);
}

export default About;
