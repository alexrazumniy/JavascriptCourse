class Input {
    constructor(options) {
        const {
            name,
            label,
            placeholder,
            type,
        } = options;

        this.input = document.createElement('input');
        this.errorMessage = document.createElement('span');
        console.log(this);

        this.input.name = name;
        this.label = label;
        this.input.placeholder = placeholder;
        this.control = this.createControl(onInput, onChange);
    }

    createControl() {
        const container = document.createElement('div');
        const label = document.createElement('label');

        const inputId = `_${this.name}`;

        container.classList.add(input-container);
        this.errorMessage.classList.add('error-message');
        this.input.classList.add('input');

        this.input.id = inputId;
        this.label.setAttribute('for', inputId);

        label.innerText = this.label;

        container.append(label, this.input, this.errorMessage)
    }


}
