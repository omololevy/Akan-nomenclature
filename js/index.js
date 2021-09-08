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
            Event.preventDefault(); 
            return false;

    }
    else if(monthofbirth == "" || monthofbirth.length >2 || monthofbirth > 12) 
    {
            swal("Please provide a valid month of birth between 1-12");
            Event.preventDefault();
            return false;

    }
    else if(dateofbirth == "" || dateofbirth.length >2 || dateofbirth > 31) {
            swal("Please provide a valid date of birth between 1-31");
            Event.preventDefault();
            return false;

    }
    else if(chooseGender == ""){
            swal("You must choose a gender");
            Event.preventDefault();
            return false;
    }
    else
    {
        return true;
    }
}

function day(century, year, month, date)
{
    return ((((century/4)-2*century-1)+(5*year/4) + (26*(month+1)/10) + date)%7);
}

function akanFinder()
{
    var days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday"];
    var maleName = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
    var femaleName = ["Ama", "Akosua", "Adwea", "Abenaa", "Akua", "Yaa", "Afua"];

    var yearValue = document.getElementById("yearofbirth").value;

    var century = (yearValue.slice(0,2));
    var year = (yearValue.slice(2,4));
    var month = document.getElementById("monthofbirth").value;
    var date = document.getElementById("dateofbirth").value;
    var gender = document.getElementById("gender").value;

    var result=day(century,year,month,date).toFixed(); 

    let bornDate = "You were born on ";
    let akanName = ", and your Akan name is "

    if (gender == "1" && result == 0) {
        swal(bornDate +days[0]+ akanName +maleName[0]);
        Event.preventDefault();
      } 
    else if (gender == "2" && result == 0) {
        swal(bornDate +days[0]+ akanName +femaleName[0]);
        Event.preventDefault();
      }
    else if (gender == "1" && result == 1) {
        swal(bornDate +days[1]+ akanName +maleName[1]);
        Event.preventDefault();
      } 
    else if (gender == "2" && result == 1) {
        swal(bornDate +days[1]+ akanName +femaleName[1]);
        Event.preventDefault();
      }
    else if (gender == "1" && result == 2) {
        swal(bornDate +days[2]+ akanName +maleName[2]);
        Event.preventDefault();
      } 
    else if (gender == "2" && result == 2) {
        swal(bornDate +days[2]+ akanName +femaleName[2]);
        Event.preventDefault();
      }
    else if (gender == "1" && result == 3) {
        swal(bornDate +days[3]+ akanName +maleName[3]);
        Event.preventDefault();
      }
    else if (gender == "2" && result == 3) {
        swal(bornDate +days[3]+ akanName +femaleName[3]);
        Event.preventDefault();
      }
    else if (gender == "1" && result == 4) {
        swal(bornDate +days[4]+ akanName +maleName[4]);
        Event.preventDefault();
      }
    else if (gender == "2" && result == 4) {
        swal(bornDate +days[4]+ akanName +femaleName[4]);
        Event.preventDefault();
      }
    else if (gender == "1" && result == 5) {
        swal(bornDate +days[5]+ akanName +maleName[5]);
        Event.preventDefault();
      }
    else if (gender == "2" && result == 5) {
        swal(bornDate +days[5]+ akanName +femaleName[5]);
        Event.preventDefault();
      }
    else if (gender == "1" && result == 6) {
        swal(bornDate +days[6]+ akanName +maleName[6]);
        Event.preventDefault();
      }
    else if (gender == "2" && result == 6) {
        swal(bornDate +days[6]+ akanName +femaleName[6]);
        Event.preventDefault();
      }
      
    
}