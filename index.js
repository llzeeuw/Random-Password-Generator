/* Define character set for random passwords*/

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

/* Allow user to switch between Dark and Light themes*/
    /* Retrieve Dark/Light button from HTML file and store  in a JavaScript variable*/
    let darkLightBtnEL = document.querySelector("[data-theme-toggle]");

    darkLightBtnEL.addEventListener("click", () => {
      let newTheme = document.querySelector("html").getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.querySelector("html").setAttribute("data-theme", newTheme);
    });


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

      /* Get a reference to the slider and sliderNumber DOM elements */
      const pwSliderEl = document.getElementById("pwslider-el");
      let pwSliderDisplayEl = document.getElementById("pwslider-display-el");

      /* Create an input event listener for slider element */ 

      pwSliderEl.addEventListener("input", function () {
        // Display the value of the slider
        pwSliderDisplayEl.textContent = `${pwSliderEl.value}`;
        // Assign user input value to passwordLength 
        passwordLength = pwSliderEl.value;
      });



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

/* Allow user to copy passwords by clicking on them */
      function copyPassword(elementId) {
        let text = document.getElementById(elementId).innerText;
        navigator.clipboard.writeText(text)
            alert('Password copied to clipboard');
      }
      //Create onclick event which calss the copePassword function
      passwordEL1.addEventListener("click", () => copyPassword("password-el1"));
      passwordEL2.addEventListener("click", () => copyPassword("password-el2"));


/* Allow user to clear passwords with the Clear Passwords button */
    /* Retrieve Clear Passwords button from HTML file and store  in a JavaScript variable*/
    let clearPasswordsBtnEL = document.getElementById("clearPasswordsBtn-el");


    /* Create on-click functionality Clear Passwords button */ 
    clearPasswordsBtnEL.addEventListener("click", (clearPasswords));

    /* Create Clear passwords function */
    function clearPasswords(){
        passwordEL1.innerHTML = " ";
        passwordEL2.innerHTML = " ";
    }

