document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador
let livros = [
    "Imperfeitos", "Até o verão terminar", "A muralha de Winnipeg e eu", "A voz do arqueiro", "A noiva do capitão"
];

// Cache do tamanho array
let tamanho = livros.length;

for (let i = 0; i < tamanho; i++) {
    document.write(`<strong>${livros[i]}</strong><br>`);
}


