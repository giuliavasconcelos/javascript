document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let marcas = [
    // 0           1             2
    ['Kylie Cosmetics', 'MAC', 'Too Faced'], // 0

    // 0         1          2           3         4
    ['Fenty Beauty', 'Nars', 'Dior', 'Benefit', 'Rare Beauty'], // 1
];

document.write(`Primeira melhor linha de maquiagem da atualidade: "<strong>${marcas[0][2]}</strong>"<br>`);
document.write(`Segunda melhor linha de maquiagem da atualidade: "<strong>${marcas[1][1]}</strong>"<br>`);