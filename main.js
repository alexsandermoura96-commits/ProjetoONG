document.addEventListener("DOMContentLoaded", () => {

    const conteudo = document.getElementById("conteudo");
    const links = document.querySelectorAll("nav a");

    links.forEach((link) => {

        link.addEventListener("click", async (event) => {

            event.preventDefault();

            const pagina = link.getAttribute("href");

            const resposta = await fetch(pagina);
            const html = await resposta.text();

            const parser = new DOMParser();
            const documento = parser.parseFromString(html, "text/html");

            const novoConteudo = documento.querySelector("#conteudo");

            if (novoConteudo) {
                conteudo.innerHTML = novoConteudo.innerHTML;
                history.pushState({}, "", pagina);
            }

        });

    });

});