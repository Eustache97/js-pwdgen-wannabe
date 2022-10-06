// I dati
const suffixMail = 21;
// Chiedere nome dell'utente (Input)
const userName = prompt("Qual'è il tuo nome?");
console.log(userName, typeof userName);
document.getElementById("name").innerHTML = userName ;

// Chiedere cognome dell'utente (Input)
const userSurname =  prompt("E il tuo cognome?");
console.log(userSurname, typeof userSurname);
document.getElementById("surname").innerHTML = userSurname;

// Chiedere il colore preferito dell'utente (Input)
const userFavColor =  prompt("Qual'è il tuo colore preferito?");
console.log(userFavColor, typeof userFavColor);
document.getElementById("favcol").innerHTML = userFavColor;

// Elaborazione
const passwordGenerated = userName + userSurname + userFavColor + suffixMail;
console.log(passwordGenerated);

// Preparo la frase di output
const result = `La password è ${passwordGenerated}`;

// Scrivere output
document.getElementById("password").innerHTML = result;
