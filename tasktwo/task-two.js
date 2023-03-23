window.addEventListener("load", function () {
    // Your code here: 
   const button = document.querySelector("#calculate")

   button.addEventListener("click", function(event){
                
        const input = document.getElementById('arrayNums').value;
        let array = input.split(",");
        console.log(array);
        const ul = document.querySelector("ul");
        let list = document.createElement("li");
        for (let index = 0; index < array.length; index++) {
            list.innerHTML = `${array[index]}`
            ul.appendChild(list);
        }
        
        function calculateAverage(array) {
            var total = 0;
            var count = 0;
        
            array.forEach(function(item, index) {
                total += parseFloat(item);
                count++;
            });
        
            return total / count;
        }
        
        const result = document.querySelector("div > p");
        result.innerHTML = `The average of all numbers is ${calculateAverage(array)}`;
        //result.textContent(`The average of all numbers is ${calculateAverage(array)}`);
        console.log(calculateAverage(array));

   }
   )

});




