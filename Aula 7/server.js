const express = require('express');

const path = require('path');

const app = express();

const port = 80;


const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


let usuarios = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});


app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});


app.post('/cadastra', (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.render('resposta', { mensagem: 'Preencha todos os campos!' });
    }

    const usuarioExistente = usuarios.find(u => u.usuario === usuario);
    if (usuarioExistente) {
        return res.render('resposta', { mensagem: 'Usuário já existe!' });
    }

    usuarios.push({ usuario, senha });

    res.render('resposta', { mensagem: 'Usuário cadastrado com sucesso!' });
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.render('resposta', { mensagem: 'Preencha todos os campos!' });
    }

    const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (encontrado) {
        res.render('resposta', { mensagem: 'Login bem-sucedido!' });
    } else {
        res.render('resposta', { mensagem: 'Usuário ou senha inválidos.' });
    }
});1



let posts = [];


app.get('/blog', (req, res) => {
    res.render('blog', { posts: posts });
});

app.get('/cadastrar_post', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

app.post('/cadastrar_post', (req, res) => {
    const { titulo, resumo, conteudo } = req.body;

    if (!titulo || !resumo || !conteudo) {
        return res.render('resposta', { mensagem: 'Preencha todos os campos do post!' });
    }


    posts.push({ titulo, resumo, conteudo });

    res.redirect('/blog');
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Servidor inicializado corretamente!');
});