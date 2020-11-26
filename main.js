/*

function myFunction() {
    let x = document.querySelector("#skin input:checked").value;
    document.querySelector('.face').className = x
  }

*/

/* const op = document.querySelector('#skin > input:checked').value;
console.log(op); */

const jop = document.querySelector('div.face');
console.log(jop);

function myFunction() {
    let x = document.querySelector("#skin > input:checked").value;
    document.querySelector('div.face').className = `face ${x}`;
  }


