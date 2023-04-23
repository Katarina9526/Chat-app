interface ChatElements extends HTMLFormControlsCollection {
	message: HTMLInputElement;
}

export interface ChatFormElements extends HTMLFormElement {
	readonly elements: ChatElements;
}

interface LoginElements extends HTMLFormControlsCollection {
	name: HTMLInputElement;
}

export interface LoginFormElements extends HTMLFormElement {
	readonly elements: LoginElements;
}
