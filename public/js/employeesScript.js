

const addBtn = document.querySelector("#addBtn");
const loginBtn = document.querySelector("#signUpBtn");
const signModal = document.querySelector(".signModal");
const hero = document.querySelector(".Employee-hero");
const closeSign = document.querySelector("#closeSign");
const closeSign2 = document.querySelector("#closeSign2");
const signUpBtn = document.querySelector("#signBtn");
const deleteEmployeeModal = document.querySelector(".deleteEmployeeModal");
const deleteEmployeeBtn = document.querySelector(".deleteEmployeeBtn");
const dltBtn = document.querySelector("#dltBtn");


addBtn.addEventListener("click", showSignUp);
closeSign.addEventListener("click", hideSignUp);
dltBtn.addEventListener("click", showDelete);
closeSign2.addEventListener("click", hideDelete);


function showDelete() {
  hero.classList.add("blur");
  deleteEmployeeModal.classList.add("display");
}

function hideDelete() {
  deleteEmployeeModal.classList.remove("display");
  hero.classList.remove("blur");
  }

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

  const deleteEmployee = async (event) => {
    event.preventDefault();
  
    const employee = document.querySelector("#employee").value.trim();
    console.log("here is employee ", employee)

    if (employee) {
      const response = await fetch("/api/users/employees", {
        method: "DELETE",
        body: JSON.stringify({ employee }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/employees");
      } else {
        alert("Failed to delete employee.");
      }
    }
  };

deleteEmployeeBtn.addEventListener("click", deleteEmployee);
  document
.querySelector('.submitBtn')
.addEventListener('click', signupFormHandler);