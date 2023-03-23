window.addEventListener("load", function () {
    // Your code here: 
    // Gets the #calculate button
    const button = document.querySelector("#clickButton");
    button.addEventListener("click", function (event) {

        // This code gets the value the user enters, as an integer.
        const input = document.getElementById('txtName').value;
        // TODO Your code for Exercise Seven here.
        alert(`Hello ${input}`);

    });
});




