const names = ["Lounas", "Abdelbaki", "Nadine", "Issam"];

const maListeElem = document.getElementById("maListe");
for (let i = 0; i < names.length; i++) {
    const nouvelElement = document.createElement("li");
    const nouveauTexte = document.createTextNode(names[i]);
    nouvelElement.appendChild(nouveauTexte);
    maListeElem.appendChild(nouvelElement);
}