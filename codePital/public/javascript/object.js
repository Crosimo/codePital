let chat = {
    nom: 'Esteban',
    race: 'Sphynx',
    miaule(i) {
        setTimeout(() => {
            console.log(`${chat.nom} a miaouuuuu`);
        }, i);
    }
    
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
        if (this.cabinet.includes(patient)) {
            for (let i = 2000; i < 8000; i += 2000)
        {
            chat.miaule(i)
        }
        }
        
        
        patient.etatDeSante = "traitement";
        if (patient.argent < this.prixCons) {
            alert("you filthy bastard")
        } else {
            patient.paye(this.prixCons);
            
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
        console.log(`${patient.nom} a reçu une ordonnance pour ${traitement} pour aller mieux`);
        console.log(`${patient.nom} est sorti du cabinet`);
        patient.etatDeSante = 'malade';
    }
}







let pharmacie = {
    nom: 'pharmacie',
    lieu: [],
    traitement(personne, traitement) {
        switch (traitement) {
        case 'ctrl+maj+f': return this.prix(60, 'ctrl+maj+f', personne)
        case  'saveOnFocusChange' : return this.prix(100,'saveOnFocusChange', personne)
        case 'CheckLinkRelation' : return this.prix(35,'CheckLinkRelation', personne)
        case 'Ventoline' :return this.prix(40, 'Ventoline', personne)
        case 'f12+doc' : return this.prix(20,'f12+doc', personne)
       }
    },
    prix(prix, medicament, personne) {
        if (personne.argent < prix) {
            this.lieu.splice(0, 1)
            console.log(`${personne.nom} a no tune, donc no medoc`);
            personne.takeCare()
        } else {
            personne.poche.push(medicament)
            this.lieu.splice(0, 1);
            console.log(`${personne.nom} a payé ${prix} et a obtenu ${medicament}, gg`);
            personne.takeCare();
        }
    }
    

}

export { pharmacie, traitement, doctor, chat}