'use strict';

class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
        };
        this.errors = {
            name: 'Имя должно содержать только буквы',
            phone: 'Телефон должен иметь вид +7(000)000-0000',
            email: ' E-mail должен иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru',
        };
        this.errorClass = 'error-msg';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }
    _validateForm() {
        const errors = [...this.form.querySelectorAll(`${this.errorClass}`)];
        errors.forEach((error) => {
            error.remove();
        });

        const formField = [...this.form.querySelectorAll('input')];
        formField.forEach(field => {
            this._validate(field);
        });

        const invalidInputs = [...this.form.querySelectorAll('.invalid')];
        if (invalidInputs.length) {
            this.valid = true;
        }
    }
    _validate(field) {
        if (this.patterns[field.name]) {
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid');
                this._addErrorMsg(field);
                this._watchField(field);
            }
        }
    }
    _addErrorMsg(field) {
        const error = `<div class="${this.errorClass}">${this.errors[field.name]}</div>`;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }
    _watchField(field) {
        field.addEventListener('input', () => {
            const error = field.parentNode.querySelector(`.${this.errorClass}`);
            if (this.patterns[field.name].test(field.value)) {
                field.classList.remove('invalid');
                field.classList.remove('valid');
                if (error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!error) {
                    this._addErrorMsg(field);
                }
            }
        })
    } 
}