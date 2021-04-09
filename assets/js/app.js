import $ from './modules/jquery.module.js';
import People from './classes/people.class.js';
import FormManager from './classes/form.class.js';
import Api from './classes/api.class.js';

/**
 * Entry point of our JS application
 */

const api = new Api();
const datas = api.getPeople();
datas.then((peoples) => {
    console.log(`Peoples are ready ${peoples.length}`);
});

const loadData = async () => {
    const peoples = await api.getPeople(); // People datas are ready...
}
loadData();

const form = new FormManager(); // Mon formulaire...

function create(element) {
    return document.createElement(element);
}

const createDOMElement = (element) => document.createElement(element);

const createDOMWithBody = (element) => {
    return document.createElement(element);
}

const newPeople = (people) => {
    console.log(`Je récupère le people ${people.getNom()} à partir du formulaire`);
    names.push(people);
    console.log(names);
    $('tbody tr').remove();
    buildTable();
}

const buildTable = () => {

    // Manipulate DOM to place total rows of names array
    const totalRows = document.getElementById('total-rows');
    totalRows.innerHTML = '<strong>' + names.length + '</strong> éléments';

    // Loop over names to create as many element as needed
    const tableBody = document.querySelector('tbody');

    for (const name of names) {
        const rowTemplate = document.getElementById('row-template');
        const row = rowTemplate.content.cloneNode(true);
        
        // Get dividers of the row
        const dividers = row.children[0];
        const jqueryDividers = $(row).children('td');
        [...dividers.children].forEach((divider, index) => {
            switch (index) {
                case 1:
                    divider.textContent = name.getId();
                    break;
                case 2:
                    divider.textContent = name.getNom();
                    break;
                case 3:
                    divider.textContent = name.getPrenom();
                    break;
            }
        });

        tableBody.appendChild(row);
    }
}

// Array setting
const names = [
    new People(10, 'Aubert', 'Jean-Luc'),
    new People(1, 'Bond', 'James'),
    new People(4, 'Lawson', 'Poppy'),
    new People(2, 'Bauer', 'Jack')
];

// Await for document loaded complete before to run
document.addEventListener(
    'DOMContentLoaded',
    (event) => { // Callback function
        // Modifier le titre du document
        $('h1').text('Personnes');
        // en Vanilla JS (JS Natif)
        //document.querySelector('h1').textContent = 'People';
        
        // Fix Firefox shadow status
        $('[check-uncheck-all]').prop('checked', false);
        $('[check-uncheck-all]').removeAttr('checked');


        names.push(new People(3, 'Mulder', 'Fox'));
        
        // Set a Map object
        const mapNames = new Map();
        mapNames.set(10, {id: 1, nom: 'Bond', prenom: 'Jean-Luc'});
        mapNames
            .set(2, {
                id: 2,
                nom: 'Aubert',
                prenom: 'James'
            })
            .set(3, {
                id: 3,
                nom: 'Dupont',
                prenom: 'Jack'
            })
            .set(1, {
                id: 3,
                nom: 'Bauer',
                prenom: 'Maurice'
            })
            .set(4, {
                id: 4,
                nom: 'Lawson',
                prenom: 'William'
            });




        
        console.log('Begin loop');
        const namesFromMap = [...mapNames.values()].sort((obj1, obj2) => {
            if (obj1.nom === obj2.nom) {
                return 0;
            }

            if (obj1.nom > obj2.nom) {
               return 1; 
            }

            return -1;
        });

        const namesOnly = [];
        mapNames.forEach((value, key) => {
            namesOnly.push(value.nom);
        });
        namesOnly.sort();
        console.log(namesOnly);
        

        buildTable();

        // Hide loader animation
        setTimeout(() => {
            $('.outer-loader').addClass('hidden');
            //const outerLoader = document.querySelector('.outer-loader');
            //outerLoader.classList.add('hidden');  
        }, 1000);

        // Listen for a change on the check-uncheck-all element
        $('[check-uncheck-all]').on(
            'change', // Event triggered
            (event) => { // Reaction as event triggered
                
                const checkbox = $(event.target);
                console.log(checkbox.prop('checked') === true ? 'coché' : 'décoché');
                if (checkbox.prop('checked') === true) {
                    $('[item-checkbox]').attr('checked', 'checked'); // Attribut
                    $('[item-checkbox]').prop('checked', true); // Etat de la boîte
                } else {
                    $('[item-checkbox]').removeAttr('checked');
                    $('[item-checkbox]').prop('checked', false);
                }
                console.log('Checkbox changed : ' + $('[item-checkbox]:checked').length);
            }
        );

        $('[item-checkbox]').on(
            'change',
            (event) => {
                const itemChecked = $('[item-checkbox]:checked').length;
                if (names.length === itemChecked) {
                    $('[check-uncheck-all]').prop('checked', true);
                    $('[check-uncheck-all]').attr('checked', 'checked');
                } else {
                    $('[check-uncheck-all]').prop('checked', false);
                    $('[check-uncheck-all]').removeAttr('checked');
                }
            }
        );

        // Instancier le formulaire
        form.addField('nom', {required: true});
        form.addField('prenom', {required: true});
        form.setFormReference('create-people');
        form.setValidateButton('validate');
        
        form.setCallbackFn(newPeople);

        form.survey();
    }
);



