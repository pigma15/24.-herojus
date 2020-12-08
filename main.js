function skinChange() {
    let x = document.querySelector("#skin > input:checked").value;
    let y = document.querySelector("#hairLength > input:checked").value;
    let z = document.querySelector("#beard > input:checked").value;
    if (y !== 'bald') {
        document.querySelector('div.face').className = `face ${x} ${z}`;
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

function beardColor() {
    let x = document.querySelector("#skin > input:checked").value;
    let z = document.querySelector("#beard > input:checked").value;
        document.querySelector('div.face').className = `face ${x}  ${z}`;
  }

 function nosePic() {
    let x = document.querySelector("div.nose");
    let z = document.querySelector("#nose > input:checked").value;
    if (z === 'nonose') {
         x.innerHTML = '';
         x.className = `nose`;
    } else if (z === 'nose1') {
         x.innerHTML = '<img src="./pic/nose1.png" alt="nose1"></img>';
         x.className = `nose`;
    } else if (z === 'nose2') {
        x.innerHTML = '<img src="./pic/nose2.png" alt="nose2"></img>';
        x.className = `nose`
    } else if ( z === 'mask') {
        x.innerHTML = '<img src="./pic/mask.png" alt="mask"></img>';
        x.className = `nose mask`;
    } else {
        x.innerHTML = '';
        x.className = `nose`;
    }
     
 } 



