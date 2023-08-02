console.log('hello calculators');

function getCalculations(){
    console.log('in getCalculations');
    //axios call to server to get calculations
    axios.get("/calculations/").then((response) => {
        let calculations = response.data;
        console.log(calculations);

        updateDom(calculations);
    })
    .catch((error) => {
        console.log("error in GET", error);
    });
}// end getCalculations

function submitCalculations(event){
    console.log('in submitCalculations');
    event.preventDefault();
    let integerOne = Numberdocument.querySelector('#firstNumber').value
    let integerTwo = Numberdocument.querySelector('#secondNumber').value

    function mathsNumbers(event){
        console.log('operator', event.target.innerHTML);
        let calc = [
            {
                integerOne: '',
                operator: '',
                integerTwo: ''
            }
        ];

        axios.post("/calculations", calc).then((response) => {
            console.log('back from POST:', response);
            document.querySelector('#firstNumber').value = ''
            document.querySelector('#secondNumber').value = ''
            getCalculations();
        })
        .catch((error) => {
            console.log('error in POST', error);
        })

        document.querySelector('#clearButton').reset();
    }
}