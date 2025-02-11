/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive(){
        return this.budget >= 100_000_000;
    }
}

const movie0 = new Movie ('Goodfellas', 'Martin Scorsese', 25_000_000);
console.log(movie0);
console.log(movie0.wasExpensive());

const movie1 = new Movie ('Spectre', 'Sam Mendes', 245_000_000);
console.log(movie1);
console.log(movie1.wasExpensive());