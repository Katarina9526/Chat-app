import { useState } from 'react';

interface Message {
	data: string | number;
	id: string;
	timestamp: number;
	clientId?: string;
	member?: object;
}

const useScaledrone = () => {
	const [messages, setMessages] = useState<Message[]>([]);

	// @ts-ignore
	const drone = new Scaledrone(import.meta.env.VITE_SCALEDRONE_CHANNEL_ID);
	drone.on('open', (error: Error) => {
		if (error) {
			console.error(error);
		}
	});

	drone.on('error', (error: Error) => {
		console.error(error);
	});

	const room = drone.subscribe(import.meta.env.VITE_SCALEDRONE_ROOM_NAME);
	room.on('message', (message: Message) => {
		setMessages([...messages, message]);
	});

	const publish = (message: string) => {
		drone.publish({
			room: import.meta.env.VITE_SCALEDRONE_ROOM_NAME,
			message: message,
		});
	};

	return { messages, publish };
};

export default useScaledrone;
