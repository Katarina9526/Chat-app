import { useEffect, useState } from 'react';
import { Drone, Message } from '../types/scaledrone';

// @ts-ignore
const drone: Drone = new Scaledrone(import.meta.env.VITE_SCALEDRONE_CHANNEL_ID);
const room = drone.subscribe(import.meta.env.VITE_SCALEDRONE_ROOM_NAME);

const useScaledrone = () => {
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		room.on('message', (message: Message) => {
			setMessages((prev) => [...prev, message]);
		});
	}, []);

	return messages;
};

export default useScaledrone;

export const publish = (message: string) => {
	drone.publish({
		room: import.meta.env.VITE_SCALEDRONE_ROOM_NAME,
		message: message,
	});
};
