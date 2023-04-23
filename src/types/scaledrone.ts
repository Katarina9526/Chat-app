type DroneEventKey = 'open' | 'message' | 'error' | 'close' | 'disconnect' | 'reconnect';
type DroneEventCallback = (data: unknown) => void;

interface PublishMetadata {
	room: string;
	message: string;
}

export interface Drone {
	subscribe: (roomName: string) => Room;
	publish: (metadata: PublishMetadata) => void;
	on: (eventKey: DroneEventKey, eventCallback: DroneEventCallback) => void;
	clientId: string;
}

type RoomEventKey = 'message' | 'members' | 'member_join' | 'member_leave';
type RoomEventCallback = (data: unknown) => void;

interface Room {
	on: (eventKey: RoomEventKey, eventCallback: RoomEventCallback) => void;
}

export interface Message {
	data: string | number;
	id: string;
	timestamp: number;
	clientId: string;
	member: Member;
}

export interface Member {
	id: string;
	clientData: ClientData;
}

interface ClientData {
	name: string;
}
