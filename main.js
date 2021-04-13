let type = document.querySelector('.type');
let allTheText = document.querySelector('.all-the-text');
let cr = document.querySelector('.letter-c');
let r1 = document.querySelector('.one');
let r2 = document.querySelector('.two');
let r3 = document.querySelector('.three');
let r4 = document.querySelector('.four');
let r5 = document.querySelector('.five')
let r6 = document.querySelector('.six');
let r7 = document.querySelector('.seven');
let r8 = document.querySelector('.eight');
let r9 = document.querySelector('.nine');
let r0 = document.querySelector('.zero');
let mines = document.querySelector('.idk');
let symbol1 = document.querySelector('.symbol1');
let equal = document.querySelector('.equal');
let space = document.querySelector('.space');
let tab = document.querySelector('.tab'); //dindt make it :(
let q = document.querySelector('.q');
let w = document.querySelector('.w');
let e = document.querySelector('.e');
let r = document.querySelector('.r');
let t = document.querySelector('.t');
let y = document.querySelector('.y');
let u = document.querySelector('.u');
let iLetter = document.querySelector('.iLetter');
let o = document.querySelector('.o');
let p = document.querySelector('.p');
let symbol2 = document.querySelector('.symbol2');
let symbol3 = document.querySelector('.symbol3');
let symbol4 = document.querySelector('.symbol4');
let capsLock = document.querySelector('.CapsLock');
let a = document.querySelector('.a');
let s = document.querySelector('.s');
let d = document.querySelector('.d');
let f = document.querySelector('.f');
let g = document.querySelector('.g');
let h = document.querySelector('.h');
let j = document.querySelector('.j');
let k = document.querySelector('.k');
let l = document.querySelector('.l');
let symbol5 = document.querySelector('.symbol5');
let symbol6 = document.querySelector('.symbol6');
let backspace = document.querySelector('.Backspace');
let shift = document.querySelector('.shift');
let enter = document.querySelector('.Enter');
let z = document.querySelector('.z');
let x = document.querySelector('.x');
let v = document.querySelector('.v');
let b = document.querySelector('.b');
let n = document.querySelector('.n');
let m = document.querySelector('.m');
let comma = document.querySelector('.comma');
let dot = document.querySelector('.dot');
let slesh = document.querySelector('.slesh');
let i = 0;
window.addEventListener('keydown', function (event) {

    function appendLetter(letter, sel) {
        let upperLatter = letter.toUpperCase();
        let lowLetter = letter.toLowerCase();
        let keyCode1 = upperLatter.charCodeAt(0);
        if (event.keyCode === keyCode1 && event.getModifierState("CapsLock")) {
            i++
            sel.style.backgroundColor = 'gray';
            sel.style.color = 'white';
            return allTheText.insertAdjacentHTML('beforeend', `<span>${upperLatter}</span>`);
        }

        if (event.keyCode === keyCode1 && event.shiftKey) {
            i++
            sel.style.backgroundColor = 'gray';
            sel.style.color = 'white';
            return allTheText.insertAdjacentHTML('beforeend', `<span>${upperLatter}</span>`);
        }


        if (event.keyCode === keyCode1) {
            i++
            sel.style.backgroundColor = 'gray';
            sel.style.color = 'white';
            return allTheText.insertAdjacentHTML('beforeend', `<span>${lowLetter}</span>`);
        }
        // if (event.keyCode === 8) {
        //     let lol = allTheText.lastElementChild;
        //     console.log(lol);
        // } we will think about u later
    }

    if (event.keyCode === 67) {
        appendLetter('C', cr);
        white(67, cr);
    } else if (event.keyCode === 49) {
        appendLetter('1', r1);
        white(49, r1);
    } else if (event.keyCode === 50) {
        appendLetter('2', r2);
        white(50, r2);
    } else if (event.keyCode === 51) {
        appendLetter('3', r3);
        white(51, r3);
    } else if (event.keyCode === 52) {
        appendLetter('4', r4);
        white(52, r4);
    } else if (event.keyCode === 53) {
        appendLetter('5', r5);
        white(53, r5);
    } else if (event.keyCode === 54) {
        appendLetter('6', r6);
        white(54, r6);
    } else if (event.keyCode === 55) {
        appendLetter('7', r7);
        white(55, r7);
    } else if (event.keyCode === 56) {
        appendLetter('8', r8);
        white(56, r8);
    } else if (event.keyCode === 57) {
        appendLetter('9', r9);
        white(57, r9);
    } else if (event.keyCode === 48) {
        appendLetter('0', r0);
        white(48, r0);
    }

    function forSymbol(symbol, sel) {
        i++
        sel.style.backgroundColor = 'gray';
        sel.style.color = 'white';
        allTheText.insertAdjacentHTML('beforeend', `<span>${symbol}</span>`);
        // return allTheText.append(symbol);
    }
    if (event.keyCode === 8) {
        let elem = allTheText.children;
        let rem = elem[elem.length - 1];
        white(8, backspace);
        backspace.style.backgroundColor = 'gray';
        backspace.style.color = 'white';
        console.log(elem);
        if (elem.length > 0) {
            rem.remove();
            i--;
        }
    }
    if (event.keyCode === 189) {
        forSymbol('-', mines);
        white(189, mines)
    } else if (event.keyCode === 192) {
        forSymbol('`', symbol1);
        white(192, symbol1)
    } else if (event.keyCode === 187) {
        forSymbol('=', equal);
        white(187, equal)
    } else if (event.keyCode === 32) {
        appendLetter(' ', space);
        white(32, space);
    } else if (event.keyCode === 81) {
        appendLetter('q', q);
        white(81, q);
    } else if (event.keyCode === 87) {
        appendLetter('w', w);
        white(87, w);
    } else if (event.keyCode === 69) {
        appendLetter('e', e);
        white(69, e);
    } else if (event.keyCode === 82) {
        appendLetter('r', r);
        white(82, r);
    } else if (event.keyCode === 84) {
        appendLetter('t', t);
        white(84, t);
    } else if (event.keyCode === 89) {
        appendLetter('y', y);
        white(89, y);
    } else if (event.keyCode === 89) {
        appendLetter('y', y);
        white(89, y);
    } else if (event.keyCode === 85) {
        appendLetter('u', u);
        white(85, u);
    } else if (event.keyCode === 73) {
        appendLetter('i', iLetter);
        white(73, iLetter);
    } else if (event.keyCode === 79) {
        appendLetter('o', o);
        white(79, o);
    } else if (event.keyCode === 80) {
        appendLetter('p', p);
        white(80, p);
    } else if (event.keyCode === 80) {
        appendLetter('p', p);
        white(80, p);
    } else if (event.keyCode === 219) {
        forSymbol('[', symbol2);
        white(219, symbol2);
    } else if (event.keyCode === 221) {
        forSymbol(']', symbol3);
        white(221, symbol3);
    } else if (event.keyCode === 220) {
        forSymbol("\\", symbol4);
        white(220, symbol4);
    } else if (event.keyCode === 20) {
        forSymbol('', capsLock);
        white(20, capsLock);
    } else if (event.keyCode === 65) {
        appendLetter('a', a);
        white(65, a);
    } else if (event.keyCode === 83) {
        appendLetter('s', s);
        white(83, s);
    } else if (event.keyCode === 68) {
        appendLetter('d', d);
        white(68, d);
    } else if (event.keyCode === 70) {
        appendLetter('f', f);
        white(70, f);
    } else if (event.keyCode === 71) {
        appendLetter('g', g);
        white(71, g);
    } else if (event.keyCode === 72) {
        appendLetter('h', h);
        white(72, h);
    } else if (event.keyCode === 74) {
        appendLetter('j', j);
        white(74, j);
    } else if (event.keyCode === 75) {
        appendLetter('k', k);
        white(75, k);
    } else if (event.keyCode === 75) {
        appendLetter('k', k);
        white(75, k);
    } else if (event.keyCode === 76) {
        appendLetter('l', l);
        white(76, l);
    } else if (event.keyCode === 186) {
        forSymbol(';', symbol5);
        white(186, symbol5);
    } else if (event.keyCode === 222) {
        forSymbol("'", symbol6);
        white(222, symbol6);
    } else if (event.keyCode === 13) {
        let br = document.createElement('br');
        allTheText.append(br);
        forSymbol('', enter);
        white(13, enter);
        i = 0;
    } else if (event.keyCode === 16) {
        forSymbol('', shift);
        white(16, shift);
    } else if (event.keyCode === 90) {
        appendLetter('z', z);
        white(90, z);
    } else if (event.keyCode === 88) {
        appendLetter('x', x);
        white(88, x);
    } else if (event.keyCode === 86) {
        appendLetter('v', v);
        white(86, v);
    } else if (event.keyCode === 66) {
        appendLetter('b', b);
        white(66, b);
    } else if (event.keyCode === 78) {
        appendLetter('n', n);
        white(78, n);
    } else if (event.keyCode === 77) {
        appendLetter('m', m);
        white(77, m);
    } else if (event.keyCode === 188) {
        forSymbol(',', comma);
        white(188, comma);
    } else if (event.keyCode === 190) {
        forSymbol('.', dot);
        white(190, dot);
    } else if (event.keyCode === 191) {
        forSymbol('/', slesh);
        white(191, slesh);
    } else if (event.keyCode === 9) {
        forSymbol('', tab);
        tabulation();
        white(9, tab);
    }

    function tabulation() {
        let dots = '....';
        allTheText.insertAdjacentHTML('beforeend', `<span class="dots" style="color: white";>${dots}</span>`);
    }

    // console.log(event);
    // console.log(allTheText.innerText);
    // console.log(i);
    if (i == 114) {
        allTheText.insertAdjacentHTML('beforeend', '<br>');
        i = 0;
    }
    // let lol4 = allTheText.textContent;
    // let back = lol4[lol4.length - 1];
    // console.log(back)
})


function white(key, sel) {
    window.addEventListener('keyup', function () {
        if (event.keyCode === key) {
            sel.style.backgroundColor = 'white';
            sel.style.color = 'black';
        }
    })
}

// let mines = document.querySelector('.idk');
// console.log(mines);