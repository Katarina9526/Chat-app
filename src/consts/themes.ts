import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
	components: {
		MuiPaper: {
			styleOverrides: {
				elevation12: {
					maxWidth: '600px',
					marginInline: 'auto',
					padding: '16px',
					borderRadius: '16px',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					minHeight: '600px',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '16px',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				containedSizeLarge: {
					borderRadius: '16px',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					color: 'white',
				},
			},
		},
	},
});
