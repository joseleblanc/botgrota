// Seleciona todos os botões com a classe "accordion"
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        // Alterna entre adicionar e remover a classe "active"
        this.classList.toggle("active");

        // Alterna a visibilidade do painel correspondente
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.classList.remove("show");
            setTimeout(() => {
                panel.style.display = "none";
            }, 300); // Aguarda a animação antes de ocultar
        } else {
            panel.style.display = "block";
            setTimeout(() => {
                panel.classList.add("show");
            }, 10); // Aplica a animação após exibir
        }
    });
}
