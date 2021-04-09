export default class People {
    constructor(id, nom, prenom) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;

        this.dateNaissance = null;

        console.log('Hello, je suis le constructeur de People');
    }

    // Accesseurs et Mutateurs (getter / setter)
    setId(id) {
        this.id = id;
    }

    setNom(nom) {
        if (this.nom === '' || this.nom === undefined) {
            this.nom = nom;
        }
    }

    setPrenom(prenom) {
        this.prenom = prenom;
    }

    setDateNaissance(date) {
        this.dateNaissance = date;
    }

    getId() {
        return this.id;
    }

    getNom() {
        return this.nom.toUpperCase();
    }

    getPrenom() {
        return this.prenom;
    }

    getDateNaissance() {
        return this.dateNaissance;
    }

    sayHello() {
        return this.prenom + ' ' + this.nom + ' vous dit bonjour !';
    }
}

// Test instanciation de classe
const people1 = new People(1, 'Aubert', 'Jean-Luc');
people1.setDateNaissance(new Date([1968, 3, 30]));

// Calculer l'âge du capitaine
const age = new Date().getFullYear() - people1.getDateNaissance().getFullYear();
console.log('Tu as : ', age);
// People says hello
console.log(`${people1.sayHello()}`);
