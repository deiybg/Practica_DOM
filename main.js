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


const screens = [

   { image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/samsung_curvo_voubmk.jpg",
    title: "Samsung Odyssey LS32CG552EUXEN 32´ LED QHD 165Hz Freesync Curvo",
    price: 256.32,
    star: 5,
    seller: "Infopavon",
    delivery: "Envio Gratis",
   },

   { image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/samsung_essential_pwrgxf.jpg",
    title: "Samsung Essential Monitor LS24C310EAUXEN 24 LED IPS FullHD 75Hz FreeSync",
    price: 102.57,
    star: 5,
    seller: "ART",
    delivery: "Envio Gratis",
   },

   { image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/phillips_ultra_eiuhgi.jpg",
    title: "Philips 288E2UAE/00 28 LED IPS UltraHD 4K FreeSync",
    price: 219,
    star: 4,
    seller: "PC componentes",
    delivery: "Envio Gratis",
   },

   { image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/phillips_momentum_lpzdem.jpg",
   title: "Philips Momentum 5000 27M1F5800/00 27 LED Nano IPS UltraHD 4K 144Hz",
   price: 399,
   star: 4.1,
   seller: "PC componentes",
   delivery: "Envio Gratis",
  },
  { image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/phillips_led_kvimyt.jpg",
  title: "Philips 275V8LA/00 27 LED QHD 75Hz",
  price: 149.9,
  star: 4.2,
  seller: "PC componentes",
  delivery: "Envio Gratis",
 },

 { image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_rapid_cndudn.jpg",
 title: "MSI G244F 23.8 LED Rapid IPS FullHD 170Hz FreeSync Premium",
 price: 125,
 star: 4.4,
 seller: "PC componentes",
 delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_curvo_qz6y39.jpg",
title: "Monitor MSI G24C4 E2 23.6 LED FullHD 180 Hz FreeSync Premium Curva",
price: 129,
star: 4.4,
seller: "PC componentes",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_premium_g9398d.jpg",
title: "AOC 24G2SAE/BK 23.8 LED FullHD 165Hz FreeSync Premium",
price: 129.9,
star: 4.4,
seller: "PC componentes",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_led_rqtfgy.jpg",
title: "AOC Q27G2E 27 LED QHD 155Hz FreeSync Premium",
price: 189.9,
star: 5,
seller: "PC componentes",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_led_rqtfgy.jpg",
title: "AOC 27B3HA2 LED IPS 27 FullHD 100Hz",
price: 109.9,
star: 4.5,
seller: "PC componentes",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_pro_lxspsd.jpg",
title: "MSI Pro MP223 21.5 LED FullHD 100Hz",
price: 79,
star: 4.8,
seller: "PC componentes",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_mate_dgr04u.jpg",
title: "AOC 24B1H 23.6 LED FullHD Mate",
price: 79,
star: 4.2,
seller: "PC componentes",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/accer_nitro_tkjv5a.jpg",
title: "Acer Nitro VG0 VG240Y E 23.8 LED IPS 100Hz FreeSync",
price: 89.9,
star: 5,
seller: "ART",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_premium_curve_l4bbjb.jpg",
title: "Monitor MSI G24C4 E2 23.6 LED FullHD 180 Hz FreeSync Premium Curva",
price: 129,
star: 4.9,
seller: "ART",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/acer_ka242_imww2i.jpg",
title: "Acer KA272EBI 27 LED IPS FullHD 100Hz FreeSync",
price: 109.9,
star: 4.7,
seller: "PC componentes",
delivery: "Envio Gratis",
},
{ image: "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/aaus_ips_nupsey.jpg",
title: "Asus VZ239HE 23 IPS FullHD",
price: 104.9,
star: 4.2,
seller: "PC componentes",
delivery: "Envio Gratis",
},
]