console.log('hello calculators');

let operator = null;

function getCalculations() {
    console.log('in getCalculations');
    //axios call to server to get calculations
    axios.get("/calculations").then((response) => {
        //let calcsFromServer = response.data;
        console.log('Calculations from server', response);
        renderToDom(response.data);
        
    })
        .catch((error) => {
            console.log("error in GET", error);
        });
}// end getCalculations

function renderToDOM(calcs) {
    let outputList = document.querySelector('#output');
    outputList.innerHTML = `<h2>${calcs.at(-1).result}</h2>`

    for (let calculations of calcs) {
        outputList.innerHTML += `
            <p>${calculations.firstNumber} ${calculations.operator} 
            ${calculations.secondNumber} = ${calculations.result}</p>
        `;
    }
}



function operatorClick(operatorFromHTML) {
    operator = operatorFromHTML;
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => {
    button.addEventListener("click", function (event) { 
        operatorButtons.forEach(button => {
            button.style.backgroundColor = '';
        }); 
        event.target.style.backgroundColor = 'red';
    });
});
}

function submitCalculations(event) {
    console.log('in submitCalculations');
    event.preventDefault();
    let firstNumber = Number(document.querySelector('#firstNumber').value);
    let secondNumber = Number(document.querySelector('#secondNumber').value);
    let formula = {
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber
    }


    // function mathsNumbers(event){
    //     console.log('operator', event.target.innerHTML);
    //     let calc = [
    //         {
    //             firstNumber: '',
    //             operator: '',
    //             secondNumber: ''
    //         }
    //     ];

    //     function equation()
    //         if (operator = '+') {
    //             calc = firstNumber + secondNumber
    //         } else {
    //         if (operator = '-')  {
    //             calc = firstNumber - secondNumber
    //         } else {
    //         if (operator = '*')  {
    //             calc = firstNumber * secondNumber
    //         } else {
    //         if (operator = '/')  {
    //             calc = firstNumber / secondNumber
    //         } 
    //         } 
    //         }

    axios.post("/calculations", formula).then((response) => {
        console.log('back from POST:', response);
        document.querySelector('#firstNumber').value = ''
        document.querySelector('#secondNumber').value = ''
        getCalculations();
    })
    .catch((error) => {
    console.log('error in POST', error);
    })

    //document.querySelector('#clearButton').reset();
}


