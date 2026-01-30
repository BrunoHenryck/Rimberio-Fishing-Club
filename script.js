const bntWhatsapp = document.querySelector(".b4");

bntWhatsapp.addEventListener("click", () => 
    {window.open("https://wa.me/5564999381252" ,"_blank");    
});

document.querySelector(".b5").addEventListener("click", () => {
    window.open("https://maps.google.com", "_blank");
});

window.onload = () => {
    document.querySelector(".container").classList.add("mostrar");
};

const menuBnt = document.querySelector(".b2");
const menu = document.getElementById("menuLateral");

menuBnt.addEventListener("click", () => {
console.log("Clicou");    
menu.classList.toggle("ativo");});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuBnt.contains(e.target)){
        menu.classList.remove("ativo");
    }
});
