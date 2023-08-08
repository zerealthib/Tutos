const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Entrez des nombres séparés par des virgules: ", function(str) {
    let strArray = str.split(',');
    let array = strArray.map(Number);

    if (array.length === 0) {
        console.log("Le tableau est vide");
        readline.close();
        return;
    }

    let maximum = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }

    console.log("Le plus grand nombre du tableau est ", maximum);
    readline.close();
});