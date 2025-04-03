document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carrossel-item');
    const indicadores = document.querySelectorAll('.indicador');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    let indexAtual = 0;
    const totalItems = items.length;

    // Função para mostrar item específico
    function mostrarItem(index) {
        items.forEach(item => item.classList.remove('ativo'));
        indicadores.forEach(ind => ind.classList.remove('ativo'));
        
        items[index].classList.add('ativo');
        indicadores[index].classList.add('ativo');
        indexAtual = index;
    }

    // Event listeners para os botões
    btnProximo.addEventListener('click', function() {
        indexAtual = (indexAtual + 1) % totalItems;
        mostrarItem(indexAtual);
    });

    btnAnterior.addEventListener('click', function() {
        indexAtual = (indexAtual - 1 + totalItems) % totalItems;
        mostrarItem(indexAtual);
    });

    // Event listeners para os indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', function() {
            mostrarItem(index);
        });
    });


    // Mostrar o primeiro item inicialmente
    mostrarItem(0);
});