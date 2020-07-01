// work with pictures ===================================================

let pict1 = document.getElementById("pictureOne");
pict1.onclick = function () {
    result = 500
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/01.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict2 = document.getElementById("pictureTwo");
pict2.onclick = function () {
    result = 501
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/02.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict3 = document.getElementById("pictureThree");
pict3.onclick = function () {
    result = 502
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/03.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict4 = document.getElementById("pictureFour");
pict4.onclick = function () {
    result = 503
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/04.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict5 = document.getElementById("pictureFive");
pict5.onclick = function () {
    result = 504
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/05.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict6 = document.getElementById("pictureSix");
pict6.onclick = function () {
    result = 505
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/06.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict7 = document.getElementById("pictureSeven");
pict7.onclick = function () {
    result = 506
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/07.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict8 = document.getElementById("pictureEight");
pict8.onclick = function () {
    result = 507
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/08.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict9 = document.getElementById("pictureNine");
pict9.onclick = function () {
    pictChosen = "Изображение: Выбрано"
    result = 508
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/09.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict10 = document.getElementById("pictureTen");
pict10.onclick = function () {
    pictChosen = "Изображение: Выбрано"
    result = 509
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/10.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

let pict11 = document.getElementById("pictureEleven");
pict11.onclick = function () {
    result = 510
    pictChosen = "Изображение: Выбрано"
    document.getElementById('priceOfPicture').innerHTML = result;
    document.getElementById('showImg').style.backgroundImage = "url(img/pics/11.jpg)";
    document.getElementById('pictChose').innerHTML = pictChosen;

};

// work with hedder element ===================================

let Element1 = document.getElementById('first_div');
Element1.onclick = function () {
    document.getElementById('buttonNext1').style.display = "block"
    document.getElementById('buttonNext2').style.display = "none"
    document.getElementById('buttonNext3').style.display = "none"
    document.getElementById('buttonNext4').style.display = "none"


    document.getElementById('showFirstDiv').style.display = "block";
    document.getElementById('showSecondDiv').style.display = "none";
    document.getElementById('showThirdDiv').style.display = "none";
    document.getElementById('showFourthDiv').style.display = "none";
    document.getElementById('first_div').style.color = "black";
    document.getElementById('second_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('third_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('fourth_div').style.color = "hsl(0, 0%, 67%)";

};

let Element2 = document.getElementById('second_div');
Element2.onclick = function () {
    document.getElementById('buttonNext1').style.display = "none"
    document.getElementById('buttonNext2').style.display = "block"
    document.getElementById('buttonNext3').style.display = "none"
    document.getElementById('buttonNext4').style.display = "none"

    document.getElementById('showFirstDiv').style.display = "none";
    document.getElementById('showSecondDiv').style.display = "block";
    document.getElementById('showThirdDiv').style.display = "none";
    document.getElementById('showFourthDiv').style.display = "none";
    document.getElementById('second_div').style.color = "black";
    document.getElementById('first_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('third_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('fourth_div').style.color = "hsl(0, 0%, 67%)";
};

let Element3 = document.getElementById('third_div');
Element3.onclick = function () {
    document.getElementById('buttonNext1').style.display = "none"
    document.getElementById('buttonNext2').style.display = "none"
    document.getElementById('buttonNext3').style.display = "block"
    document.getElementById('buttonNext4').style.display = "none"

    document.getElementById('showFirstDiv').style.display = "none";
    document.getElementById('showSecondDiv').style.display = "none";
    document.getElementById('showThirdDiv').style.display = "block";
    document.getElementById('showFourthDiv').style.display = "none";
    document.getElementById('first_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('second_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('third_div').style.color = "black";
    document.getElementById('fourth_div').style.color = "hsl(0, 0%, 67%)";
};

let Element4 = document.getElementById('fourth_div');
Element4.onclick = function () {
    document.getElementById('buttonNext1').style.display = "none"
    document.getElementById('buttonNext2').style.display = "none"
    document.getElementById('buttonNext3').style.display = "none"
    document.getElementById('buttonNext4').style.display = "block"

    document.getElementById('showFirstDiv').style.display = "none";
    document.getElementById('showSecondDiv').style.display = "none";
    document.getElementById('showThirdDiv').style.display = "none";
    document.getElementById('showFourthDiv').style.display = "block";
    document.getElementById('first_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('second_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('fourth_div').style.color = "black";
    document.getElementById('third_div').style.color = "hsl(0, 0%, 67%)";
};

// work with bordder img =============================================

let bordderImg1 = document.getElementById('borderOne');
bordderImg1.onclick = function () {
    addprice = 200;

    document.getElementById('priceOfPicture').innerHTML = addprice + result;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-01.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg2 = document.getElementById('borderTwo');
bordderImg2.onclick = function () {
    addprice = 201;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-02.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg3 = document.getElementById('borderThree');
bordderImg3.onclick = function () {
    addprice = 202;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-03.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg4 = document.getElementById('borderFour');
bordderImg4.onclick = function () {
    addprice = 203;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-04.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg5 = document.getElementById('borderFive');
bordderImg5.onclick = function () {
    addprice = 204;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-05.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg6 = document.getElementById('borderSix');
bordderImg6.onclick = function () {
    addprice = 205;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-06.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg7 = document.getElementById('borderSeven');
bordderImg7.onclick = function () {
    addprice = 206;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-07.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg8 = document.getElementById('borderEight');
bordderImg8.onclick = function () {
    addprice = 207;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-08.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg9 = document.getElementById('borderNine');
bordderImg9.onclick = function () {
    addprice = 208;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-09.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg10 = document.getElementById('borderTen');
bordderImg10.onclick = function () {
    addprice = 209;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-10.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg11 = document.getElementById('borderEleven');
bordderImg11.onclick = function () {
    addprice = 210;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-11.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg12 = document.getElementById('borderTwelve');
bordderImg12.onclick = function () {
    addprice = 211;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-12.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg13 = document.getElementById('borderThirteen');
bordderImg13.onclick = function () {
    addprice = 212;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-13.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg14 = document.getElementById('borderFourteen');
bordderImg14.onclick = function () {
    addprice = 213;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-14.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};
let bordderImg15 = document.getElementById('borderFifteen');
bordderImg15.onclick = function () {
    addprice = 214;
    document.getElementById('priceOfPicture').innerHTML = result + addprice;
    document.getElementById('bordderImg').style.backgroundImage = "url(img/borders/rama-15.png)";
    borderChosen = "Рама: Выбрано"
    document.getElementById('bordChose').innerHTML = borderChosen;
};

// Work with Input Text ==========================================

function showText1() {
    document.getElementById('textOnImge1').innerHTML = document.getElementById('inp1').value
    document.getElementById('textOnImge2').innerHTML = document.getElementById('inp2').value
    document.getElementById('textOnImge3').innerHTML = document.getElementById('inp3').value
    document.getElementById('textOnImge1').style.fontFamily = 'Ariston'
    document.getElementById('textOnImge2').style.fontFamily = 'Ariston'
    document.getElementById('textOnImge3').style.fontFamily = 'Ariston'
    document.getElementById('Font1').style.backgroundColor = 'rgb(125, 189, 31)'
    document.getElementById('Font1').style.color = "white"
    document.getElementById('Font2').style.backgroundColor = "white"
    document.getElementById('Font2').style.color = 'rgb(125, 189, 31)'
    document.getElementById('Font3').style.backgroundColor = "white"
    document.getElementById('Font3').style.color = 'rgb(125, 189, 31)'
};
function showText2() {
    document.getElementById('textOnImge1').innerHTML = document.getElementById('inp1').value
    document.getElementById('textOnImge2').innerHTML = document.getElementById('inp2').value
    document.getElementById('textOnImge3').innerHTML = document.getElementById('inp3').value
    document.getElementById('textOnImge1').style.fontFamily = 'DaVinci'
    document.getElementById('textOnImge2').style.fontFamily = 'DaVinci'
    document.getElementById('textOnImge3').style.fontFamily = 'DaVinci'
    document.getElementById('Font2').style.backgroundColor = 'rgb(125, 189, 31)'
    document.getElementById('Font2').style.color = "white"
    document.getElementById('Font1').style.backgroundColor = "white"
    document.getElementById('Font1').style.color = 'rgb(125, 189, 31)'
    document.getElementById('Font3').style.backgroundColor = "white"
    document.getElementById('Font3').style.color = 'rgb(125, 189, 31)'

};
function showText3() {
    document.getElementById('textOnImge1').innerHTML = document.getElementById('inp1').value
    document.getElementById('textOnImge2').innerHTML = document.getElementById('inp2').value
    document.getElementById('textOnImge3').innerHTML = document.getElementById('inp3').value
    document.getElementById('textOnImge1').style.fontFamily = 'Brody'
    document.getElementById('textOnImge2').style.fontFamily = 'Brody'
    document.getElementById('textOnImge3').style.fontFamily = 'Brody'
    document.getElementById('Font3').style.backgroundColor = 'rgb(125, 189, 31)'
    document.getElementById('Font3').style.color = "white"
    document.getElementById('Font2').style.backgroundColor = "white"
    document.getElementById('Font2').style.color = 'rgb(125, 189, 31)'
    document.getElementById('Font1').style.backgroundColor = "white"
    document.getElementById('Font1').style.color = 'rgb(125, 189, 31)'
};

// Create LittelBox with color ========================================================
// Change price after chosing more than 3 elements ===================================================

let arr = new Set();
let a1 = document.getElementById('color1');
let a2 = document.getElementById('color2');
let a3 = document.getElementById('color3');
let a4 = document.getElementById('color4');
let a5 = document.getElementById('color5');
let a6 = document.getElementById('color6');
let a7 = document.getElementById('color7');
let a8 = document.getElementById('color8');


function creatorfunction1() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor1')
    let b = document.getElementById('color1')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(1)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }

}
function creatorfunction2() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor2')
    let b = document.getElementById('color2')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(2)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }
}
function creatorfunction3() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor3')
    let b = document.getElementById('color3')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(3)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }
}
function creatorfunction4() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor4')
    let b = document.getElementById('color4')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(4)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }
}
function creatorfunction5() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor5')
    let b = document.getElementById('color5')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(5)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }
}
function creatorfunction6() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor6')
    let b = document.getElementById('color6')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(6)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }
}
function creatorfunction7() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor7')
    let b = document.getElementById('color7')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(7)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }
}
function creatorfunction8() {
    document.getElementById('printChose').innerHTML = "Отпечатки:";
    let a = document.getElementById('littelBoxColor8')
    let b = document.getElementById('color8')
    if (a.style.display === "none") {
        a.style.display = "block"
        b.style.border = "2px solid rgb(124, 187, 30)"
    } else {
        a.style.display = "none"
        b.style.border = "1px solid gainsboro"
    }
    arr.add(8)
    more = 50;
    let x = arr.size
    if (x == 3) {
        document.getElementById('priceOfPicture').innerHTML = result + addprice + more;
    }
}

// Button Next Page ========================================

function nextPage1() {
    document.getElementById('buttonNext1').style.display = "none"
    document.getElementById('buttonNext2').style.display = "block"
    document.getElementById('buttonNext3').style.display = "none"
    document.getElementById('buttonNext4').style.display = "none"

    document.getElementById('showFirstDiv').style.display = "none";
    document.getElementById('showSecondDiv').style.display = "block";
    document.getElementById('showThirdDiv').style.display = "none";
    document.getElementById('showFourthDiv').style.display = "none";
    document.getElementById('second_div').style.color = "black";
    document.getElementById('first_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('third_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('fourth_div').style.color = "hsl(0, 0%, 67%)";
}
function nextPage2() {
    document.getElementById('buttonNext1').style.display = "none"
    document.getElementById('buttonNext2').style.display = "none"
    document.getElementById('buttonNext3').style.display = "block"
    document.getElementById('buttonNext4').style.display = "none"

    document.getElementById('showFirstDiv').style.display = "none";
    document.getElementById('showSecondDiv').style.display = "none";
    document.getElementById('showThirdDiv').style.display = "block";
    document.getElementById('showFourthDiv').style.display = "none";
    document.getElementById('first_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('second_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('third_div').style.color = "black";
    document.getElementById('fourth_div').style.color = "hsl(0, 0%, 67%)";
}
function nextPage3() {
    document.getElementById('buttonNext1').style.display = "none"
    document.getElementById('buttonNext2').style.display = "none"
    document.getElementById('buttonNext3').style.display = "none"
    document.getElementById('buttonNext4').style.display = "block"

    document.getElementById('showFirstDiv').style.display = "none";
    document.getElementById('showSecondDiv').style.display = "none";
    document.getElementById('showThirdDiv').style.display = "none";
    document.getElementById('showFourthDiv').style.display = "block";
    document.getElementById('first_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('second_div').style.color = "hsl(0, 0%, 67%)";
    document.getElementById('fourth_div').style.color = "black";
    document.getElementById('third_div').style.color = "hsl(0, 0%, 67%)";
}

