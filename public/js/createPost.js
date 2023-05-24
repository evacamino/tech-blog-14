const postFormHandler = async function (event) {

    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value.trim();
    const body = document.querySelector('textarea[name="body"]').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }

}

document
    .querySelector('.new-post-form')
    .addEventListener('submit', postFormHandler);