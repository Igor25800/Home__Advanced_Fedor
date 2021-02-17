$('button[name="btnB"]').click(function (e) { // кнопка B , жирний текст
    $('.display').toggleClass('texr-B');
});
$('button[name="btnI"]').click(function (e) { // кнопка I, курсив
    $('.display').toggleClass('font-Cursiv');
});
$('button[name="btnU"]').click(function (e) { // кнопка U, підкреслений текст
    $('.display').toggleClass('font-decoration');
});
$('button[name="btnS"]').click(function (e) { // кнопка S, закреслиний  текст
    $('.display').toggleClass('text-through');
});

$('button[name="center"]').click(function (e) { // кнопка S, закреслиний  текст
    $('.footer').css({
        display: 'flex',
        justifyContent: 'center'
    })
});

$('button[name="left"]').click(function (e) { // кнопка left, letft  текст
    $('.footer').css({
        display: 'flex',
        justifyContent: 'flex-start'
    })
});
$('button[name="right"]').click(function (e) { // кнопка center, center текст
    $('.footer').css({
        display: 'flex',
        justifyContent: 'flex-end'
    })
});


$('.familySel').each(function (ind, el) { // перемикач font-family
    $(el).click(function (e) {
        $('.display').css({
            fontFamily: el.id
        })

    });
});

$('.dropdown-item').each(function (ind, el) { // Перемикач  fontSize
    $(el).click(function (e) {
        $('.display').css({
            fontSize: el.id
        })
    });
});
$('button[name="color"]').click(function () { // відкривання блоку з колірами
    $('.overlay').fadeIn()
    $('.colorText').css('height', '27rem').slideDown()
    color('color', '.display', '.color') // функція яка передає  різний блок ,  стилізація і  колір текс чи Bg


})

$('.cross').click(function (e) { // закривати блок з коліром блоку з коляром і скидання стилів
    $('.colorText').slideUp()
    $('.colorBG').slideUp()
    $('.overlay').fadeOut()
    $('.iteamLi').slideUp()
    $('.iteamUl').slideUp()
    $('.tableNew').slideUp()
    $('form[name="itLI"]').trigger('reset')
    iteamVal.css('box-shadow', '0px 0px 0px  0px ')
    mark.css('box-shadow', '0px 0px 0px  0px ')
    $('form[name="itUl"]').trigger('reset')
    inpUl.css('box-shadow', '0px 0px 0px  0px ')
    ulSelector.css('box-shadow', '0px 0px 0px  0px ')
    $('form[name="table"]').trigger('reset')
    resetBorder(countTr)
    resetBorder(widthTr)
    resetBorder(widthborder)
    resetBorder(countTd)
    resetBorder(heightTd)
    resetBorder(styleBoder)
    resetBorder(colorBorder)

})

$('button[name="pictures"]').click(function (e) { //кнопка з  pictures
    $('.overlay').fadeIn()
    color('background-color', '.footer', '.bg') // функція яка передає  різний блок ,  стилізація і  колір текс чи Bg
    $('.colorBG').slideDown()

});
$('.bg').click(function () { //скиданя коліру
    $('.footer').css('background-image', '')
});

$('.img__block').click(function () { //скидання картинок 
    $('.footer').css('background-color', '')
})

function color(color, block, block__Color) { // колір для кнопок, текст , і для BG 

    $(block__Color).each((ind, el) => {

        $(el).click(function (e) {

            switch (ind) {
                case 0:
                    $(block).css(color, '#0caa9b')
                    break
                case 1:
                    $(block).css(color, '#098f84')
                    break
                case 2:
                    $(block).css(color, '#22b66f')
                    break
                case 3:
                    $(block).css(color, "#1c9b5f")
                    break
                case 4:
                    $(block).css(color, '#2a92df')
                    break
                case 5:
                    $(block).css(color, '#227abb')
                    break
                case 6:
                    $(block).css(color, '#9d65b7')
                    break
                case 7:
                    $(block).css(color, '#9151ae')
                    break
                case 8:
                    $(block).css(color, '#32485f')
                    break
                case 9:
                    $(block).css(color, '#293d50')
                    break
                case 10:
                    $(block).css(color, ' #f6bc07')
                    break
                case 11:
                    $(block).css(color, ' #fa9b0c')
                    break
                case 12:
                    $(block).css(color, '#ee821c')
                    break
                case 13:
                    $(block).css(color, '#dc5b00')
                    break
                case 14:
                    $(block).css(color, '#f35a3a')
                    break
                case 15:
                    $(block).css(color, '#c94426')
                    break
                case 16:
                    $(block).css(color, '#eceff2')
                    break
                case 17:
                    $(block).css(color, '#bdc2c7')
                    break
                case 18:
                    $(block).css(color, '#92a3a5')
                    break
                case 19:
                    $(block).css(color, '#7d898c')
                    break
                case 20:
                    $(block).css(color, 'black')
                    break
            }

        });
    })
}

