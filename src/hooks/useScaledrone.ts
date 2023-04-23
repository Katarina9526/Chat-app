import { useEffect, useState, useMemo } from 'react';
import { Drone, Message } from '../types/scaledrone';

const useScaledrone = (userName: string, userColor: string) => {
	const [messages, setMessages] = useState<Message[]>([]);

	const drone: Drone = useMemo(
		() =>
			// @ts-ignore
			new Scaledrone(import.meta.env.VITE_SCALEDRONE_CHANNEL_ID, {
				data: {
					name: userName,
					color: userColor,
				},
			}),
		[userName]
	);

	const room = useMemo(() => drone.subscribe(import.meta.env.VITE_SCALEDRONE_ROOM_NAME), []);

	useEffect(() => {
		room.on('message', (message) => {
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
