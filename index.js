const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
var pokedex = [{ numero: "001", nome: "Squirtle", tipo: "Água", imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", descricao: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.", altura: "0.5m", peso: "9.0", categoria: "Tiny Turtle", habilidade: "Torrent"},{ numero: "002", nome: "Bulbasaur", tipo: "Planta", imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png", descricao: "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.", altura: "0.7m", peso: "6.9", categoria: "Seed", habilidade: "Overgrow"},{ numero: "003", nome: "Charmander", tipo: "Fogo", imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png", descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.", altura: "0.7m", peso: "8.5", categoria: "Lizard", habilidade: "Blaze"}];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let message = "";


app.get("/", (req, res) => {
  setTimeout(() => {message = "";}, 1000);

  res.render("index", {
    message,
    pokemon1: pokedex
  })
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/new", (req, res) => {
  var { numero1, nome1, tipo1, imagem1, descricao1, altura1, peso1, categoria1, habilidade1} = req.body;
  pokemon ={ numero: numero1, nome: nome1, tipo: tipo1, imagem: imagem1, descricao: descricao1, altura: altura1, peso: peso1, categoria: categoria1, habilidade: habilidade1};
  pokedex.push(pokemon);
  message = `Pokemon registrado com sucesso!`;
  res.redirect("/");
});

app.get("/detalhes", (req, res) => {
  res.render("detalhes", {
    pokemon1: pokedex}
  )});
  
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));