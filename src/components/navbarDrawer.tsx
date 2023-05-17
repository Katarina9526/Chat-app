import { Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { APP_NAME } from '../consts/general';
import { routes } from '../consts/routes';
import { Link } from 'react-router-dom';

interface Props {
	handleDrawerToggle: () => void;
}

const NavbarDrawer = ({ handleDrawerToggle }: Props) => (
	<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
		<Typography variant="h6" py="16px" color="primary">
			{APP_NAME}
		</Typography>
		<Divider />
		<List>
			{routes.map((item) => (
				<ListItem key={item.path} disablePadding>
					{/* @ts-ignore */}
					<ListItemButton LinkComponent={Link} to={item.path} sx={{ textAlign: 'center' }}>
						<ListItemText primary={item.name} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</Box>
);

export default NavbarDrawer;
