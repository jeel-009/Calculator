let btnnum = document.querySelectorAll('.btn-num');
let inp = document.querySelector('#display')
let add = document.querySelector('.add') //acces +
let ans = document.querySelector('.ans') //acces =
let sub = document.querySelector('.sub'); //acces -
let mul = document.querySelector('.mul'); //acces *
let div = document.querySelector('.div'); //acces /
let ac = document.querySelector('.ac'); //acces ac

let operator;

let firstDigits = []; //stored in arry 1st click
let secondDigits = []; //stored array in 2nd click
let copyFirst = [];


for (let i = 0; i < btnnum.length; i++) {
    btnnum[i].addEventListener('click', () => {
       
        if (!operator) {
            firstDigits.push(btnnum[i].innerText);
            inp.value = firstDigits.join('');
        }else  {
            secondDigits.push(btnnum[i].innerText);
            inp.value = copyFirst.join("")+operator+secondDigits.join('');
          
        }
    });

}


add.addEventListener('click', () => { //for +
  
    operator = '+';
    operation();

});

sub.addEventListener('click', () => { //for sub
    operator = '-';
    operation();
})

mul.addEventListener('click', () => { //for *
    operator = '*';
    operation();
})

div.addEventListener('click', () => { //for /
    operator = '/';
    operation();
})

function operation() {
       if(firstDigits.length === 0){
            return alert('Enter a Number');
        }
    copyFirst = [...firstDigits];
    inp.value = copyFirst.join('') + operator;
    firstDigits = [];
}

ans.addEventListener('click', () => {
     let [num1, num2] = covertintonum();
    if (operator === '+') {
        let total = num1 + num2
        inp.value = total;

    } else if (operator === '-') {
        let total = num1 - num2;
        inp.value = total;
    }
    else if (operator === '*') {
        let total = num1 * num2;
        inp.value = total;
    }
    else if (operator === '/') {
        if(num2 === 0){
            inp.value='Error';
            return;
        }
        let total = num1 / num2;
        inp.value = total;
    }

      reset();
    
})

ac.addEventListener('click',()=>{
    reset();
    inp.value='';
})

function covertintonum() {
   let num1 = Number(copyFirst.join(''));
   let num2 = Number(secondDigits.join(''));
    return [num1, num2];
}

function reset(){
    firstDigits = [];
    copyFirst = [];
    secondDigits = [];
    operator = undefined; //secned time opretion perform
}
