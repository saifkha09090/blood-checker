let userName = document.getElementById("name");
let age = document.getElementById("age");
let bloodType = document.getElementById("bloodType");
let error = document.getElementById("error");
let resultBox = document.getElementById("resultBox");
let result = document.getElementById("resultText");



function checkInput() {
    if (userName.value === '') {
        alert("Please enter your name");
    }else if (age.value === '') {
        alert("Please enter your age");  
    }else if (bloodType.value === '') {
        alert("Please select a blood type");
    }else {
        checkBloodType();
    }
    userName.value = '';
    age.value = '';
    bloodType.value = '';
}

function checkBloodType() {
  let bloodTypeValue = bloodType.value;
  let name = userName.value.toUpperCase();
  if (bloodTypeValue === "A+") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>A+, A-, O+, O-.</strong>`;
  } else if (bloodTypeValue === "A-") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>A-, O-.</strong>`;
  } else if (bloodTypeValue === "B+") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>B+, B-, O+, O-.</strong>`;
  } else if (bloodTypeValue === "B-") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>B-, O-.</strong>`;
  } else if (bloodTypeValue === "O+") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>O+, O-.</strong>`;
  } else if (bloodTypeValue === "O-") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>O-.</strong>`;
  } else if (bloodTypeValue === "AB+") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>A+, A-, B+, B-, O+, O-, AB+, AB-.</strong>`;
  } else if (bloodTypeValue === "AB-") {
    result.innerHTML = `<strong>${name}</strong>, you can receive blood from: <strong>AB-, A-, B-, O-.</strong>`;
  } else {
    result.innerText = "Please select a blood type";
  }
    resultBox.style.display = "block";
}
