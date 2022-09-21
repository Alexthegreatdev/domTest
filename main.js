const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

/* function btnOnClick() {
    let i = (input1.value*1) + (input2.value*1);
    result.innerText = `Resultado : ${i}` ;
}; */



form.addEventListener('submit', (e) => {
    console.log(e)
    e.preventDefault();
    let i = (input1.value*1) + (input2.value*1);
    result.innerText = `Resultado : ${i}` ;
})