export default class Api {
    constructor() {}

    getPeople() {
        fetch('/assets/fake-datas/people.json')
            .then((response) => {
                console.log(`Got response from backend`);
                if (response.ok) {
                    console.log(`Server responds ok`);
                    return response.json(); // Contenu de la réponse... (ici, les peoples de people.json)
                }
            })
            .then((peoples) => {
                console.log(`Peoples are : ${JSON.stringify(peoples)}`);
            });

        console.log(`I play with what i want...`);
    }
}