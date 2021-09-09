function formReset()
{
  document.getElementById("form").reset();
}

//Checking for the validity of the user input
function validation()
{
    var yearOfBirth = document.myform.yearOfBirth.value;
    var monthOfBirth = document.myform.monthOfBirth.value;
    var dateOfBirth = document.myform.dateOfBirth.value;
    var chooseGender= document.myform.gender.value;;
    var current_year=new Date().getFullYear();
    
    if((yearOfBirth == "") || (yearOfBirth.length !=4) || (yearOfBirth < 1900) || ( yearOfBirth > current_year)) 
    {
            swal("Please provide a valid year of birth between 1900-2021");
            event.preventDefault(); 
            return false;

    }
    else if(monthOfBirth == "" || monthOfBirth.length >2 || monthOfBirth > 12) 
    {
            swal("Please provide a valid month of birth between 1-12");
            event.preventDefault();
            return false;

    }
    else if(dateOfBirth == "" || dateOfBirth.length >2 || dateOfBirth > 31) {
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

//Formula function to determine day of birth
function day(century, year, month, date)
{
    return ((((century/4)-2*century-1)+(5*year/4) + (26*(month+1)/10) + date)%7);
}

//Akan Name Determinant starts here.
function akanFinder()
{
    var days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday"];
    var maleName = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
    var femaleName = ["Ama", "Akosua", "Adwea", "Abenaa", "Akua", "Yaa", "Afua"];

    var yearValue = document.getElementById("yearOfBirth").value;

    var century = (yearValue.slice(0,2));
    var year = (yearValue.slice(2,4));
    var month = document.getElementById("monthOfBirth").value;
    var date = document.getElementById("dateOfBirth").value;
    var gender = document.getElementById("gender").value;

    var result=day(century,year,month,date).toFixed(); 

    let bornDate = "You were born on ";
    let akanName = ", and your Akan name is "

    if (gender == "1" && result == 0) {
        swal(bornDate +days[0]+ akanName +maleName[0]);
        event.preventDefault();
      } 
    else if (gender == "2" && result == 0) {
        swal(bornDate +days[0]+ akanName +femaleName[0]);
        event.preventDefault();
      }
    else if (gender == "1" && result == 1) {
        swal(bornDate +days[1]+ akanName +maleName[1]);
        event.preventDefault();
      } 
    else if (gender == "2" && result == 1) {
        swal(bornDate +days[1]+ akanName +femaleName[1]);
        event.preventDefault();
      }
    else if (gender == "1" && result == 2) {
        swal(bornDate +days[2]+ akanName +maleName[2]);
        event.preventDefault();
      } 
    else if (gender == "2" && result == 2) {
        swal(bornDate +days[2]+ akanName +femaleName[2]);
        event.preventDefault();
      }
    else if (gender == "1" && result == 3) {
        swal(bornDate +days[3]+ akanName +maleName[3]);
        event.preventDefault();
      }
    else if (gender == "2" && result == 3) {
        swal(bornDate +days[3]+ akanName +femaleName[3]);
        event.preventDefault();
      }
    else if (gender == "1" && result == 4) {
        swal(bornDate +days[4]+ akanName +maleName[4]);
        event.preventDefault();
      }
    else if (gender == "2" && result == 4) {
        swal(bornDate +days[4]+ akanName +femaleName[4]);
        event.preventDefault();
      }
    else if (gender == "1" && result == 5) {
        swal(bornDate +days[5]+ akanName +maleName[5]);
        event.preventDefault();
      }
    else if (gender == "2" && result == 5) {
        swal(bornDate +days[5]+ akanName +femaleName[5]);
        event.preventDefault();
      }
    else if (gender == "1" && result == 6) {
        swal(bornDate +days[6]+ akanName +maleName[6]);
        event.preventDefault();
      }
    else if (gender == "2" && result == 6) {
        swal(bornDate +days[6]+ akanName +femaleName[6]);
        event.preventDefault();
      }   
}