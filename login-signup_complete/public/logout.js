// logout.js
document.querySelector('button[type="logout"]').addEventListener('click', async (event) => {
    event.preventDefault();

    let response = await fetch('/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.status === 200) {
        window.location.href = '/';
    } else {
        alert('Could not log out');
    }
});