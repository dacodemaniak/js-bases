import $ from './../modules/jquery.module.js';
import People from './people.class.js';
export default class FormManager {
    constructor() {
        this.formFields = new Map();
        this.validateButton = null;
        this.formReference = null;

        this.callbackFn = null;
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

    setCallbackFn(callbackFn) {
        this.callbackFn = callbackFn;
    }

    survey() {
        this.formReference.on(
            'keyup',
            () => {
                let isFormValid = true;
                // Boucler sur les données du Map pour vérifier
                this.formFields.forEach((options, field) => {
                    //const fieldObject = $('[name="' + field + '"]');
                    const fieldObject = $(`[name="${field}"]`);
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

        this.formReference.on(
            'submit',
            (event) => {
                event.preventDefault();
                const people = new People();
                this.formFields.forEach((options, field) => {
                    const fieldObject = $(`[name="${field}"]`);
                    people[field] = fieldObject.val();
                });
                console.log('Brand new People : ' + JSON.stringify(people));
                this.callbackFn(people);
                
            }
        );

    }
}