// Function to Operate DatePicker
$(function() {
    $( "#dob" ).datepicker({ 
      minDate: (new Date(2000, 1 - 1, 1)),
      changeMonth: true,
      changeYear: true,
      onSelect: function(dateText, inst) {
              var startDate = new Date(dateText);
              var selectedYear = startDate.getFullYear();
        // selected year
        if(selectedYear<1970) {
          document.getElementById('dob').style.backgroundColor="F5AAAA" ;
          document.getElementById('dob').style.borderColor="red" ;
                return false ;
        }
        document.getElementById('dob').style.backgroundColor="#9Ceec6" ;
        document.getElementById('dob').style.borderColor="green" ;
      } 
   });
  });

//Function that is used to Validate Name
function validateName() {
  var x=document.getElementById('user') ;
  var array=[];
  if((x.value).length<8) {
      alert("UserName must be greater than 8 characters");
      document.getElementById("user").style.borderColor = "red";
      document.getElementById("user").style.backgroundColor="F5AAAA" ;
      x.select();
      return false ;
    }
  document.getElementById("user").style.borderColor = "green";
  document.getElementById("user").style.backgroundColor="9CEEC6" ;
  return true ;
}    

//Function to check the validity of entered Password
function validatePass() {
  var a=0,b=0,c=0;
  var y=document.getElementById('pass');
  if((y.value).length<6){
    alert("Too short! Must be atleast 6 characters in length");
    document.getElementById("pass").style.borderColor = "red";
    document.getElementById("pass").style.backgroundColor="F5AAAA" ;
    y.select() ;
    return false ;
  }
  for(var i=0;i<(y.value).length;i++) {
    if((y.value)[i]>='a' && (y.value)[i]<='z')
      a++;
    if((y.value)[i]>='A' && (y.value)[i]<='Z')
      b++;
    if((y.value)[i]>='0' && (y.value)[i]<='9')
      c++;
  }
  if(a===0 || b===0 || c===0) {
    alert("Password must have atleat a Upper Case Letter, a Lower Case Letter, & one Number ");
    document.getElementById("pass").style.borderColor = "red";
    document.getElementById("pass").style.backgroundColor="F5AAAA" ;
    y.select() ;
    return false ;
  }
  document.getElementById("pass").style.borderColor = "green";
  document.getElementById("pass").style.backgroundColor="9CEEC6" ;
  return true ;
}

//Function that is used to confirm whether the passwords match or not
function validateCom() {
  var z=document.getElementById('com');
  if((document.getElementById('pass')).value !==z.value) {
    alert("Passwords Do Not Match");
    document.getElementById("com").style.borderColor = "red";  
    document.getElementById("com").style.backgroundColor="F5AAAA" ;
    z.select() ;
    return false ;
  }
  document.getElementById("com").style.borderColor = "green";
  document.getElementById("com").style.backgroundColor="9CEEC6" ;
  return true ;
}     


//Basic function to check for valid Email
function validateEmail() {
  var a=0,b=0,posAt,posDot;
  var x=document.getElementById('emailid') ;
  for(var i=0;i<(x.value).length;i++)
  {
    if((x.value)[i]==='@') {
      a++;
      posAt=i ;
    }
	for(var j=i;j<x.value.length;j++) {
          if((x.value)[j]==='.'){
            b++;
            posDot=j;
          }
            
        }
  }
  if(posAt===0 || posAt===x.value.length || a>1 || a===0  || posDot===posAt+1) {
    alert("Please Enter A Valid Email Id");
    document.getElementById("emailid").style.borderColor = "red";
    document.getElementById("emailid").style.backgroundColor="F5AAAA" ;
    x.select() ;
    return false ;
  }
  document.getElementById("emailid").style.borderColor = "green";
  document.getElementById("emailid").style.backgroundColor="9CEEC6" ;
  return true ;
}

//Function that will Run on Form Submission, this is currently not active.
//This is Just basic structure of It's possible implementation
function validateForm() {
  var retName=validateName() ;
  var retCPass=validateCom() ;
  var retPass=validatePass() ;
  var retEmail=validateEmail() ;
  if(retName===true && retCPass===true && retPas===true && retEmail===True) {
    return true ;
  }
  return false ;
}

//The function that provides dynamic results
$(document).ready(function() {
  $('#submit').hover(function() {
    $(this).toggleClass('active') ;
    }); 
  $('#submit').click(function(){
      var next=[document.getElementById('user').value,document.getElementById('emailid'),document.getElementById('pass').value,document.getElementById('com').value];
    
if( !window.localStorage) alert("Sorry, you're using an ancient browser");
else {
    localStorage.myArray = JSON.stringify(next);
}
  });
});