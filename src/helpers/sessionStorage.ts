const userNameKey = 'USER_NAME';

class SessionStorage {
	public static getUserName() {
		return sessionStorage.getItem(userNameKey);
	}

	public static setUserName(userName: string) {
		sessionStorage.setItem(userNameKey, userName);
	}
}

export default SessionStorage;
