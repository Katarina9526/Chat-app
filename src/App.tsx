import * as React from 'react';
import './App.css';
import useScaledrone from './hooks/useScaledrone';

interface FormElements extends HTMLFormControlsCollection {
	message: HTMLInputElement;
}

interface CustomFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

function App() {
	const { messages, publish } = useScaledrone();

	const handleSubmit = (event: React.FormEvent<CustomFormElement>) => {
		event.preventDefault();

		publish(event.currentTarget.elements.message.value);
		event.currentTarget.reset();
	};

	return (
		<div className="App">
			{
				<div>
					<div>
						{messages.map((message, key) => (
							<div key={key}>
								<span>{message.data}</span>
							</div>
						))}
					</div>
					<form onSubmit={handleSubmit}>
						<input name="message" />
						<button type="submit">Send</button>
					</form>
				</div>
			}
		</div>
	);
}

export default App;
