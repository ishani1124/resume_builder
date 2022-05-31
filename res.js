function generateResume()
 {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
 

 
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
 
    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
 
 
 
 
 
 
 //    HANDLE THE ERRORS HERE 
    document.getElementById("linkedinT").innerHTML = document.getElementById("linkedinField").value;
    document.getElementById("twitterT").innerHTML = document.getElementById("twitterField").value;
    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
 
 
 
 
 
 //    Objective
 document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value; 
 //education
 document.getElementById("eq1").innerHTML = document.getElementById("schField1").value; 
 document.getElementById("eq2").innerHTML = document.getElementById("schField2").value; 
 document.getElementById("eq3").innerHTML = document.getElementById("schField3").value; 
 document.getElementById("sp1").innerHTML = document.getElementById("spField1").value; 
 document.getElementById("sp2").innerHTML = document.getElementById("spField2").value; 
 document.getElementById("sp3").innerHTML = document.getElementById("spField3").value;

 document.getElementById("de1").innerHTML = document.getElementById("deField1").value; 
 document.getElementById("de2").innerHTML = document.getElementById("deField2").value; 
 document.getElementById("de3").innerHTML = document.getElementById("deField3").value; 
 //work
 document.getElementById("wk1").innerHTML = document.getElementById("wkField1").value; 
 document.getElementById("wk2").innerHTML = document.getElementById("wkField2").value; 
 document.getElementById("wk3").innerHTML = document.getElementById("wkField3").value; 
 document.getElementById("des1").innerHTML = document.getElementById("desField1").value; 
 document.getElementById("des2").innerHTML = document.getElementById("desField2").value; 
 document.getElementById("des3").innerHTML = document.getElementById("desField3").value;
 document.getElementById("spa1").innerHTML = document.getElementById("spaField1").value;
 document.getElementById("spa2").innerHTML = document.getElementById("spaField2").value;
 document.getElementById("spa3").innerHTML = document.getElementById("spaField3").value;
 document.getElementById("be1").innerHTML = document.getElementById("beField1").value;
 document.getElementById("be2").innerHTML = document.getElementById("beField2").value;
 document.getElementById("be3").innerHTML = document.getElementById("beField3").value;
 // work experience
//   let wes = document.getElementsByClassName("weField");
//   let str = "";
//   for(let e of wes)
//   {
//       str = str + `<li> ${e.value} </li>`;
//   }
//   document.getElementById("weT").innerHTML = str;
 
  // Education qualification
//   let eqs = document.getElementsByClassName("eqField");
//   let str1 = "";
//   for(let e of eqs)
//   {
//       str1 = str1 + `<li> ${e.value} </li>`;
//   }
//   document.getElementById("eqT").innerHTML = str1;
  
 
 
  document.getElementById("cv-form").style.display = 'none';
  document.getElementById("cv-template").style.display = 'block';
 
 
 //Setting Image
 let file = document.getElementById("imgField").files[0];
 console.log(file);
 let reader= new FileReader();
 reader.readAsDataURL(file);
 console.log(reader.result)
 
 //set image to template
 reader.onloadend = function (){
 document.getElementById("imgTemplate").src = reader.result;
 };
 
 
 }
 
 // Print CV
 function printResume()
 {
     window.print(); }