let chat = {
    nom: 'Esteban',
    race: 'Sphynx',
    miaule : setInterval(function() {
        console.log(`${chat.nom} a miaouuuuu`);
    },2000) 
      
        //     for (let i = 2000; i < 8000; i += 2000)
        // {
        //     setTimeout(() => {
        //         console.log(`${chat.nom} a miaouuuuu`);
        //     }, i);
        // }
        
       
    }
    

let cimetierre = {
    nom: "cimetierre",
    lieu: []
}
let traitement;

let doctor = {
    nom: 'Debugger',
    argent: 0,
    cabinet: [chat.nom],
    prixCons: 50,
    salleAttente: [],
    diagnostique(patient, maladie) {
        this.patienTIn(patient);
        
        switch (maladie) {
            case 'mal indenté': traitement = `ctrl+maj+f`;
                break;
            
                
            case 'unsave': traitement = `saveOnFocusChange`;
                break;
                
            case 404: traitement = `CheckLinkRelation`;
                break;
                
            case 'azmatique': traitement = `Ventoline`;
                break;
                
            case 'syntaxError': traitement = `f12+doc`;
                break;

        }
       
        
        
        patient.etatDeSante = "traitement";
        if (patient.argent < this.prixCons) {
            alert("you filthy bastard")
        } else {
            patient.paye(this.prixCons);
            doctor.argent += this.priCons;
            
        }
        
        this.patientOut(patient, traitement);
    },
    patienTIn(patient) {
        this.cabinet.push(patient)
        console.log(`${patient.nom} est entré dans le cabinet`);
        this.salleAttente.splice(this.salleAttente.indexOf(patient), 1)
    },
    patientOut(patient , traitement) {
        this.cabinet.splice(this.cabinet.indexOf(patient), 1)
        console.log(`${patient.nom} a reçu une ordonnance de ${traitement} pour aller mieux`);
        console.log(`${patient.nom} est sorti du cabinet`);
        patient.etatDeSante = 'malade';
    }
}







let pharmacie = {
    nom: 'pharmacie',
    lieu: [],
    caisse : 0,
    traitement(personne, traitement) {
        
        switch (traitement) {
        case 'ctrl+maj+f': return this.prix(60, traitement, personne)
        case  'saveOnFocusChange' : return this.prix(100, traitement, personne)
        case 'CheckLinkRelation' : return this.prix(35, traitement, personne)
        case 'Ventoline' :return this.prix(40, traitement, personne)
        case 'f12+doc' : return this.prix(20,traitement, personne)
       }
    },
    prix(prix, medicament, personne) {
        if (personne.argent < prix) {
            this.lieu.splice(0, 1)
            console.log(`${personne.nom} a no tune, donc no medoc`);
            personne.takeCare(cimetierre)
        } else {
            personne.paye(prix);
            this.caisse += prix;
            personne.argent;
            personne.poche.push(medicament)
            this.lieu.splice(0, 1);
            console.log(`${personne.nom} a payé ${prix} et a obtenu ${medicament}, gg`);
            personne.takeCare(cimetierre);
        }
    }
    

}

export { pharmacie, traitement, doctor, chat}