$('#files').click(function (event) { //кнопка file
    $(this).addClass('active');
    $('#color').removeClass('active');
    $('#image').removeClass('active');
    $('.bgColor').hide()
    $('.img').css('display', 'none')
    $('.custom-file').show()
});
$('#color').click(function (e) { // кнопка color
    $('.custom-file').hide()
    $('#color').addClass('active');
    $('.bgColor').show()
    $('.img').hide()
    $('#image').removeClass('active');
    $('#files').removeClass('active');
});

$('#image').click(function () { // кнопка image
    $('#files').removeClass('active');
    $('#color').removeClass('active');
    $('#image').addClass('active');
    $('.bgColor').hide()
    $('.img').css('display', 'flex')
    $('.custom-file').hide()
});



$('.img__block').each(function (ind, el) { //перемикач Image
    $(el).click(function (e) {
        switch (ind) {
            case 0:
                $('.footer').css('background-image', 'url("img/1.jpg")')
                break
            case 1:
                $('.footer').css('background-image', 'url("img/2.jpg")')
                break
            case 2:
                $('.footer').css('background-image', 'url("img/3.jpg")')
                break
            case 3:
                $('.footer').css('background-image', 'url("img/4.jpg")')
                break
            case 4:
                $('.footer').css('background-image', 'url("img/5.jpg")')
                break
            case 5:
                $('.footer').css('background-image', 'url("img/6.jpg")')
                break
            case 6:
                $('.footer').css('background-image', 'url("img/7.jpg")')
                break
            case 7:
                $('.footer').css('background-image', 'url("img/8.jpg")')
                break
            case 8:
                $('.footer').css('background-image', 'url("img/9.jpg")')
                break

        }

    });

});

$('.browser').css('display', 'none')



$('input[name="file"]').change(function () {

    let file = this.files[0]
    let read = new FileReader
    read.readAsDataURL(file)
    read.onload = function () {
        $('.footer').css({
            backgroundImage: `url(${read.result})`
        })
    }
    $('.img__block').click(function () { //скидання картинок 
        $('.footer').css('background-color', '')
    })
})

$('button[name="lock"]').click(function (e) { //кнопка lock
    $('.overlay').fadeIn()
    $('.singIn').slideDown()
    login.css('box-shadow', '0px 0px 0px  0px ')
    passwrod.css('box-shadow', '0px 0px 0px  0px')
});


let adminLogin = /^[aA]dmin$/ //перевірка на параль

$('button[name="singIn"]').click(function () { //кнопка яка визиває фунцкії
    regular(login)
    regular(passwrod)
})

let login = $('input[name="login"]')
let passwrod = $('input[name="pass"]')


function regular(name) { //функція яка перевіряє пароль , дає бордер , зелений або червоний

    if (adminLogin.test(login.val()) && adminLogin.test(passwrod.val())) {
        $('.singIn').hide()
        $('.overlay').hide()
        $('form[name="sign"]').trigger('reset')
        $('button[name="creat"]').removeAttr('disabled')
        $('i.lock').removeClass('fa-lock')
        $('i.lock').addClass('fa-lock-open')
        console.log($('form[name="sign"]'));


    }
    if (adminLogin.test(name.val())) { //перевірка на зелений червоний бордер для форми
        name.css('box-shadow', '0px 0px 5px  1px #5be47d')
    } else {
        name.css('box-shadow', '0 0 5px 0px red')
    }
}

$('button[name="creat"]').click(function () { // Opean table , li
    $('.block-line').hide()
    $('.footer').hide()
    $('.block__create').show()
    $('.monitor').show()
    let text = $('.display').html()
    $('.monitor').val(text)

})

// 2 сторінка
$('button[name="open"]').click(function () { //кнопка табле  2 блоку Оpen
    $('.block__create').hide()
    $('.monitor').hide()
    $('.block-line').show()
    $('.footer').show()
    let text = $('.monitor').val()
    $('.display').html(text)

})

$('button[name="iteamLi"]').click(function () {
    $('.overlay').show()
    $('.iteamLi').slideDown()

})

let number = /^[0-9]*$/ // number регулярка
//Li
let iteamVal = $('input[name="countLI"]')
let mark = $('#disabledSelect')
// Ul 
let inpUl = $('input[name="countUl"]')
let ulSelector = $('#ulSelector')
//Table
let countTr = $('input[name="countTr"]')
let widthTr = $('input[name="widthTr"]')
let widthborder = $('input[name="widthborder"]')
let countTd = $('input[name="countTd"]')
let heightTd = $('input[name="heightTd"]')
let styleBoder = $('#styleBoder')
let colorBorder = $('#colorBorder')

$('button[name="creatList"]').click(function () { //валидация інпутов селектора forme Create OI
    renderValid(iteamVal, mark)
    // console.log(iteamVal.val() && number.test(iteamVal.val())  && mark.val() != '');
    console.log(iteamVal.val() == '');
    console.log(number.test(iteamVal.val()));
    console.log(mark.val() != '');
})

