document.addEventListener("DOMContentLoaded", function() {
    var valueElements = document.getElementsByClassName("value");   
    //console.log(valueElements)
    for( var valueElement of valueElements){
        //console.log(valueElement)
        //console.log(valueElement.textContent.trim());
        if (valueElement.textContent.trim() === "Pago") {
            valueElement.classList.add("value-paid");
            //console.log(valueElement)
        } else {
            valueElement.classList.remove("value-paid");
        }
    }
});
