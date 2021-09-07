function formReset()
{
  document.getElementById("form").reset();
}

function validation()
{
    var yearofbirth = document.myform.yearofbirth.value;
    var monthofbirth = document.myform.monthofbirth.value;
    var dateofbirth = document.myform.dateofbirth.value;
    var chooseGender= document.myform.gender.value;;
    var current_year=new Date().getFullYear();
    
    if((yearofbirth == "") || (yearofbirth.length !=4) || 
    (yearofbirth < 1900) || ( yearofbirth > current_year)) 
    {
            swal("Please provide a valid year of birth between 1900-2020");
            event.preventDefault(); 
            return false;

    }
    else if(monthofbirth == "" || monthofbirth.length >2 || monthofbirth > 12) 
    {
            swal("Please provide a valid month of birth between 1-12");
            event.preventDefault();
            return false;

    }
    else if(dateofbirth == "" || dateofbirth.length >2 || dateofbirth > 31) {
            swal("Please provide a valid date of birth between 1-31");
            event.preventDefault();
            return false;

    }
    else if(chooseGender == ""){
            swal("You must choose a gender");
            event.preventDefault();
            return false;
    }
    else
    {
        return true;
    }
}