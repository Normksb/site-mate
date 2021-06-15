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
        document.location.replace('/');
        console.log('holey crap a user logged in......................................')
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