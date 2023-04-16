type DroneEventKey = 'open' | 'message' | 'error' | 'close' | 'disconnect' | 'reconnect';
type DroneEventCallback = (error: Error) => void | ((event: any) => void);

interface PublishMetadata {
	room: string;
	message: string;
}

export interface Drone {
	subscribe: (roomName: string) => Room;
	publish: (metadata: PublishMetadata) => void;
	on: (eventKey: DroneEventKey, eventCallback: DroneEventCallback) => void;
}

type RoomEventKey = 'message';
type RoomEventCallback = (message: Message) => void;

interface Room {
	on: (eventKey: RoomEventKey, eventCallback: RoomEventCallback) => void;
}

export interface Message {
	data: string | number;
	id: string;
	timestamp: number;
	clientId?: string;
	member?: object;
}
