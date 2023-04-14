/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_SCALEDRONE_CHANNEL_ID: string;
	readonly VITE_SCALEDRONE_ROOM_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
