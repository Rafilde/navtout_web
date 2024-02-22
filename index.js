document.addEventListener("DOMContentLoaded", function() {
    var valueElements = document.getElementsByClassName("value");   
    for( var valueElement of valueElements){
        if (valueElement.textContent.trim() === "Pago") {
            valueElement.classList.add("value-paid");
        } else {
            valueElement.classList.remove("value-paid");
        }
    }
});
