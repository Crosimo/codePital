class Malade{
    constructor(nom, maladie, argent, poche, etatDeSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatDeSante = etatDeSante
        this.position = [];
    }
    goTo(lieuDep, lieuArr) {
        if (lieuArr.nom == "Debugger") {
            
            this.position.splice(this.position.indexOf(lieuDep), 1);
            this.position.push(lieuArr);
            console.log(`${this.nom} va chez ${lieuArr.nom}`);
            lieuArr.salleAttente.push(this)
            
        } else {
            this.position.splice(this.position.indexOf(lieuDep), 1);
            this.position.push(lieuArr)
            lieuArr.lieu.push(this)
            console.log(`${this.nom} va à la ${lieuArr.nom}`);
        }
    };
    takeCare() {
        if (this.poche.length != 0) {
            console.log(`${this.nom} prend ${this.poche[0]} et est en bonne santé`)
            this.etatDeSante = 'bonne santé'
        } else {
            console.log(`${this.nom} n'a pas de médicament et est toujours malade, il décède`);
            if (this.position.length > 0) {
                this.position.splice(0, 1); 
            }
            
            this.position.push('cimetierre')
            console.log(`${this.nom} est au ${this.position[0]}`);
        }
        
    }
    paye(prix) {
        this.argent -= prix;
    }
}


let marcus = new Malade("Marcus", "mal indenté", 100, [], 'malade')
let optimus = new Malade('Optimus', 'unsave', 200, [], 'malade')
let sangoku = new Malade('SanGoku',407,80,[],'malade')
let darthVader = new Malade('DarthVader','azmatique',110,[],'malade')
let semiColon = new Malade('Semicolon', 'syntaxError', 60, [], 'malade')

export { marcus, optimus, sangoku, darthVader, semiColon}