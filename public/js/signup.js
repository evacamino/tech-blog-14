
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();

    const password = document.querySelector('#password-signup').value.trim();

  
    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response)
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
    .querySelector('.form-signup')
    .addEventListener('submit', signupFormHandler);
  