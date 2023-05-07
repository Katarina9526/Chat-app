import Home from '../pages/home';
import About from '../pages/about';
import DefaultLayout from '../layouts/defaultLayout';

interface Routes {
	path: string;
	name: string;
	component: JSX.Element;
}

export const routes: Routes[] = [
	{
		path: '/',
		name: 'Home',
		component: (
			<DefaultLayout>
				<Home />
			</DefaultLayout>
		),
	},
	{
		path: '/about',
		name: 'About',
		component: (
			<DefaultLayout>
				<About />
			</DefaultLayout>
		),
	},
];
