/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto
MILESTONE 0
Creare l’array di oggetti con le informazioni fornite
MILESTONE 1
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1
Trasformare la stringa foto in una immagine effettiva
BONUS 2
Organizzare i singoli membri in card/schede
Consigli del giorno
Ragioniamo come sempre a step
Prima la logica in italiano e poi traduciamo in codice
E ricordiamoci che console.log() è nostro amico
Buon lavoro
DATI
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jp
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jp
Walter Gordon	Office Manager	walter-gordon-office-manager.jp
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jp
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg */

console.log('js-ok')
// creo un array con i membri del team e le loro informazioni
const team = [ 
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        immagine : "img/wayne-barnett-founder-ceo.jpg",     
    },

    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        immagine : "img/angela-caroll-chief-editor.jpg",
    },

    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        immagine : "img/walter-gordon-office-manager.jpg",
    },

    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        immagine : "img/angela-lopez-social-media-manager.jpg",

    },

    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        immagine : "img/scott-estrada-developer.jpg",
    },

    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        immagine : "img/barbara-ramos-graphic-designer.jpg",
    },


]

console.log(team)

