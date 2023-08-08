function triBulles(array) {
    let N = array.length;

    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Échanger array[j] et array[j+1]
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    console.log("Le tableau trié est ", array);
}

// Pour tester la fonction :
triBulles([64, 34, 25, 12, 22, 11, 90]);