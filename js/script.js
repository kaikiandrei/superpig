const porco = document.querySelector(".porco-pulando");
const cerca = document.querySelector(".cerca-madeira");

const jump = () => {
    porco.classList.add("jump-porco");

    setTimeout(() => {
        porco.classList.remove("jump-porco");
    }, 500);
}

const LoopGame = setInterval(() => {

    const cercaPosition = cerca.offsetLeft;
    const porcoPosition = +window
        .getComputedStyle (porco)
        .bottom.replace("px","");

    if (cercaPosition <= 120 && cercaPosition > 0 && porcoPosition < 20) {
    cerca.style.animation = "none";
    cerca.style.left = `${cercaPosition}px`;

    porco.style.animation = "none";
    porco.style.bottom = `${porcoPosition}px`;

    porco.src = "./image/porco-na-lama.gif";
    porco.style.width = "150px";
    porco.style.marginLeft = "110px";

    clearInterval(LoopGame)
    
    }  
    
}, 18);

document.addEventListener("keydown", jump)