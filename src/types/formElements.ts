interface FormElements extends HTMLFormControlsCollection {
	message: HTMLInputElement;
}

export interface CustomFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}
