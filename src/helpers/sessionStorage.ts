const keys = { userName: 'USER_NAME', userColor: 'USER_COLOR' };

class SessionStorage {
	public static getUserName() {
		return sessionStorage.getItem(keys.userName);
	}

	public static setUserName(userName: string) {
		sessionStorage.setItem(keys.userName, userName);
	}

	public static getUserColor() {
		return sessionStorage.getItem(keys.userColor);
	}

	public static setUserColor(userColor: string) {
		sessionStorage.setItem(keys.userColor, userColor);
	}
}

export default SessionStorage;
