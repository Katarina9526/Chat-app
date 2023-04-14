export interface Message {
	data: string | number;
	id: string;
	timestamp: number;
	clientId?: string;
	member?: object;
}
