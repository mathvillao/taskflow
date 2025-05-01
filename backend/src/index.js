const express = require('express');    // Importa o Express
const app = express();                 // Cria ums instância da aplicação
const PORT = process.env.PORT || 3000; // Definindo a porta que vai ser utilizada

app.get('/health', (req, res) => {     // Cria uma rota GET em /health
    res.send('API is healthy!');       // Responde com uma mensagem de texto
});

app.listen(PORT, () => {               // Iniciando o servidor
    console.log(`Server is running on port ${PORT}`);
});

