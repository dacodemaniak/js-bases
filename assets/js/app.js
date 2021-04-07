/**
 * Entry point of our JS application
 */

function create(element) {
    return document.createElement(element);
}

const createDOMElement = (element) => document.createElement(element);

const createDOMWithBody = (element) => {
    return document.createElement(element);
}

// Await for document loaded complete before to run
document.addEventListener(
    'DOMContentLoaded',
    (event) => { // Callback function
        // Array setting
        const names = [
            'Jean-Luc',
            'Géraldine',
            'Hafez'
        ];

        names.push('Maikel');
        
        // Manipulate DOM to place total rows of names array
        const totalRows = document.getElementById('total-rows');
        totalRows.innerHTML = '<strong>' + names.length + '</strong> éléments';

        // Loop over names to create as many element as needed
        const tableBody = document.querySelector('tbody');

        for (const name of names) {
            // 1. Create a TR element
            const tableRow = createDOMElement('tr');

            // 2. Create a TD element
            const tableDivider = createDOMWithBody('td');
            tableDivider.textContent = name;

            // 3. Set tableDivider as child of tableRow
            tableRow.appendChild(tableDivider);

            // 4. Attach full Element to tbody
            tableBody.appendChild(tableRow);
        }
    }
);

const helloWho = 'Hello World';
let yourName = 'Jean-Luc';
yourName = 'JLA';



/**  Output our brand new array
for (let i=0; i < names.length; i++) {
    console.log('Bonjour ' + names[i]);
}

names.forEach((name, count) => {
    console.log('Hola ' + name + '(' + count + ')');
});

for (const name of names) {
    console.log('Hello ' + name);
}

//names.forEach(function (name) {} )
*/



