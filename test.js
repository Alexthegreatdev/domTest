const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log ({
    h1,
    p,
    parrafito,
    pid,
    input
});


h1.innerText = ` literlamente lo que sea 
No puede ser `; 

/* 
h1.innerHTML = ` literlamente lo que sea 
No puede ser `;  
*/

/* 
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo')
 */

h1.classList.add('rojo')
h1.classList.remove('verde')

/* 
h1.classList.toggle('verde')
h1.classList.contains('verde')
 */

input.value = '';
input.placeholder = 'texto test';

const img = document.createElement('img');

img.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg',)

console.log(img)

pid.append(img);


pid.replaceWith(img)

//or 

pid.innerHTML = "";
pid.append(img);

