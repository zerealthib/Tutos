function trouverMaximum(array) {
    if (array.length === 0) {
        console.log("Le tableau est vide");
        return;
    }

    let maximum = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }

    console.log("Le plus grand nombre du tableau est ", maximum);
}

// Pour tester la fonction :
trouverMaximum([10, 20, 4, 45, 99]);