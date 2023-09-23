var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var a5 = document.getElementById('a5');
var a6 = document.getElementById('a6');
var a7 = document.getElementById('a7');
var a8 = document.getElementById('a8');
var a9 = document.getElementById('a9');
var temp = 1;
var b1 = '1', b2 = '2', b3 = '3', b4 = '4', b5 = '5', b6 = '6', b7 = '7', b8 = '8', b9 = '9'
var t = 0
function check() {
    if (b1 === b2 && b2 === b3 || b1 === b4 && b4 == b7) {
        if (b1 == 'X') document.getElementById('win').innerHTML = "Player X Wins";
        else document.getElementById('win').innerHTML = "Player O Wins";
        t = 1;
    }
    else if (b4 === b5 && b5 === b6 || b2 === b5 && b5 == b8) {
        if (b4 == 'X') document.getElementById('win').innerHTML = "Player X Wins";
        else document.getElementById('win').innerHTML = "Player O Wins"; t = 1
        t = 1;
    }
    else if (b7 === b8 && b8 === b9 || b3 == b6 && b6 == b9) {
        if (b9 === 'X') document.getElementById('win').innerHTML = "Player X Wins";
        else document.getElementById('win').innerHTML = "Player O Wins";
        t = 1;
    }
    else if (b1 == b5 && b5 == b9) {
        if (b1 == 'X') document.getElementById('win').innerHTML = "Player X Wins";
        else document.getElementById('win').innerHTML = "Player O Wins";
        t = 1;
    }
    else if (b3 == b5 && b5 == b7) {
        if (b3 == 'X') document.getElementById('win').innerHTML = "Player X Wins";
        else document.getElementById('win').innerHTML = "Player O Wins";
        t = 1;
    }
    if (t == 1) {
        a1.disabled = true;
        a2.disabled = true;
        a3.disabled = true;
        a4.disabled = true;
        a5.disabled = true;
        a6.disabled = true;
        a7.disabled = true;
        a8.disabled = true;
        a9.disabled = true;
    }
    if (b1 != '1' && b2 != '2' && b3 != '3' && b4 != '4' && b5 != '5' && b6 != '6' && b7 != '7' && b8 != '8' && b9 != '9') {
        document.getElementById('win').innerHTML = "Draw";
    }
}

a1.addEventListener('focus', () => {
    if (temp == 1) { a1.value = 'X'; b1 = 'X'; a1.classList.add('red_x'); }
    else { a1.value = 'O'; b1 = 'O'; }
    temp = !temp
    a1.disabled = true;
    check();
});
a2.addEventListener('focus', () => {
    if (temp == 1) { a2.value = 'X'; b2 = 'X'; a2.classList.add('red_x'); }
    else { a2.value = 'O'; b2 = 'O' }
    temp = !temp
    a2.disabled = true;
    check();
});
a3.addEventListener('focus', () => {
    if (temp == 1) { a3.value = 'X'; b3 = 'X'; a3.classList.add('red_x'); }
    else { a3.value = 'O'; b3 = 'O' }
    temp = !temp
    a3.disabled = true;
    check();
});
a4.addEventListener('focus', () => {
    if (temp == 1) { a4.value = 'X'; b4 = 'X'; a4.classList.add('red_x'); }
    else { a4.value = 'O'; b4 = 'O' }
    temp = !temp
    a4.disabled = true;
    check();
});
a5.addEventListener('focus', () => {
    if (temp == 1) { a5.value = 'X'; b5 = 'X'; a5.classList.add('red_x'); }
    else { a5.value = 'O'; b5 = 'O' }
    temp = !temp
    a5.disabled = true;
    check();
});
a6.addEventListener('focus', () => {
    if (temp == 1) { a6.value = 'X'; b6 = 'X'; a6.classList.add('red_x'); }
    else { a6.value = 'O'; b6 = 'O' }
    temp = !temp
    a6.disabled = true;
    check();
});
a7.addEventListener('focus', () => {
    if (temp == 1) { a7.value = 'X'; b7 = 'X'; a7.classList.add('red_x'); }
    else { a7.value = 'O'; b7 = 'O' }
    temp = !temp
    a7.disabled = true;
    check();
});
a8.addEventListener('focus', () => {
    if (temp == 1) { a8.value = 'X'; b8 = 'X'; a8.classList.add('red_x'); }
    else { a8.value = 'O'; b8 = 'O' }
    temp = !temp
    a8.disabled = true;
    check();
});
a9.addEventListener('focus', () => {
    if (temp == 1) { a9.value = 'X'; b9 = 'X'; a9.classList.add('red_x'); }
    else { a9.value = 'O'; b9 = 'O' }
    temp = !temp
    a9.disabled = true;
    check();
});

