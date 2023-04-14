import { FormEvent } from 'react';
import './App.css';
import Chat from './components/chat';
import Sidebar from './components/sidebar';
import useScaledrone, { publish } from './hooks/useScaledrone';

interface FormElements extends HTMLFormControlsCollection {
	message: HTMLInputElement;
}

interface CustomFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

function App() {
	const messages = useScaledrone();

	const handleSubmit = (event: FormEvent<CustomFormElement>) => {
		event.preventDefault();

		publish(event.currentTarget.elements.message.value);
		event.currentTarget.reset();
	};

	return (
		<div className="App">
			<div>
				<div>
					{messages.map((message, key) => (
						<div key={key}>
							<span>{message.data}</span>
						</div>
					))}
				</div>
				<form onSubmit={handleSubmit}>
					<input name="message" autoComplete="off" />
					<button type="submit">Send</button>
				</form>
			</div>
			<div className="home">
				<div className="container">
					<Sidebar />
					<Chat />
				</div>
			</div>
		</div>
	);
}

export default App;
