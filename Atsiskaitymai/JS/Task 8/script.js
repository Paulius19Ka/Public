/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    
    constructor(num0, num1){
        this.num0 = num0;
        this.num1 = num1;

        this.sum = this.sum(this.num0, this.num1);
        this.subtraction = this.subtraction(this.num0, this.num1);
        this.multiplication = this.multiplication(this.num0, this.num1);
        this.division = this.division(this.num0, this.num1);
    }
    sum(num0, num1){
        return num0 + num1;
    }
    subtraction(num0, num1){
        return num0 - num1;
    }
    multiplication(num0, num1){
        return num0 * num1;
    }
    division(num0, num1){
        if(num1 !== 0){
            return num0 / num1; 
        } else {
            return 'Dalyba is nulio negalima!'
        }
    }
}
const calculatorObject = new Calculator(10, 3);
console.log(calculatorObject);