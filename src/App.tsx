import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './consts/routes';

function App() {
	const router = createBrowserRouter(
		routes.map((item) => ({
			key: item.path,
			path: item.path,
			element: item.component,
		}))
	);

	return <RouterProvider router={router} />;
}

export default App;
