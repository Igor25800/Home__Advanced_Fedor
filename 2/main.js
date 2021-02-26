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


form.btn.addEventListener('click', film)


function film(){
    let xml = new XMLHttpRequest()
    let val = form.film.value
    xml.open('GET',`http://omdbapi.com/?&s=${val}&apikey=41c36208`,false)
    xml.send()
    let result =JSON.parse(xml.responseText)
    
    b = result.Search
    if(val.length != 0){
        let img = ''
        result.Search.forEach((el,id)=> {
            
        img  += `
                <div class = "img__block">
                    <img  src="${el.Poster}" alt="">
                    <div class = "border">
                        <div class = "name__Title"> ${el.Title} </div>
                        <div class = "name__Type"> ${el.Type} </div>
                        <div class = "name__Type"> ${el.Year} </div>
                        <button id="${id}" name="btn" type="button" class="btn btn-success mb-3 width">More Detalis</button>
                    </div>
                </div>`
            let block  = `<div class ='img'> ${img} </div>`
            sel('.main').innerHTML = block

            let mas = document.querySelectorAll('.width')
            Detalis(mas)
        })
    }
    else{
        metod.block('.modal')
        metod.block('.overlay')
    }
}


function Detalis(name) {
    name.forEach((it,inx)=>{
        it.addEventListener('click', function(){
            metod.block('.detali')
            metod.block('.overlay')

            let xmll = new XMLHttpRequest()
            xmll.open('GET',`http://omdbapi.com/?&i=${b[inx].imdbID}&plot=full&page&apikey=41c36208`,false)
            xmll.send()
            let resultt =JSON.parse(xmll.responseText)
            console.log(resultt);
            let rating = resultt.Ratings
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

             Rating(rating)
           
        })
    })
}


function Rating(name) {
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














