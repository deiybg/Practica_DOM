const header = document.querySelector("header");
const imgLogo = document.createElement("img");
imgLogo.src =
  "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717113644/Proyecto%20DOM/logo-pccomponentes_bvemor.svg";
imgLogo.alt = "logo PC componentes";
imgLogo.classList.add("imagelogo");

const menuHamburguesa = document.createElement("img");
menuHamburguesa.src =
  "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717114079/Proyecto%20DOM/menu_hamburguesa_yzoitr.png";
menuHamburguesa.alt = "Menu hamburguesa";
menuHamburguesa.classList.add("imageHamburguesa");

const categorias = document.createElement("a");
categorias.href = "#";
categorias.textContent = "Todas las categorías";

const sectionHeader = document.createElement("section");
sectionHeader.classList.add("sectionHeader");
sectionHeader.append(imgLogo, menuHamburguesa, categorias);
header.appendChild(sectionHeader);

const btn = document.createElement("button");
btn.classList.add("dropbtn");
btn.textContent = "Todo el catálogo ▼";


const divContainerBtn = document.createElement("div");
divContainerBtn.classList.add("dropdown-content");
const todoCatalogo = document.createElement("a");
todoCatalogo.href = "#";
todoCatalogo.textContent = "Todo el catálogo";
const reacondicionados = document.createElement("a");
reacondicionados.href = "#";
reacondicionados.textContent = "reacondicionados";
divContainerBtn.append(todoCatalogo, reacondicionados);
const divContainer = document.createElement("div");
divContainer.classList.add("dropdown");
divContainer.append(btn,divContainerBtn );
header.appendChild(divContainer);

const buscar = document.createElement("input");
buscar.type = "search";
buscar.placeholder = "Buscar en PC componentes";
buscar.classList.add("inputBuscar");
header.appendChild(buscar);

const divBuscar = document.createElement("div");
divBuscar.classList.add("divBuscar");
divBuscar.append(divContainer, buscar);
header.appendChild(divBuscar);



const ul = document.createElement("ul");
const miCuenta = document.createElement("li");
miCuenta.textContent = "Mi  cuenta";
const miCesta = document.createElement("li");
miCesta.textContent = "Mi  cesta";
ul.append(miCuenta, miCesta);
header.appendChild(ul);
