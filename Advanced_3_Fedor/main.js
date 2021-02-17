function CoffeMake(cofe){
    this.cofe = cofe
}

CoffeMake.prototype.on = function(){
    console.log(`on = ${this.cofe}`);
}
CoffeMake.prototype.off = function(){
    console.log(`off = ${this.cofe}`);
}




function drip(cofe){
    this.cofe = cofe
}

drip.prototype = CoffeMake.prototype

drip.prototype.plus = function(){
    console.log(`+++${this.cofe}+++`);
}

let myDrip = new drip('Плюс')

myDrip.on()
myDrip.off()
myDrip.plus()

console.log('-----------------------------------------------------------------------');

function carob(cofe){
    this.cofe = cofe
}

carob.prototype = CoffeMake.prototype 

carob.prototype.mius = function(){
    console.log(`---${this.cofe}---`);
}

let myCarob = new carob('Мінус')

myCarob.on()
myCarob.off()
myCarob.mius()

console.log('-----------------------------------------------------------------------');

function coffeeMachine(cofe){
    this.cofe = cofe
}

coffeeMachine.prototype = CoffeMake.prototype

coffeeMachine.prototype.cappuccino = function(){
    console.log(`kap = ${this.cofe} `);
}

let mycoffeeMachine = new coffeeMachine('капучіно')

mycoffeeMachine.on()
mycoffeeMachine.off()
mycoffeeMachine.cappuccino()