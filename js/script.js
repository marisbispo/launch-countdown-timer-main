const segundo = 1000;
const minuto = 1000 * 60;
const hora = minuto * 60;
const dia = hora * 24;

const tempoo = document.querySelector('[data-dia]').innerHTML;

console.log(tempoo);

let dataFutura = new Date('01/01/2023').getTime();
let tempo = setInterval(() => contagemRegressiva(), segundo);

function contagemRegressiva() {
  let dataAgora = new Date(Date.now()).getTime();
  let dataDiferenca = dataFutura - dataAgora;

  document.querySelector('[data-dia]').innerHTML = Math.floor(
    dataDiferenca / dia,
  );
  document.querySelector('[data-hora]').innerHTML = Math.floor(
    (dataDiferenca % dia) / hora,
  );
  document.querySelector('[data-minuto]').innerHTML = Math.floor(
    (dataDiferenca % hora) / minuto,
  );
  document.querySelector('[data-segundo]').innerHTML = Math.floor(
    (dataDiferenca % minuto) / segundo,
  );
}
