// // Завдання 1
// function number(){
//     let x = 0
//     function sum(s) {
//        x +=s
//        console.log(x);
//     }
//     return sum
// }
// let num = number()
// num(3)
// num(5)
// num(228)


//Завдання 2

const bar = (function(){
    let balance = 1000;

    let products = {
        beer: {
            count: 90,
            price: 8
        },
        wine: {
            count: 45,
            price: 30
        },
        pepsi: {
            count: 70,
            price: 12
        },
    }                 
         
    function sell(name,count){
        products[name].count -= count
        balance += count * products[name].price
    }
    function storage(name){
        return products[name].count
    }

    function bank(){
        return balance 
    }
    return {
        sell: sell,
        storage: storage,
        bank : bank,
    }
}())

let input = document.forms['input']
let number = document.forms['number']
let radio = document.querySelectorAll('.radio')
let sel = x => document.querySelector(x);

input.bank.value = bar.bank()
input.beer.value = bar.storage('beer')
input.wine.value = bar.storage('wine')
input.pepsi.value = bar.storage('pepsi')

radio.forEach((el,ind)=>{
    el.addEventListener("change"  ,function(){
        number.btnAdd.onclick =  function(){
            let num = number.inp_number.value
            if(bar.storage(el.value) >= num){
                if(num > 0 &&  el.checked === true ){
                    let  b = ['Пиво', 'Вино', 'Пепсі']
                    sel('.text__shop').innerHTML+= `<p class="margin">  ${b[ind]} : ${num} шт, </p>`
                    bar.sell(el.value, num)
                    number.reset()
                }
            }else{
                sel('.modal').style.display = 'block' 
                sel('.text_modal').innerText = `Вибачти, але  на складі залешилося ${el.value} : ${bar.storage(el.value)} штук `
            }
        }
    })
})

let newBank = bar.bank()
number.buy.addEventListener('click', function(){
    if(sel('.text__shop').innerHTML != ''){
        let bank = bar.bank() - newBank
        input.bank.value = bar.bank()
        input.beer.value = bar.storage('beer')
        input.wine.value = bar.storage('wine')
        input.pepsi.value = bar.storage('pepsi')
        
        sel('.shop').innerHTML = sel('.block__text').innerHTML
        sel('.text__shop').innerHTML = ''
        sel('.bank').innerHTML = `<b> Всього ${bank} гривень </b>` 
        newBank = bar.bank()
    }
})

sel('#cros').addEventListener('click',close )
sel('#close').addEventListener('click',close )

function close(){
    sel('.modal').style.display = 'none'
}
