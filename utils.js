function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function changeToCapitalLetters(s){
    return s.upper();
}
module.exports = { 
    generateRandomNumber,
    celciusToFahrenheit,
 };
