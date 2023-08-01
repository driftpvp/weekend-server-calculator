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