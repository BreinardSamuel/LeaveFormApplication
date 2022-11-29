function proceed(){
    var userName = document.getElementById("userName");
    var projectName = document.getElementById("projectName");
    var startDate = document.getElementById("startDate");
    var endDate = document.getElementById("endDate");
    var typeOfLeave = document.getElementById("typeOfLeave");
    var reason = document.getElementById("reason");
     
    if(userName.value.length>1 && projectName.value.length>1 && startDate.value.length>1 && endDate.value.length>1 && typeOfLeave.value.length>1 && reason.value.length>1){
     
    alert("Successfully submitted !!!");

    var table = document.getElementById("table");
    var row = table.insertRow(1);
     
    var cell1 = row.insertCell(0);
    cell1.innerHTML=userName.value;
     
    var cell2 = row.insertCell(1);
    cell2.innerHTML = projectName.value;
     
    var cell3 = row.insertCell(2);
    cell3.innerHTML = startDate.value;
     
    var cell4 = row.insertCell(3);
    cell4.innerHTML = endDate.value;
     
    var cell5 = row.insertCell(4);
    cell5.innerHTML=typeOfLeave.value;
     
    var cell6 = row.insertCell(5);
    cell6.innerHTML=reason.value;
    }
    };
   
   
   


