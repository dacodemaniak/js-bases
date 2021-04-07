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
            {
                id: 1,
                nom: 'Aubert',
                prenom: 'Jean-Luc'
            },
            {
                id: 2,
                nom: 'Bond',
                prenom: 'James'
            },
            {
                id: 3,
                nom: 'Bauer',
                prenom: 'Jack'
            },
            {
                id: 3,
                nom: 'Bauer',
                prenom: 'Jack'
            },
        ];

        names.push({
            id: 4,
            nom: 'Lawson',
            prenom: 'William'
        });
        
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


        // Manipulate DOM to place total rows of names array
        const totalRows = document.getElementById('total-rows');
        totalRows.innerHTML = '<strong>' + names.length + '</strong> éléments';

        // Loop over names to create as many element as needed
        const tableBody = document.querySelector('tbody');
        
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
        
        for (const name of namesFromMap) {
            console.log(`Objet name => ${JSON.stringify(name)}`);
            // 1. Create a TR element
            const tableRow = createDOMElement('tr');

            // 2. Create a TD element
            const tableDivider = createDOMWithBody('td');
            tableDivider.textContent = name.nom;

            // 3. Set tableDivider as child of tableRow
            tableRow.appendChild(tableDivider);

            // 4. Attach full Element to tbody
            tableBody.appendChild(tableRow);
        }

        // Hide loader animation
        setTimeout(() => {
            const outerLoader = document.querySelector('.outer-loader');
            outerLoader.classList.add('hidden');  
        }, 1000);

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



