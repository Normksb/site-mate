console.log('AAAAAAAAAAAAAAAA', )
console.log(document
  .querySelector('#login-submit')) 
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      
    });
  console.log("check out this response",response)
      if (response.ok) {
        
        console.log('holey crap a user logged in......................................')
        setTimeout(function(){ 
          console.log('setTimeoutAAAAAAAAAAAAAAA')
          document.location.replace('/') }, 100);
        
      } else {
        alert('Failed to log in.');
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector("#firstName-signup").value.trim();
    const last_name = document.querySelector("#lastName-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (first_name && last_name && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ first_name, last_name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to sign up.");
      }
    }
  };




  document
  .querySelector('#login-submit')
  .addEventListener('click', loginFormHandler);

  document
  .querySelector('.submitBtn')
  .addEventListener('click', signupFormHandler);

  const loginBtn = document.querySelector("#signUpBtn");
const loginModal = document.querySelector(".loginModal");
const signModal = document.querySelector(".signModal");
const hero = document.querySelector(".hero");
const closeLogin = document.querySelector("#closeLogin");
const closeSign = document.querySelector("#closeSign");
const signUpBtn = document.querySelector("#signBtn");
const blogs = document.querySelectorAll(".blogContainer");


loginBtn.addEventListener("click", showLogin);
closeLogin.addEventListener("click", hideLogin);
signUpBtn.addEventListener("click", showSignUp);
closeSign.addEventListener("click", hideSignUp);


function showLogin() {
  loginModal.classList.add("display");
  hero.classList.add("blur");
}

function hideLogin() {
  loginModal.classList.remove("display");
  hero.classList.remove("blur");
}

function showSignUp() {
  loginModal.classList.remove("display");
  signModal.classList.add("display");
}

function hideSignUp() {
  signModal.classList.remove("display");
  hero.classList.remove("blur");
}


