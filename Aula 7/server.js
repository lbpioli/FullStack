// Importa o framework Express, que facilita a criação do servidor
const express = require('express');

// Importa o módulo 'path' do Node.js, que ajuda a lidar com caminhos de arquivos
const path = require('path');

// Cria uma instância do servidor Express
const app = express();

// Define a porta que será usada pelo servidor (porta 80 é a padrão da web)
const port = 80;

// Importa o 'body-parser', que permite ler os dados enviados por formulários
const bodyParser = require('body-parser');

// Configura o Express para servir arquivos estáticos da pasta 'public'
// Isso permite acessar arquivos HTML, CSS, imagens, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Configura o body-parser para interpretar os dados de formulários HTML (formulários POST)
app.use(bodyParser.urlencoded({ extended: true }));

// Define o mecanismo de template para gerar páginas dinâmicas (vamos usar EJS)
app.set('view engine', 'ejs');

// Define onde estão os arquivos .ejs (templates), que ficarão na pasta 'views'
app.set('views', path.join(__dirname, 'views'));

// -------------------------------
// LÓGICA DO CADASTRO E LOGIN
// -------------------------------

// Simula um "banco de dados" com um array de usuários (em memória, não salva de verdade)
let usuarios = [];

// === ROTA PRINCIPAL ===
// O endereço padrão do servidor ('/') redireciona para a página de projetos
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// === ROTA DE CADASTRO (GET) ===
// Mostra o formulário de cadastro ao acessar /cadastra
app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

// === ROTA DE CADASTRO (POST) ===
// Quando o formulário de cadastro for enviado, salva os dados no array 'usuarios'
app.post('/cadastra', (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        // Se algum campo estiver vazio, renderiza a resposta com uma mensagem de erro
        return res.render('resposta', { mensagem: 'Preencha todos os campos!' });
    }

    // Verifica se o usuário já existe (não pode ter usuários duplicados)
    const usuarioExistente = usuarios.find(u => u.usuario === usuario);
    if (usuarioExistente) {
        return res.render('resposta', { mensagem: 'Usuário já existe!' });
    }

    // Adiciona o novo usuário no "banco de dados" (array)
    usuarios.push({ usuario, senha });

    // Renderiza a página resposta.ejs com uma mensagem de sucesso
    res.render('resposta', { mensagem: 'Usuário cadastrado com sucesso!' });
});

// === ROTA DE LOGIN (GET) ===
// Mostra o formulário de login ao acessar /login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// === ROTA DE LOGIN (POST) ===
// Quando o formulário de login for enviado, verifica se os dados existem no "banco"
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        // Se algum campo estiver vazio, renderiza a resposta com uma mensagem de erro
        return res.render('resposta', { mensagem: 'Preencha todos os campos!' });
    }

    // Procura no array se existe algum usuário com os mesmos dados
    const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (encontrado) {
        // Se encontrou, renderiza a página resposta.ejs com uma mensagem de sucesso
        res.render('resposta', { mensagem: 'Login bem-sucedido!' });
    } else {
        // Se não encontrou, renderiza a página resposta.ejs com uma mensagem de erro
        res.render('resposta', { mensagem: 'Usuário ou senha inválidos.' });
    }
});1

// -------------------------------
// BLOG - ROTEAMENTO
// -------------------------------

// Array para simular um banco de dados de posts
let posts = [];

// === ROTA PARA O BLOG (GET) ===
// Exibe a página de blog com todos os posts
app.get('/blog', (req, res) => {
    res.render('blog', { posts: posts });
});
// === ROTA DE CADASTRO DE POST (GET) ===
// Exibe o formulário para criar um novo post
app.get('/cadastrar_post', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

// === ROTA DE CADASTRO DE POST (POST) ===
// Quando o formulário de criação de post for enviado, salva o novo post no "banco de dados"
app.post('/cadastrar_post', (req, res) => {
    const { titulo, resumo, conteudo } = req.body;

    if (!titulo || !resumo || !conteudo) {
        return res.render('resposta', { mensagem: 'Preencha todos os campos do post!' });
    }

    // Adiciona o novo post no "banco de dados" (array de posts)
    posts.push({ titulo, resumo, conteudo });

    // Redireciona para a página de blog após o post ser cadastrado
    res.redirect('/blog');
});

// Inicia o servidor, deixando ele "escutando" na porta 80
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Servidor inicializado corretamente!');
});