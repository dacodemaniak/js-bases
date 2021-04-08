import $ from './../modules/jquery.module.js';

export default class FormManager {
    constructor() {
        this.formFields = new Map();
        this.validateButton = null;
        this.formReference = null;
    }

    addField(fieldName, ...options) {
        this.formFields.set(fieldName, options);
    }

    setFormReference(formReference) {
        this.formReference = $('#' + formReference);
    }

    setValidateButton(buttonName) {
        this.validateButton = $('[name="' + buttonName + '"]'); // [name="truc"]
    }

    survey() {
        this.formReference.on(
            'keyup',
            () => {
                let isFormValid = true;
                // Boucler sur les données du Map pour vérifier
                this.formFields.forEach((options, field) => {
                    const fieldObject = $('[name="' + field + '"]');
                    console.log(`Le champ ${field} contient : ${fieldObject.val()}`);
                    console.log('Le champ ' + field + ' contient : ' + fieldObject.val());
                    if (fieldObject.val().trim().length === 0) {
                        isFormValid = false;
                    }
                });
                if (isFormValid) {
                    this.validateButton.removeAttr('disabled');
                } else {
                    this.validateButton.attr('disabled', 'disabled');
                }
            }
        );
    }
}