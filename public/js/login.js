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

  document
  .querySelector('#login-submit')
  .addEventListener('click', loginFormHandler);