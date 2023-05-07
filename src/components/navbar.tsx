import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarDrawer from './navbarDrawer';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../consts/general';
import { routes } from '../consts/routes';

const drawerWidth = 240;

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="h1" flexGrow={1} display={['none', 'block']}>
						{APP_NAME}
					</Typography>
					<Box display={['none', 'block']}>
						{routes.map((item) => (
							//@ts-ignore
							<Button
								key={item.path}
								LinkComponent={Link}
								to={item.path}
								color="primary"
								sx={{ color: '#fff' }}>
								{item.name}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					open={mobileOpen}
					onClose={handleDrawerToggle}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}>
					<NavbarDrawer handleDrawerToggle={handleDrawerToggle} />
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navbar;
