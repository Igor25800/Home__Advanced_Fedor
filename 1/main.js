
let sel = (x) => document.querySelector(x);
let form = document.forms['form']
let formIn = document.forms['formIn']
let fas = document.querySelectorAll('.fas')
let inp = document.querySelectorAll('.inp')
let formControl = document.querySelectorAll('.form-control')

let firstName = /^[a-zA-Z]{1,20}$/;
let email = /.+@.+\..+/
let phone = /^\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2}$/
let password = /^\w{8,15}$/

function styleFunction(prof, styleValue, style = "") {
    
    if (prof.test(styleValue.value)) {
       styleValue.style.boxShadow = '0 0 5px 0px #5be47d'
        fas.forEach((it) => {
           let id = it.getAttribute('id')
           
            if (id === style) {
                it.classList.add('fa-check')
                it.classList.remove('fa-times')
            }
        })
    } else {
        fas.forEach((it) => {
            let id = it.getAttribute('id')
            if (id === style) {
                it.classList.remove('fa-check')
                it.classList.add('fa-times')
            }
        })
        styleValue.style.boxShadow = "0px 0px 5px  -1px red";
    }
}

form.button.addEventListener('click', function () {
    styleFunction(firstName, form.first, "firstname")
    styleFunction(firstName, form.last, "second")
    styleFunction(email, form.email, "email")
    styleFunction(phone, form.phone, "phone")
    styleFunction(password, form.password, "password")

    localStoreage()
})


let users = []

function localStoreage(){
    if(firstName.test(form.first.value && form.last.value) && email.test(form.email.value) && phone.test(form.phone.value) && password.test(form.password.value)){
        let firstName = form.first.value
        let secondName = form.last.value
        let email = form.email.value
        let phone = form.phone.value
        let password = form.password.value
      
        let user = new User(firstName,secondName,email,phone,password)

        if(localStorage.length > 0 && localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'))
        }
        users.push(user);
        localStorage.setItem('users' , JSON.stringify(users))
        metod.reset()
    }
}
class User {
    constructor(first , second, email,phone,password){
        this.firstName = first
        this.secondName = second
        this.email = email
        this.phone = phone
        this.password = password
        
    }

    reset(){
        form.reset()
        fas.forEach(it=> it.classList.remove('fa-check'))
        formControl.forEach(it=>it.style.boxShadow = '' )
    }
    
    display(name, block, none) {
        sel(name).addEventListener('click', function(){
            sel(block).style.display = 'flex'
            sel(none).style.display = 'none'
        })
    }

    click(name, none){
        sel(name).style.display = 'flex'
        sel(none).style.display = 'none'
    }
    
    resetForm(styleInp){
        sel('.btnAccaunt').addEventListener('click', function(){
            metod.click('.display', '.account')
            formIn.reset()
            styleInp.style.boxShadow = ''
            styleInp.style.boxShadow = ''
        })
    }
    green(inp){
        inp.style.boxShadow = '0 0 5px 0px #5be47d'
    }
    block(name){
        sel(name).style.display = 'block'
    }
    
}

let metod = new User()

$(".phone_mask").mask("+38(999)-999-99-99");

metod.display('.text__Sign', '.display' , '.displayUp' )
metod.display('.text__SignIn', '.displayUp', '.display')


// 2 page 

formIn.btnSingIn.addEventListener('click' , batLocal)
  
function batLocal(){
    if(localStorage.length > 0) {
        val(formIn.emillSing)
        val(formIn.passwordSing)
    }
    else{
        metod.block('.modal')
        metod.block('.overlay')
    }
}
sel('.cross').addEventListener('click',function(){
    sel('.modal').style.display = 'none'
   
})




function val(styleInp ){
    let local = JSON.parse(localStorage.getItem('users')) 
    let inAuth = false
    local.forEach((it)=>{
        const email = formIn.emillSing
        const password = formIn.passwordSing
        if(it.email === email.value ) {
            metod.green(email)
            inAuth = true
                if(it.password === password.value) {
                    metod.green(password)
                    metod.click('.account', '.display')
                    inAuth = true
                    sel('.account__name').innerText = `${it.firstName} ${it.secondName}`
                    sel('.account__email').innerText = it.email
                    metod.resetForm(styleInp)
                }
                else{
                    styleInp.style.boxShadow = '0 0 5px 0px red'
                }
            } 
        if(inAuth === false){
            styleInp.style.boxShadow = '0 0 5px 0px red'
        }
    })

}







// function val(styleInp ){
//     let inAuth = false
//     new Promise((resolve, reject) => {
//         // local.forEach((it)=>{
//             const email = formIn.emillSing.value
//             resolve(email)
//             // if(it.email === email.value ) {
//             //     // metod.green(email)
//             //     if(it.password === password.value) {
//             //         resolve({
//             //             isAuth: true
//             //         })
//             //             // metod.green(password)
//             //             // metod.click('.account', '.display')
//             //             // inAuth = true
//             //             // sel('.account__name').innerText = `${it.firstName} ${it.secondName}`
//             //             // sel('.account__email').innerText = it.email
//             //             // metod.resetForm(styleInp)
//             //         } else{
//             //             reject({
//             //                 password: "Incorrect password"
//             //             })
//             //             // styleInp.style.boxShadow = '0 0 5px 0px red'
//             //         }
//             //     } else {
//             //         reject({
//             //             email: "Incorrect email"
//             //         })
//             //     } 
//             // if(inAuth === false){
//             //     // styleInp.style.boxShadow = '0 0 5px 0px red'
//             // }
//     })
//     .then(email => getEmail(email))
//     .then(password => console.log(password))
//     .catch(err => {
//         console.log(err, 'err')
//     })
// }

// function getEmail(email) {
//     let local = JSON.parse(localStorage.getItem('users')) 
//     const passwordI = formIn.passwordSing.value

//     let inAuthorized
//     return new Promise((resolve, reject) => {
//        local.forEach((it)=>{
//            if(it.email === email) {
            
//             inAuthorized = true
//            }
//            metod.green(email)
//                })
//                inAuthorized ? resolve(passwordI) : reject('Invalid email')
//         })
// }



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("Success!")
//     }, 250)
// })  

// const myPra = async () => {
//     await myPromise.then(res => {
//         console.log(res, 'res')
//     }) 
// }

// myPra()



















