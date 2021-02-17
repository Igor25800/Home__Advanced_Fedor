//доступи для класів
let getClass = x => document.querySelector(x)
let fontsize = document.querySelectorAll('.fontsize')
let textColor = document.querySelectorAll('.text__Color')
let text = document.querySelector('.text')


// Доступи до формів
let button = document.forms['button']
let edit = document.forms['edit']
let style = document.forms['style']
let form = document.forms['formTable']

// Кнопка для Edit 
button.edit.addEventListener('click', function () {
    getClass('.block__edit').style.display = 'flex'
    let textarea = text.innerHTML
    edit.textarea.value = textarea

    getClass(".block__style").style.display = 'none'
    getClass('.block__Color').style.display = 'none'
})




// кнопка Save
edit.save.addEventListener('click', function () {
    let textarea = edit.textarea.value
    getClass('.text').innerHTML = textarea
    getClass('.block__edit').style.display = 'none'


})

// Кнопка Style
button.style.addEventListener('click', function () {
    getClass('.block__edit').style.display = 'none'
    getClass(".block__style").style.display = 'flex'

})

// Font Size
fontsize.forEach(element => {
    console.log('');
    element.addEventListener('change', function () {
        getClass('.text').style.fontSize = this.value
    })

});

//// Кнопка Font Family 
style.option.addEventListener('change', function () {
    console.log(this.value);
    getClass('.text').style.fontFamily = this.value
})

// Color кнопка  Color of  Text

style.colorText.onclick = color // кноппка з функціє для коліру тексту


function color() {
    textColor.forEach((element, ind) => { // перебираю всі елементи з класом textColor 

        getClass('.block__Color').style.display = 'flex'
        // для кнопки Color Text
        element.onclick = function () {


            console.log(element)
            switch (ind) { // для кожного елемента даю якесь значення
                case 0:
                    text.setAttribute('class', 'text red-text')
                    break
                case 1:
                    text.setAttribute('class', 'text blue-text')
                    break
                case 2:
                    text.setAttribute('class', 'text green-text')
                    break
                case 3:
                    text.setAttribute('class', 'text black-text')
                    break
                case 4:
                    text.setAttribute('class', 'text orange-text')
                    break
                case 5:
                    text.setAttribute('class', 'text pink-text')
                    break
                case 6:
                    text.setAttribute('class', 'text white-text')
                    break
                case 7:
                    text.setAttribute('class', 'text purple-text')
                    break
                case 8:
                    text.setAttribute('class', 'text lightGreen-text')
                    break

            }

            getClass('.block__Color').style.display = 'none' // видаляти весь блок кожен раз при нажатію любої кнокпи 

        }
    });

}


style.backgroundColor.onclick = colorBg // кнопка з функією для  BG блоку з текстом , кнопка BG

function colorBg() {

    getClass('.block__Color').style.display = 'flex'

    textColor.forEach((element, ind) => { // перебираю всі елементи з класом textColor 

        // для кнопки Color Text
        element.onclick = function () {
            //    console.log(ind);
            switch (ind) { // для кожного елемента даю якесь значення
                case 0:
                    getClass('.header').setAttribute('class', 'header red')

                    break
                case 1:
                    getClass('.header').setAttribute('class', 'header blue')
                    break
                case 2:
                    getClass('.header').setAttribute('class', 'header green')
                    break
                case 3:
                    getClass('.header').setAttribute('class', 'header black')
                    break
                case 4:
                    getClass('.header').setAttribute('class', 'header orange')
                    break
                case 5:
                    getClass('.header').setAttribute('class', 'header pink')
                    break
                case 6:
                    getClass('.header').setAttribute('class', 'header white')
                    break
                case 7:
                    getClass('.header').setAttribute('class', 'header purple')
                    break
                case 8:
                    getClass('.header').setAttribute('class', 'header lightGreen')

            }
            getClass('.block__Color').style.display = 'none' // видаляти весь блок кожен раз при нажатію любої кнокпи

        }
    })
}


// chexbox  
style.addEventListener('click', function () {
    if (style.bolt.checked) { // bolt  chexbox перевірка
        getClass('.text').classList.add('font-bolt')
    } else {
        getClass('.text').classList.remove('font-bolt')
    }

    if (style.cursive.checked) { // cursive chexbox перевірка 
        getClass('.text').classList.add('cursive-text')
    } else {
        getClass('.text').classList.remove('cursive-text')
    }
})


edit.add.addEventListener('click', function () { // button add  , закриває і відкриває блоки  , скидує форму для радіо
    getClass('.header').style.display = 'none'
    getClass('.main').style.display = 'none'
    getClass('.fotter').style.display = 'none'
    getClass('.block__iteam').style.display = 'flex'
    getClass('.block').style.display = 'block'
    getClass('.block__table').style.display = 'none'
    getClass('.block__list').style.display = 'none'

    form.reset()

})


form.addEventListener('change', function () { // перемекач блоков  для создания li і Табличок 
    let b = form.customRadioInline1.value
    if (b === 'table') {
        getClass('.block__table').style.display = 'block'
        getClass('.block__list').style.display = 'none'


    }
    if (b === 'list') {
        getClass('.block__table').style.display = 'none'
        getClass('.block__list').style.display = 'block'

    }

})


const getClassFunc = () => {
    getClass('.block').style.display = 'none'
    getClass('.header').style.display = 'block'
    getClass('.main').style.display = 'block'
    getClass('.fotter').style.display = 'flex'
}

form.btnList.addEventListener('click', function () { // батонка в Li блоку
    // getClass('.block').style.display = 'none'
    // getClass('.header').style.display = 'block'
    // getClass('.main').style.display = 'block'
    // getClass('.fotter').style.display = 'flex'
    getClassFunc()

    let obj = form.li.value
    createLI(text, obj)
})


function createLI(ind, nub) { //функція для Li создає
   
    for (let i = 0; i < nub; i++) {
        edit.textarea.value += `<li type= "${form.selType.value}">iteam${i+1} </li>`

    }
}



form.btnTab.addEventListener('click', function () { // кнопка в  созданих табличках 
    // getClass('.block').style.display = 'none'
    // getClass('.header').style.display = 'block'
    // getClass('.main').style.display = 'block'
    // getClass('.fotter').style.display = 'flex'
    getClassFunc()


    let obj = {
        tr: form.tr.value,
        td: form.td.value
    }
    createTab(text, obj.tr, obj.td)

})

function createTab(ind, tr, td) { // функція де создає таблички  , задає стилі ширину фисоту і бордер


    let obj = {
        width: form.width.value + 'px',
        height: form.height.value + 'px',
        borderWidth: form.borderWidth.value + 'px',
        type: form.type.value,
        color: form.color.value
    }
    let counTr = ''
    for (let i = 0; i < tr; i++) {

        let countTd = ''

        for (let i = 0; i < td; i++) {
            countTd += `<td class="td" style="width: ${obj.width}; height:${obj.height}; border: ${obj.borderWidth} ${obj.type} ${obj.color}" >  TD </td>`
        }
        counTr += `<tr> ${countTd} </tr>`
    }
    let table = `<table>  ${counTr} </table>`
    edit.textarea.value += table

}