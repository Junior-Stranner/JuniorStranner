function openTab(evt, tabName) {
    // Esconde todas as abas
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // Remove a classe 'active' dos botões
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Mostra a aba selecionada
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
