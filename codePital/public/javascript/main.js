


// Au début, les patients sont dans un salle d'attente.traitement
import { pharmacie, traitement, doctor, chat } from "./object.js";
import { marcus, optimus, sangoku, darthVader, semiColon} from "./classes.js"




marcus.goTo('maison', doctor);
doctor.diagnostique(marcus, marcus.maladie)
marcus.goTo(doctor, pharmacie)
console.log(pharmacie.lieu);
pharmacie.traitement(marcus, traitement)


optimus.goTo('maison', doctor);
doctor.diagnostique(optimus, optimus.maladie)
optimus.goTo(doctor, pharmacie)
console.log(pharmacie.lieu);
pharmacie.traitement(optimus, traitement)


sangoku.goTo('maison', doctor);
console.log(doctor.salleAttente.length);
doctor.diagnostique(sangoku, sangoku.maladie)
sangoku.goTo(doctor, pharmacie)
console.log(pharmacie.lieu);
pharmacie.traitement(sangoku, traitement)


darthVader.goTo('maison', doctor);
doctor.diagnostique(darthVader, darthVader.maladie)
darthVader.goTo(doctor, pharmacie)
console.log(pharmacie.lieu);
pharmacie.traitement(darthVader, traitement)




semiColon.goTo('maison', doctor)
doctor.diagnostique(semiColon, marcus.maladie)
semiColon.goTo(doctor, pharmacie)
console.log(pharmacie.lieu);
pharmacie.traitement(semiColon, traitement)

console.log(doctor.salleAttente.length);