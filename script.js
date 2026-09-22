const texto = document.querySelector(".typing");

const palavras = [
    "Desenvolvimento Full Stack",
    "Desenvolvimento Backend",
    "Tecnologia"
];

let palavraAtual = 0;
let letraAtual = 0;
let apagando = false;

function escrever() {
    if (!texto) return;

    const palavra = palavras[palavraAtual];

    if (!apagando) {
        texto.textContent = palavra.substring(0, letraAtual + 1);
        letraAtual++;

        if (letraAtual === palavra.length) {
            apagando = true;
            setTimeout(escrever, 1500);
            return;
        }

        setTimeout(escrever, 70);
    } else {
        texto.textContent = palavra.substring(0, letraAtual - 1);
        letraAtual--;

        if (letraAtual === 0) {
            apagando = false;
            palavraAtual = (palavraAtual + 1) % palavras.length;
            setTimeout(escrever, 400);
            return;
        }

        setTimeout(escrever, 40);
    }
}

escrever();

const elementos = document.querySelectorAll(".reveal");

function mostrarElementos() {
    elementos.forEach(function(elemento) {
        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            elemento.classList.add("active");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
});

const menu = document.querySelector(".menu-toggle");
const navegacao = document.querySelector(".nav-links");

if (menu && navegacao) {
    menu.addEventListener("click", function() {
        navegacao.classList.toggle("open");
    });
}

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        if (navegacao) {
            navegacao.classList.remove("open");
        }
    });
});

const particulas = document.querySelector("#particles");

if (particulas) {
    for (let i = 0; i < 30; i++) {
        const particula = document.createElement("span");

        particula.classList.add("particle");
        particula.style.left = Math.random() * 100 + "%";
        particula.style.top = Math.random() * 100 + "%";
        particula.style.animationDuration = (Math.random() * 8 + 5) + "s";
        particula.style.animationDelay = (Math.random() * 5) + "s";

        particulas.appendChild(particula);
    }
}

const secoes = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {
    let secaoAtual = "";

    secoes.forEach(function(secao) {
        if (window.scrollY >= secao.offsetTop - 200) {
            secaoAtual = secao.getAttribute("id");
        }
    });

    links.forEach(function(link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + secaoAtual
        );
    });
});