$('button[name="creatListUl"]').click(function () {
    renderValid(inpUl, ulSelector)
})

//создания
function ui(text, nub) { //Створення UL

    let valText = '';
    for (let i = 0; i < nub; i++) {
        let ul = ''
        valText += ` <li type="${$('select[name="creatUl"]').val()}"> iteam${i+1} </li>`
    }
    ul = `<ul> ${valText} </ul>`
    let monitor = $('.monitor').val()
    $('.monitor').val(monitor + ul)
}

function oi(block, number) { // Свторення OI

    let valText1 = '';

    for (let i = 0; i < number; i++) {
        valText1 += `<li style="list-style-type:${$('select[name="mark"]').val()}">iteam${i+1} </li>`
    }
    bul = `<ul> ${valText1} </ul>`
    let monitor = $('.monitor').val()
    $('.monitor').val(monitor + bul)
}

function table(ind, tr, td) { // Створення таблички
    let obj = {
        width: $('input[name="widthTr"]').val() + 'px',
        height: $('input[name="heightTd"]').val() + 'px',
        borderWidth: $('input[name="widthborder"]').val() + 'px',
        type: $('select[name="styleBoder"]').val(),
        color: $('select[name="colorBorder"]').val()
    }

    let counTr = ''
    for (let i = 0; i < tr; i++) {
        let countTd = ''
        for (let i = 0; i < td; i++) {
            countTd += `<td class="td" style="width: ${obj.width}; height:${obj.height}; border: ${obj.borderWidth} ${obj.type} ${obj.color}" >  TD </td>`
        }
        counTr += `<tr> ${countTd} </tr>`
    }
    let table1 = `<table>  ${counTr} </table>`
    let monitorTable = $('.monitor').val()
    $('.monitor').val(monitorTable + table1)
}



$('button[name="creatTable"]').click(function () { //кнопка яка перевіряє  правду лож  для  інпутів
    renderValid(countTr, styleBoder)
    renderValid(widthTr, styleBoder)
    renderValid(widthborder, colorBorder)
    renderValid(countTd, colorBorder)
    renderValid(heightTd, colorBorder)
    renderValid(styleBoder, styleBoder)
    if (countTr.val() && widthTr.val() && widthborder.val() && countTd.val() && heightTd.val() && styleBoder.val() && styleBoder.val() != '') {
        let o1 = $('.display').html()
        let trCreat = $('input[name="countTr"]').val()
        let tdCreat = $('input[name="countTd"]').val()
        table(o1, trCreat, tdCreat)
    }
})

function renderValid(id, selec) {
    if (id.val() && number.test(id.val())) { //валидация всех форм 
        id.css('box-shadow', '0px 0px 5px  1px #5be47d')

    } else {
        id.css('box-shadow', '0px 0px 5px  1px red')
        selec.css('box-shadow', '0 0 5px 0px red')
    }
    if (selec.val() === '') {
        selec.css('box-shadow', '0 0 5px 0px red')
    } else {
        selec.css('box-shadow', '0 0 5px 0px #5be47d')
    }

    if (inpUl.val() && number.test(inpUl.val()) && ulSelector.val() != '') {
        let ul = $('.display').html()
        let obj1 = $('input[name="countUl"]').val()
        ui(ul, obj1)
    }
    if (iteamVal.val() && number.test(iteamVal.val()) && mark.val() != '') {

        let o = $('.display').html()
        let obj = $('input[name="countLI"]').val()
        oi(o, obj)

    }
}

$('button[name="reset"]').click(function () { //Скидання OI
    $('form[name="itLI"]').trigger('reset')
    iteamVal.css('box-shadow', '0px 0px 0px  0px ')
    mark.css('box-shadow', '0px 0px 0px  0px ')
})

$('button[name="resetUl"]').click(function () {
    $('form[name="itUl"]').trigger('reset')
    inpUl.css('box-shadow', '0px 0px 0px  0px ')
    ulSelector.css('box-shadow', '0px 0px 0px  0px ')
})

$('button[name="iteamUl"]').click(function () { //Кнопка для Ul
    $('.overlay').show()
    $('.iteamUl').slideDown()
})

$('button[name="table').click(function () { //Кнопка для   розгортання таблиці
    $('.overlay').show()
    $('.tableNew').slideDown()
})

$('button[name="resetTable"]').click(function () { // Кнопка resetTable , скидання форми і  бордера
    $('form[name="table"]').trigger('reset')
    resetBorder(countTr)
    resetBorder(widthTr)
    resetBorder(widthborder)
    resetBorder(countTd)
    resetBorder(heightTd)
    resetBorder(styleBoder)
    resetBorder(colorBorder)

})

function resetBorder(name) { // рендер для скидання бордерів , кнопки reset таблиці
    name.css('box-shadow', '0px 0px 0px  0px ')
}