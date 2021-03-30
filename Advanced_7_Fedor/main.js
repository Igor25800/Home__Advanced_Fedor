let sel = (x) => document.querySelector(x);
let form = document.forms['form']
let btn = document.querySelector('.main')

class Medot {
    block(name){
        sel(name).style.display = 'block'
    }
    none(name){
        sel(name).style.display = 'none'
    }
    display(name, block, none) {
        sel(name).addEventListener('click', function(){
            sel(block).style.display = 'flex'
            sel(none).style.display = 'none'
        })
    }
}

let metod = new Medot()

sel('.cross').addEventListener('click',function(){
    metod.none('.modal')
    metod.none('.overlay')
})

function btnPage(res){
    let nubmer =Math.floor(res.totalResults/ 10) 
    for( i = 0 ; i < nubmer  ; i++){
    let a = `<button id='${i+1}' type="button" class="btn btn-primary btnPage">${i+1}</button>`
    sel('.rowPage').innerHTML += a
    }
    let btmPage = document.querySelectorAll('.btnPage')
    btmPage.forEach(el=>{
        el.addEventListener('click', function(){
            sear(el.id)
        })  
    })
}



form.btn.addEventListener('click',sear)

function sear(page){
    let select = form.select.value
    let val = form.film.value
    let selectSerial = form.selectSerial.value
    
   
    fetch(`http://www.omdbapi.com/?s=${val}&y=${select}&type=${selectSerial}&page=${page}&apikey=41c36208`)
        .then(res =>  res.json() )
        .then(rea => film(rea))
        .catch(red =>{
            metod.block('.modal')
            metod.block('.overlay')
            sel('.p').innerText = 'Error'
        })
}

function film(result){
    let val = form.film.value
    if(val.length != 0){
        let img = ''
        result.Search.forEach((el,id)=> {
        b = result.Search
        img  += `
                <div class = "img__block">
                    <img  src="${el.Poster}" alt="">
                    <div class = "border">
                        <div class = "name__Title"> ${el.Title} </div>
                        <div class = "name__Type"> ${el.Type} </div>
                        <div class = "name__Type"> ${el.Year} </div>
                        <button id="${id}" name="btn" type="button" class="btn btn-success mb-3 width">More Detalis</button>
                    </div>
                </div>
            `
            let block  = `<div class ='img'> ${img} </div> 
            <div class=page>
            <div class="rowPage"> </div>
            </div>
            `
            sel('.main').innerHTML = block

            btnPage(result)

            let mas = document.querySelectorAll('.width')
            detalis(mas)
        })
    }
    else{
        metod.block('.modal')
        metod.block('.overlay')
    }
}

function detalis(name) {
    name.forEach((it,inx)=>{
        it.addEventListener('click', function(){
            metod.block('.detali')
            metod.block('.overlay')


            let xmll = new XMLHttpRequest()
            xmll.open('GET',`http://omdbapi.com/?&i=${b[inx].imdbID}&plot=full&page&apikey=41c36208`,false)
            xmll.send()

            let resultt =JSON.parse(xmll.responseText)
            

            let imgPick = ` 
            <img class="img__pick"  src="${resultt.Poster}" alt="">
            <div class = "block__Bat">
                <div class = "name__Title width__block"> ${resultt.Title} </div>
                <div class="year">${resultt.Rated} ${resultt.Year}  ${resultt.Genre} </div>
                <div class="plot">${resultt.Plot} </div>
                <div class="plot"><b>Written by :</b>  ${resultt.Writer} </div>
                <div class="plot"><b>Directed by :</b>  ${resultt.Director} </div>
                <div class="plot"><b>BoxOffice by :</b>  ${resultt.BoxOffice} </div>
                <div class="plot"><b>Awards :</b>  ${resultt.Awards} </div>
                <b>Awards :</b> 
            </div>
            `
            sel('.bdr').innerHTML = imgPick

            let rating = resultt.Ratings
            ratingg(rating)
    })
          
    })
}

function ratingg(name) {
    let rat = ''
    name.forEach(it=>{
        rat= `
        <div> ${it.Source}   ${it.Value} </div>` 
        sel('.block__Bat').innerHTML += rat
    })
}

sel('.overlay').addEventListener('click' , function(){
    metod.none('.detali')
    metod.none('.overlay')
})















