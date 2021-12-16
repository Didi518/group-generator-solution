console.log("hello world");

//je créé mon prénom

//fonction ajout d'un participant
function addParticipant(event) {

    //j'empêche le fonctionnement par défaut du bouton pour éviter de recharger la page
    event.preventDefault();

    //je récupère l'input du participant
    const nameInputElt = document.getElementById('nameInput');

    // alternative pour récupérer l'input à partir de son name

    //const nameInputElt2 = document.querySelector('input[name="nameInput"])

    //je créé le prénom
    const participantName = nameInputElt.value.trim();

    //si le nom est vide j'affiche un message d'erreur
    if (participantName === '') {
        alert('Le nom est obligatoire');
        return;
    }

    console.log(participantName);

    //je créé un élément li qui contient mon prénom
    const participantElt = `
<li>${participantName}</li>
`;

    //je récupère l'élement ul qui contient la liste des participants
    const participantListElt = document.getElementById('participantList');
    //j'ajoute l'élément li à l'élément ul
    participantListElt.innerHTML = participantListElt.innerHTML + participantElt;
    //je vide l'input nameInput
    nameInputElt.value = "";
}

//je récupère le formulaire d'ajout de nom
const addNameFormElt = document.getElementById('addNameForm');
//quand on soumet le formulaire, je veux que la fonction addParticipant soit appelée
addNameFormElt.addEventListener('submit', addParticipant);