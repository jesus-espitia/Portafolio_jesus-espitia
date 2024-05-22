window.addEventListener("load", function(){
  document.getElementById("loader").classList.toggle("loader2")
})

let btnValidar = document.getElementById("btnValidar");
let btnValidar1 = document.getElementById("btnValidar1");
let btnValidar2= document.getElementById("btnValidar2");
let btnValidar3 = document.getElementById("btnValidar3");
let btnValidar4 = document.getElementById("btnValidar4");
let btnValidar5 = document.getElementById("btnValidar5");
let btnValidar6 = document.getElementById("btnValidar6");
let btnValidar7 = document.getElementById("btnValidar7");
let btnValidar8= document.getElementById("btnValidar8");
let btnValidar9= document.getElementById("btnValidar9");
let btnValidar10= document.getElementById("btnValidar10");
let divPuntos = document.getElementById("divPuntos");


document.addEventListener('DOMContentLoaded', () => {
  divPuntos.innerHTML = `
  <div style="border: 1px solid red; border-radius: 20px;">
  <h3> Puntos: 
    ${puntos}
  </h3>
  </div>`
  ;
})

let puntos = 0;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("a1").checked = false;
  document.getElementById("a2").checked = false;
  document.getElementById("a3").checked = false;
  document.getElementById("b1").checked = false;
  document.getElementById("b2").checked = false;
  document.getElementById("b3").checked = false;
  document.getElementById("c1").checked = false;
  document.getElementById("c2").checked = false;
  document.getElementById("c3").checked = false;
  document.getElementById("d1").checked = false;
  document.getElementById("d2").checked = false;
  document.getElementById("d3").checked = false;
  document.getElementById("e1").checked = false;
  document.getElementById("e2").checked = false;
  document.getElementById("e3").checked = false;
  document.getElementById("f1").checked = false;
  document.getElementById("f2").checked = false;
  document.getElementById("f3").checked = false;
  document.getElementById("g1").checked = false;
  document.getElementById("g2").checked = false;
  document.getElementById("g3").checked = false;
  document.getElementById("i1").checked = false;
  document.getElementById("i2").checked = false;
  document.getElementById("i3").checked = false;
  document.getElementById("j1").checked = false;
  document.getElementById("j2").checked = false;
  document.getElementById("j3").checked = false;
  document.getElementById("k1").checked = false;
  document.getElementById("k2").checked = false;
  document.getElementById("k3").checked = false;
  document.getElementById("l1").checked = false;
  document.getElementById("l2").checked = false;
});

//boton 1 
btnValidar.addEventListener("click", () => {

    if (document.getElementById('a2').checked === true) {
        puntos = puntos + 10;
        Swal.fire(
            'Well done!',
            `Excelente, ganaste ${puntos} puntos!`,
            'success'
        );

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`;
    } 
    else {
      puntos -= 5;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Qué mal :(',
        });

        divPuntos.innerHTML = `
        <div style="border: 1px solid red; border-radius: 20px;">
        <h3> Puntos: 
          ${puntos}
        </h3>
        </div>`;
    }

});

//boton 2
btnValidar1.addEventListener("click", () => {

  if (document.getElementById('b1').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      )

divPuntos.innerHTML = `
<div style="border: 1px solid red; border-radius: 20px;">
<h3> Puntos: 
  ${puntos}
</h3>
</div>` 
  } else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      })

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`
  }

})


//boton 3
btnValidar2.addEventListener("click", () => {

  if (document.getElementById('c1').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      )

divPuntos.innerHTML = `
<div style="border: 1px solid red; border-radius: 20px;">
<h3> Puntos: 
  ${puntos}
</h3>
</div>`

  } else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      })

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`
  }

})

//boton 4
btnValidar3.addEventListener("click", () => {

  if (document.getElementById('d2').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      )

divPuntos.innerHTML = `
<div style="border: 1px solid red; border-radius: 20px;">
<h3> Puntos: 
  ${puntos}
</h3>
</div>`

  } else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      })

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`
  }

})

//boton5
btnValidar4.addEventListener("click", () => {

  if (document.getElementById('e1').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      )

divPuntos.innerHTML = `
<div style="border: 1px solid red; border-radius: 20px;">
<h3> Puntos: 
  ${puntos}
</h3>
</div>`

  } else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      })

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`
  }

})

//boton 6
btnValidar5.addEventListener("click", () => {

  if (document.getElementById('f2').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      );

    divPuntos.innerHTML = `
    <div style="border: 1px solid red; border-radius: 20px;">
    <h3> Puntos: 
      ${puntos}
    </h3>
    </div>` ;
  } 
  else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      });

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`;
  }

});

//botan 7
btnValidar6.addEventListener("click", () => {

  if (document.getElementById('g3').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      );

    divPuntos.innerHTML = `
    <div style="border: 1px solid red; border-radius: 20px;">
    <h3> Puntos: 
      ${puntos}
    </h3>
    </div>` ;
  } 
  else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      });

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`;
  }

});

//boton 8
btnValidar7.addEventListener("click", () => {

  if (document.getElementById('i2').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      );

    divPuntos.innerHTML = `
    <div style="border: 1px solid red; border-radius: 20px;">
    <h3> Puntos: 
      ${puntos}
    </h3>
    </div>` ;
  } 
  else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      });

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`;
  }

});
//boton 9
btnValidar8.addEventListener("click", () => {

  if (document.getElementById('j3').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      );

    divPuntos.innerHTML = `
    <div style="border: 1px solid red; border-radius: 20px;">
    <h3> Puntos: 
      ${puntos}
    </h3>
    </div>`;
  } 
  else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      });

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`;
  }

});

//boton 10 
btnValidar9.addEventListener("click", () => {

  if (document.getElementById('k1').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
          'Well done!',
          `Excelente, ganaste ${puntos} puntos!`,
          'success'
      );

    divPuntos.innerHTML = `
    <div style="border: 1px solid red; border-radius: 20px;">
    <h3> Puntos: 
      ${puntos}
    </h3>
    </div>`;
  } 
  else {
    puntos -= 5;
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qué mal :(',
      });

      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`;
  }

});


//boton 11
btnValidar10.addEventListener("click", () => {

  if (document.getElementById('l1').checked === true) {
      puntos = puntos + 10;
      Swal.fire(
        `MUY BIEN MI VIDA, TE AMO. ESTOS FUERON TUS PUNTOS:/${puntos}/ SIGNIFICA QUE SI ME AMAS `,
);

    divPuntos.innerHTML = `
    <div style="border: 1px solid red; border-radius: 20px;">
    <h3> Puntos: 
      ${puntos}
    </h3>
    </div>`;
  } 
  
  else {
    puntos -= 70;
    Swal.fire(
      `UY AMOR ¿Y POR QUÉ?, TE AMO JIJI. ESTOS FUERON TUS PUNTOS: /${puntos}/ QUE MAl QUE NO TE HAYA GUSTADO `,
);


      divPuntos.innerHTML = `
      <div style="border: 1px solid red; border-radius: 20px;">
      <h3> Puntos: 
        ${puntos}
      </h3>
      </div>`;
  }

});

