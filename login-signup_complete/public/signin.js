// index.js
document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let response = await fetch('/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    if (response.redirected) {
        window.location.href = response.url;
    } else {
        let result = await response.text();
        // handle error here
        alert(result);  
    }
});