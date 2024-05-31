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
const iuser = document.createElement("i");
iuser.classList.add("fas", "fa-user")
const miCuenta = document.createElement("li");
miCuenta.textContent = "Mi  cuenta";
miCuenta.appendChild(iuser);
const icart = document.createElement("i");
icart.classList.add("fas", "fa-cart-flatbed");
const miCesta = document.createElement("li");
miCesta.textContent = "Mi  cesta";
miCesta.appendChild(icart)
ul.append(iuser, miCuenta,icart, miCesta);
header.appendChild(ul);


const h1 = document.createElement("h1");
const divparrafos = document.createElement("div");
divparrafos.classList.add("divparrafos");
h1.textContent = "Especial Monitores";
const p1 = document.createElement("p");
p1.textContent = "¿Buscas un nuevo monitor para teletrabajar? ¿Un monitor 4K para ver series con toda la calidad de imagen? ¿Un monitor gaming a tope de frames para jugar sin descanso? Descúbrelos todos en nuestro Especial Monitores a un precio súper rebajado.";
divparrafos.append(h1,p1);

const imageframe = document.createElement("img");
imageframe.src= "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717160088/Proyecto%20DOM/frame_gcvvup.jpg";
imageframe.alt = "Imagen de PCs"

const sectionframe = document.querySelector("#mainframe");
sectionframe.append(divparrafos,imageframe);
