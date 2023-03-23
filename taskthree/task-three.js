window.addEventListener("load", function () {
    // Your code here: 
    const paragraphs = document.querySelectorAll("p");
    // TODO Your code here.
    paragraphs.forEach(function(paragraphs) {
        paragraphs.addEventListener("click", function (event) {
            resetParagraph();
            event.target.classList.add("selected");
        });
    });

    function resetParagraph(){
        paragraphs.forEach(function(paragraph) {
                paragraph.classList.remove("selected");
            
        });
    }

});




