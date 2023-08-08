function calculerMoyenne(array) {
    if (array.length === 0) {
        console.log("Le tableau est vide");
        return;
    }

    let somme = 0;
    let N = array.length;

    for (let i = 0; i < N; i++) {
        somme += array[i];
    }

    let moyenne = somme / N;
    console.log("La moyenne du tableau est ", moyenne);
}

calculerMoyenne([1, 2, 3, 4, 5]);