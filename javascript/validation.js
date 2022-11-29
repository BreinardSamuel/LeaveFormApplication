//! Function for key up inside inputfield(Name)
function lettersonly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
 };
 
 var userName = document.getElementById("userName");
 var projectName = document.getElementById("projectName");
 var startDate = document.getElementById("startDate");
 var endDate = document.getElementById("endDate");
 var radioButtons = document.getElementsByClassName("radioButtons");
 var buttonSubmit = document.getElementById("buttonSubmit");
 var am = document.getElementById("am");
 var pm = document.getElementById("pm");
 var allDay = document.getElementById("allDay");
 var typeOfLeave = document.getElementById("typeOfLeave");
 var reason = document.getElementById("reason");
 
 
 var nameError = document.getElementById("nameError");
 var projectNameError = document.getElementById("projectNameError");
 var startDateError = document.getElementById("startDateError");
 var endDateError = document.getElementById("endDateError");
 var radioButtonsError = document.getElementById("radioButtonsError");
 var typeOfLeaveError = document.getElementById("typeOfLeaveError");
 var reasonError = document.getElementById("reasonError");
 
 
 
 // validation for userName
 // v_userName = validation for username
 
 buttonSubmit.addEventListener("click",v_userName);
 function v_userName(event){
    event.preventDefault();
    if(userName.value.trim()===""){
 nameError.innerHTML="Enter your name here";
 return true;
    }else{
        nameError.innerHTML="";
    }
 };
 
 // validation for projectName
    // v_projectname = validation
 
 
 buttonSubmit.addEventListener("click",v_projectName);
    function v_projectName(event){
        event.preventDefault();
        if(projectName.value.trim()===""){
 projectNameError.innerHTML="Enter your Project Name";
 return true;
        }else{
 projectNameError.innerHTML="";
        }
    };
 
    // validation for startDate
    // v = stands for validation function
 
    buttonSubmit.addEventListener("click",v_startDate);
    function v_startDate(event){
        event.preventDefault();
        if(startDate.value===""){
 startDateError.innerHTML="Enter a valid Date";
 return true;
        }else{
            startDateError.innerHTML="";
            }
 
    };
 
 
    // validation for end date
    // v- validation function
 
 
 buttonSubmit.addEventListener("click",v_endDate);
 function v_endDate(event){
    event.preventDefault();
    if(endDate.value===""){
        endDateError.innerHTML="Enter a Valid End Date";
        return true;
    }else{
        endDateError.innerHTML="";
    }
 
 };
 
 
 // validation for radio buttons
 // v- validation function
 
 
 buttonSubmit.addEventListener("click",v_radioButtons);
 function v_radioButtons(event){
 event.preventDefault();
 if(am.checked==true || pm.checked==true || allDay.checked==true){
 radioButtonsError.innerHTML="";
 return true;
 }else{
    radioButtonsError.innerHTML="This should not be blank";
 }
 };
 
 
 // validation for type of typeOfLeave
 // v- function for validation
 
//  buttonSubmit.addEventListener("click",v_typeOfLeave);
//  function v_typeOfLeave(event){
//  event.preventDefault();
//  if (typeOfLeave.value==="" || typeOfLeave.value===null){
//  typeOfLeaveError.innerHTML="Fill this field";
//  return true;
//  }else{
//     typeOfLeaveError.innerHTML="";
//  }
//  };
 
 // validation for reason
 // v- function for validation
 
 
 buttonSubmit.addEventListener("click",v_reason);
 function v_reason(event){
 event.preventDefault();
 if(reason.value.trim()===""){
 reasonError.innerHTML="Enter a valid reason";
 return true;
 }else{
    reasonError.innerHTML="";
 }
 if(userName.value.length>1 && projectName.value.length>1 && startDate.value.length>1 && endDate.value.length>1 && typeOfLeave.value.length>1 && reason.value.length>1){
     document.getElementById("form").reset();
 }

 };
 
 
 
 
 

