const express = require('express'); // importa o express
const router = express.Router(); // cria um mini app de rotas

const { PrismaClient } = require('@prisma/client') // importa o prisma
const bcrypt = require('bcryptjs'); //lib que criptografa a senha
const jwt = require('jsonwebtoken'); //lib para gerar token JWT

const prisma = new PrismaClient(); //cria uma instância do Prisma

router.post('/register', async (req, res) => { // rota POST para cadastrar
    const { name, email, password } = req.body; // pega os dados do corpo da requisição

    const userExists = await prisma.user.findUnique({
        where: { email }
    }); // verifica se já existe um usuário com esse e-mail colocado

    if (userExists) {
        return res.status(400).json({ error: 'Este email já está em uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // criptografa a senha com "sal" de 10 camadas

    const user = await prisma.user.create({
        data : {
            name,
            email,
            password: hashedPassword
        }
    }); // Cria o usuário com a senha criptografada

    res.json({
        message: 'Usuário criado com sucesso',
        user: {
            id: user.id,
            email: user.email
        }
    }); // Envia a resposta que o usuário foi criado e deixa o usuário com 1 nid único para cada nome, colocando assim cada nome com somente 1 email vinculado ao usuário
});

module.exports = router; // exporta a rota para usar o app