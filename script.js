let Name = document.getElementById('Name')
let email = document.getElementById('email');
let signupUsername = document.getElementById('signupUsername');
let signupPassword = document.getElementById('signupPassword')
let loginUsername = document.getElementById('loginUsername');
let loginPassword = document.getElementById('loginPassword');


function submitClicked(event) {
  event.preventDefault();

  let data = {
    name: signupUsername.value,
    pass: signupPassword.value,
    fullname: Name.value,
    fullemail: email.value,
  };

  // No Empty Fill Form
  
  function submitClicked(event) {
  event.preventDefault();

 
  // Then continue saving if valid...
}

  // 🔥 Use same key for consistency
  
    let userData = JSON.parse(localStorage.getItem("UsersList")) || [];
  userData.push(data);

  localStorage.setItem("UsersList", JSON.stringify(userData));
alert("Signup successful! ✅");

// 👇 This line opens your mandi home page
window.location.href = "../index.html";
  signupUsername.value="";
  signupPassword.value="";
  Name.value="";
  email.value="";
  
}


function submitLoginClicked(event) {
  event.preventDefault(); // stop form refresh

  let storedUsers = JSON.parse(localStorage.getItem("UsersList")) || [];

  let userFound = false;

  for (let i = 0; i < storedUsers.length; i++) {
    let user = storedUsers[i];

    if (loginUsername.value === user.name && loginPassword.value === user.pass) {
      alert("Login successful! 🔓 Welcome, " + user.fullname);
      
      userFound = true;

      break;
    }
  }

  if (!userFound) {
    alert("Invalid username or password ❌");
  }
}
