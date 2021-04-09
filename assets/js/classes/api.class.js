import People from './people.class.js';
export default class Api {
    constructor() {}

    getPeople() {
        return fetch('/assets/fake-datas/people.json')
            .then((response) => {
                console.log(`Got response from backend`);
                if (response.ok) {
                    console.log(`Server responds ok`);
                    return response.json(); // Contenu de la réponse... (ici, les peoples de people.json)
                }
                throw new Error(`Something went wrong while fetching : ${response.status}`);
            })
            .then((peoples) => {
                console.log(`Peoples are : ${JSON.stringify(peoples)}`);
                //moment().tz('Europe/Paris');
                const peopleList = peoples.map((jsonElement) => { // map transforme un tableau en un autre tableau
                    const people = new People();
                    people.setId(jsonElement.id);
                    people.setNom(jsonElement.nom);
                    people.setPrenom(jsonElement.prenom);
                    // Special mention to birthDate (@todo)
                    const momentDate = moment(jsonElement.dateNaissance, 'DD/MM/YYYY');
                    people.setDateNaissance(momentDate.toDate());
                    return people;
                })
                .filter((people) => people.getDateNaissance().getFullYear() > 1990);
                
                console.log(`Real people are : ${JSON.stringify(peopleList)}`);
                console.log(`${peopleList[0].sayHello()}`);
                return peopleList;
            });

        console.log(`I play with what i want...`);
    }
}