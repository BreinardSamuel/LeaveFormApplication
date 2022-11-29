 
 
function dateChange(){
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate");
 
    endDate.setAttribute("min",startDate);
 };
 
 // for character remaining counter
var textArea = document.getElementById("reason");
var maxCharacters = 100;
textArea.addEventListener('input', () => {
var remainingCharacters = (maxCharacters - textArea.value.length) + "/100 Characters remaining";
document.getElementById("remainingCharacters").innerHTML = remainingCharacters
});

 
 


