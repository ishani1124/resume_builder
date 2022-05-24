function addEQ() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.classList.add("rows", 3);

  let eqOb = document.getElementById("eq");
  let eqAddButtonOb = document.getElementById("eqAddButton");

  eqOb.insertBefore(newNode, eqAddButtonOb);
}

function addWE() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.classList.add("rows", 3);

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addProj() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("pField");
  newNode.classList.add("mt-2");
  newNode.classList.add("rows", 3);

  let pOb = document.getElementById("proj");
  let pAddButtonOb = document.getElementById("pAddButton");

  pOb.insertBefore(newNode, pAddButtonOb);
}

//Generating requestAnimationFrame
function generateResume() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  //    HANDLE THE ERRORS HERE
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinField").value;
  document.getElementById("twitterT").innerHTML =
    document.getElementById("twitterField").value;
  document.getElementById("githubT").innerHTML =
    document.getElementById("githubField").value;

  //    Objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // work experience
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // Education qualification
  let eqs = document.getElementsByClassName("eqField");
  let str1 = "";
  for (let e of eqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("eqT").innerHTML = str1;

  // Project
  let p = document.getElementsByClassName("pField");
  let str2 = "";
  for (let e of p) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("projectT").innerHTML = str1;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

  //Setting Image
  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  //set image to template
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
}

// Print CV
function printResume() {
  window.print();
}

let xhr = new XMLHttpRequest();
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

function sendLoginData(data) {
  xhr.open("POST", "https://resume-builderrr/api/user/sign-in");
  xhr.send(data);
}

function sendSignUpData(data) {
  xhr.open("POST", "https://resume-builderrr/api/user/sign-up");
  xhr.send(data);
}
