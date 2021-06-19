

const addBtn = document.querySelector("#addBtn");
const loginBtn = document.querySelector("#signUpBtn");
const signModal = document.querySelector(".signModal");
const hero = document.querySelector(".hero");
const closeSign = document.querySelector("#closeSign");
const signUpBtn = document.querySelector("#signBtn");


addBtn.addEventListener("click", showSignUp);
closeSign.addEventListener("click", hideSignUp);

function showSignUp() {
signModal.classList.add("display");
}

function hideSignUp() {
signModal.classList.remove("display");
hero.classList.remove("blur");
}

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
        document.location.replace("/employees");
      } else {
        alert("Failed to add employee.");
      }
    }
  };

  document
.querySelector('.submitBtn')
.addEventListener('click', signupFormHandler);