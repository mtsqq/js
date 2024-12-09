// Generování náhodného čísla v intervalu <-20, 20>
let randomNumber = Math.floor(Math.random() * 41) - 20; // Generuje číslo mezi -20 a 20

// Funkce pro určení pozice čísla vůči intervalu <-10, 10>
function checkInterval(number) {
    if (number < -10) {
        return "vně intervalu";
    } else if (number > 10) {
        return "vně intervalu";
    } else if (number === -10 || number === 10) {
        return "na hranici intervalu";
    } else {
        return "uvnitř intervalu";
    }
}

// Výstup
console.log("Vygenerované číslo: " + randomNumber);
console.log("Číslo je: " + checkInterval(randomNumber));

