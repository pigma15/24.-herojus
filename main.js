/*

function myFunction() {
    let x = document.querySelector("#skin input:checked").value;
    document.querySelector('.face').className = x
  }

*/

/* const op = document.querySelector('#skin > input:checked').value;
console.log(op); */


function skinChange() {
    let x = document.querySelector("#skin > input:checked").value;
    let y = document.querySelector("#hairLength > input:checked").value;
    if (y !== 'bald') {
        document.querySelector('div.face').className = `face ${x}`;
    } else {
        document.querySelector('div.face').className = `face ${x}`;
        document.querySelector('div.hair').className = `hair ${x}`;
    }
  }

function hairLengthF() {
    let y = document.querySelector("#hairLength > input:checked").value;
    let x = document.querySelector("#skin > input:checked").value;
    if (y !== 'bald') {
        document.querySelector('div.hair').className = `hair ${y}`;
    } else {
        document.querySelector('div.hair').className = `hair ${x}`;
    }
  }

function hairColorF() {
    let y = document.querySelector("#hairLength > input:checked").value;
    let z = document.querySelector("#hairColor > input:checked").value;
    let x = document.querySelector("#skin > input:checked").value;
    if (y !== 'bald') {
        document.querySelector('div.hair').className = `hair ${y} ${z}`;
    } else {
        document.querySelector('div.hair').className = `hair ${x}`;
    }
  }

function eyesColor() {
    let x = document.querySelector("#eyes > input:checked").value;
    document.querySelector("div.eyes").className = `eyes ${x}`;
    document.querySelector("div.eyes:nth-child(2)").className = `eyes ${x}`;
}



