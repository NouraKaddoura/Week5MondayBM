// Variables
var cities = ['los angeles','new york','sydney'];
console.log(cities);

//Event Listeners
$('#myButton').on('click', doSomething);

//Initialize

// Remember how .html() is a function?
$('#myArray').html(cities);

// Here is another function:
// $.each()
// this function takes two variables: the array and a function
$.each(cities, readArray);



// Function Definitions
function readArray(index, value) {
    console.log(index, value);
}

function doSomething() {
    console.log("Say Hi!");

}