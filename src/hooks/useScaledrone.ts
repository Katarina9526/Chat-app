import { useEffect, useState, useMemo } from 'react';
import { Drone, Message } from '../types/scaledrone';

const useScaledrone = (userName: string) => {
	const [messages, setMessages] = useState<Message[]>([]);

	const drone: Drone = useMemo(
		() =>
			// @ts-ignore
			new Scaledrone(import.meta.env.VITE_SCALEDRONE_CHANNEL_ID, {
				data: {
					name: userName,
				},
			}),
		[userName]
	);

	const room = useMemo(() => drone.subscribe(import.meta.env.VITE_SCALEDRONE_ROOM_NAME), []);

	useEffect(() => {
		room.on('message', (message) => {
			console.log(message);
			setMessages((prev) => [...prev, message as Message]);
		});
	}, []);

	const publish = (message: string) => {
		drone.publish({
			room: import.meta.env.VITE_SCALEDRONE_ROOM_NAME,
			message: message,
		});
	};

	return { messages, publish, currentClientId: drone.clientId };
};

export default useScaledrone;
