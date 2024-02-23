/* Define character set for random passwords*/

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

/* Declare variable in which password length can be stored. Standard length is set at 12.*/
let passwordLength = 12;

/* Retrieve password elements from HTML file and store them in a JavaScript variable*/
let passwordEL1 = document.getElementById("password-el1");
let passwordEL2 = document.getElementById("password-el2");

/* Retrieve Generate Password button from HTML file and store  in a JavaScript variable*/
let genPasswordsBtnEL = document.getElementById("genPasswordsBtn-el");

/* Create on-click functionality Generate Password button */ 
genPasswordsBtnEL.addEventListener("click", (displayPasswords));




/* Set password length according to user input */ 



/* Generate password function */ 
function generatePasswords(){
    //Declare password and assign an empty string to it
    let password = "";
    // Set password length according to user input
    for (let i = 0; i < passwordLength; i++){
    //Generate random password by looping over characters array
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
    }
    return password;
}

/* Store passwords in PasswordEL's and show them in the HTML */ 
function displayPasswords(){
passwordEL1.innerHTML = generatePasswords();
passwordEL2.innerHTML = generatePasswords();
}


/* Allow user to clear passwords with the Clear Passwords button */
/* Retrieve Clear Passwords button from HTML file and store  in a JavaScript variable*/
let clearPasswordsBtnEL = document.getElementById("clearPasswordsBtn-el");


/* Create on-click functionality Clear Passwords button */ 
clearPasswordsBtnEL.addEventListener("click", (clearPasswords));

/* Create Clear passwords function */
function clearPasswords(){
    document.getElementById("passwordEL1").innerHTML = " ";
    document.getElementById("passwordEL2").innerHTML = " ";
}


