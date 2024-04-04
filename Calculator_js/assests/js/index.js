// Start Javascript

// variable declaration and assigning
let output = document.querySelector("#output");
let btn_key = document.querySelectorAll("#btn-key");
let btn_clear = document.querySelector("#btn-key-clear");
let btn_delete = document.querySelector("#btn-key-delete");
let btn_equal = document.querySelector("#btn-key-equal");

// For loop to get button key value
for(let btnValue of btn_key){
    btnValue.addEventListener("click", (e) => {
        number = e.target.innerHTML;
        output.value += number;
    });
};

// Equal button key event handler
btn_equal.addEventListener("click", function() {
    // Try to check for error
    try{
        output.value = eval(output.value);
    }
    // Catch to handle error message
    catch(err){
        alert("Invalid!!! " + err);
    }
});
// Clear button key event handler
btn_clear.addEventListener("click", function() {
    output.value=" ";
});
// Delete button key event handler
btn_delete.addEventListener("click", function() {
    output.value = output.value.slice(0,-1);
});

// End Javascript