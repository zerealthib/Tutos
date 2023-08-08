using System;

class Program {
    static void Main() {
        Console.Write("Entrez des nombres séparés par des virgules: ");
        string str = Console.ReadLine();
        string[] strArray = str.Split(',');
        int[] array = Array.ConvertAll(strArray, int.Parse);
        
        if (array.Length == 0) {
            Console.WriteLine("Le tableau est vide");
            return;
        }

        TrouverMaximum(array);
    }

    static void TrouverMaximum(int[] array) {
        int maximum = array[0];

        for (int i = 0; i < array.Length; i++) {
            if (array[i] > maximum) {
                maximum = array[i];
            }
        }

        Console.WriteLine("Le plus grand nombre du tableau est " + maximum);
    }
}
