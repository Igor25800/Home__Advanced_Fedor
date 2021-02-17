
// //// Завдання 1.
console.log('Завдання 1');
class Worker  {
    constructor(name,surname,rate,days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary(){
        return this.rate * this.days
    }
}
const worker = new Worker('Ivan', 'Ivanov', 10, 31);

console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31
 
console.log('------------------------------------------------------');
console.log('Завдання 2');

// Завдання 2.
class MyString {
    reverse(name){
       return name.split('').reverse().join('')
    }
    ucFirst(name){
        return name[0].toUpperCase() + name.substring(1)
    }
    ucWords(name){
        return name.split(' ').map(lord => lord[0].toUpperCase() + lord.substring(1)).join(' ')
    }
}   
const str = new MyString();

console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

