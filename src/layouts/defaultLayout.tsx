import { ReactNode } from 'react';
import Navbar from '../components/navbar';

interface Props {
	children?: ReactNode;
}

const DefaultLayout = ({ children }: Props) => (
	<>
		<Navbar />
		{children}
	</>
);

export default DefaultLayout;
