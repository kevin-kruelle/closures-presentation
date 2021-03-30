// const myName = 'Kevin'

// function printName() {
//     console.log(myName)
// }

// myName = 'Joey'

// printName ()

// myName = 'Kate'

// printName()

//Entire thing above is one giant closure.
//global variable is available inside the function.
//Every scope has access to everything outside it's scope.

function outerFunction(outerVariable) {
    const outer2 = 'Hi'
    return function innerFunction(innerVariable) {
        document.getElementById('outer-variable').innerHTML = 'Outer Variable: ' + outerVariable;
        document.getElementById('inner-variable').innerHTML = 'Inner Variable: ' + innerVariable;
        document.getElementById('outer2').innerHTML = outer2;
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')





let diffCounter = function counter() {
    //cnt used for counting
    let cnt = 0,
        item1 = document.querySelector('#item1'),
        item2 = document.querySelector('#item2');

    let print = function print() {
        document.getElementById('button-answer').innerHTML = cnt;
    };

    item1.addEventListener('click', function count1() {
        cnt++;
        print();
    });

    item2.addEventListener('click', function count2() {
        cnt--;
        print();
    })
}

diffCounter()

