// Selectors
let screen = document.querySelector('.screen');
let table = document.querySelector('.table');
let btn = document.querySelectorAll('.button');
let clear = document.querySelector('.clear')
let backspc = document.querySelector('.delete')
let equal = document.querySelector('.equal')
let prcnt = document.querySelector('.percent');

let number = 'number';
let percentToGet = 'number';

// addEventListener
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btnext=e.target.innerText;

        if(btnext=='x'){
           
            btnext='*';
        }
        if(btnext=='÷'){
           
            btnext='/';
        }
        screen.value+=btnext;
});
}

clear.addEventListener('click',(e)=>{
        screen.value='';
});

backspc.addEventListener('click',(e)=>{
        screen.value=screen.value.substr(0,screen.value.length-1)
});

equal.addEventListener('click',(e)=>{
  
    screen.value=eval(screen.value)
});

prcnt.addEventListener('click',(e)=>{
    percent = (percentToGet / 100) * number;
    screen.value = percent;
})

// multiply.addEventListener('click',(e)=>{
//    if(btnext=='x'){
//        btnext='*';
//    }
// });




// let num1 = '';
// let num2 = '';
// let operation = '';

// // Add addEventListener
// table.addEventListener('click', (e) => {
//     if (e.target.classList[0] === 'clear') {
//         num1 = '';
//         num2 = '';
//         operation = '';
//         screen.innerText = '';
//     }
//     if (e.target.classList[0] === 'delete') {
//         if (operation === '') {
//           s  const index = num1.length - 1
//             num1 = num1.slice(0, index)
//             screen.innerText = num1
//         } else {
//             const index = num2.length - 1
//             num2 = num2.slice(0, index)
//             screen.innerText = num2
//         }
//     }
//     if (e.target.classList[0] === 'percent') {
//         operation = e.target.classList[0]

//     }
//     if (e.target.classList[0] === 'divide') {
//         operation = e.target.classList[0]

//     }
//     if (e.target.classList[0] === 'multiply') {
//         operation = e.target.classList[0]
//         console.log(operation, num1, num2);

//     }
//     if (e.target.classList[0] === 'subtract') {
//         operation = e.target.classList[0]
//     }
//     if (e.target.classList[0] === 'add') {
//         operation = e.target.classList[0]

//     }
//     if (e.target.classList[0] === 'equal') {
//         if (operation === 'add') {
//             num1 = add(Number(num1), Number(num2))
//         } else if (operation === 'subtract') {
//             num1 = subtract(Number(num1), Number(num2))
//         } else if (operation === 'multiply') {
//             num1 = multiply(Number(num1), Number(num2))
//         } else if (operation === 'divide') {
//             num1 = divide(Number(num1), Number(num2))
//         } else if (operation === 'percent'){
//             num1 = percent(Number(num1), Number(num2))
//         }
//         num1 = window[operation](Number(num1), Number(num2))
//         // num2 = ''
//         // operation = ''
//         // screen.innerText = num1;
//     }

//     if (e.target.classList[0] === 'button') {
//         if (operation === '') {
//             num1 = num1 + '' + e.target.innerText
//             screen.innerText = num1
//         } else {
//             num2 = num2 + '' + e.target.innerText
//             screen.innerText = num2
//         }

//     }
// })

// table.addEventListener('click', colorchange);

// function colorchange(){
//     table.colorchange(pink)
//     console.log(color);
// }
    

    


// function add(num1, num2) {
//     console.log(num1);
//     return num1 + num2
// }

// function subtract(num1, num2) {
//     return num1 - num2
// }

// function multiply(num1, num2) {
//     return num1 * num2
// }

// function divide(num1, num2) {
//     return num1 / num2
// }

// function percent(num1, num2) {
//     return (num1 * num2) / 100
// }





