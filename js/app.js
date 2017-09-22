let chosenMonth;
let chosenDay;
let chosenYear = $('#yearInput').val();

let year = new Date().getFullYear();
let month = new Date().getMonth();


const ageCalculated = () => {
    console.log(chosenMonth);
    if ((month+1) < chosenMonth) {
        return (year - chosenYear)-1;
    }else {
        return (year - chosenYear);
    }
};


function update (){
    chosenMonth = $('#monthInput').val();
    $('#monthOutput').text(chosenMonth);
     $('#finalAnswer').text(ageCalculated());
}
$('#monthInput').on('input',update);
//above we tried it the way it was in the canvas project
//below we used the HTML5 attribute oninput="dayOutput()"

const dayOutput = () => {
    let chosenDay = $('#dayInput').val();
    $('#dayOutput').text(chosenDay);
};
//below we used the HTML5 attribute oninput="dayOutput()"
const yearOutput = () => {
    chosenYear = $('#yearInput').val();
    $('#yearOutput').text(chosenYear);
    $('#finalAnswer').text(ageCalculated());
};



// below we use the new Date() to get the date and .toDateString to put it in human form
var d =  new Date().toDateString();
$('#todaysDate').text(d);













