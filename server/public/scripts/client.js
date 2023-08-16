console.log('hello calculators');

function getCalculations() {
    console.log('in getCalculations');
    //axios call to server to get calculations
    axios.get("/calculations").then((response) => {
        let calculations = response.data;
        console.log('Calculations from server', calculations);

        renderToDom(calculations);
    })
        .catch((error) => {
            console.log("error in GET", error);
        });
}// end getCalculations

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
