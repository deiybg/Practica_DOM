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
divContainer.append(btn, divContainerBtn);
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
iuser.classList.add("fas", "fa-user");
const miCuenta = document.createElement("li");
const enlacemicuenta = document.createElement("a");
enlacemicuenta.href = "https://www.pccomponentes.com/login";
enlacemicuenta.textContent = "Mi  cuenta";
miCuenta.append(iuser, enlacemicuenta);
const icart = document.createElement("i");
icart.classList.add("fas", "fa-cart-flatbed");
const miCesta = document.createElement("li");
const enlacemicesta = document.createElement("a");
enlacemicesta.href = "https://www.pccomponentes.com/";
enlacemicesta.textContent = "Mi  cesta";
miCesta.append(icart, enlacemicesta);
ul.append(iuser, miCuenta, icart, miCesta);
header.appendChild(ul);

const h1 = document.createElement("h1");
const divparrafos = document.createElement("div");
divparrafos.classList.add("divparrafos");
h1.textContent = "Especial Monitores";
const p1 = document.createElement("p");
p1.textContent =
  "¿Buscas un nuevo monitor para teletrabajar? ¿Un monitor 4K para ver series con toda la calidad de imagen? ¿Un monitor gaming a tope de frames para jugar sin descanso? Descúbrelos todos en nuestro Especial Monitores a un precio súper rebajado.";
divparrafos.append(h1, p1);

const imageframe = document.createElement("img");
imageframe.src =
  "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717160088/Proyecto%20DOM/frame_gcvvup.jpg";
imageframe.alt = "Imagen de PCs";

const sectionframe = document.querySelector("#mainframe");
sectionframe.append(divparrafos, imageframe);

const screens = [
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/samsung_curvo_voubmk.jpg",
    title: "Samsung Odyssey LS32CG552EUXEN 32´ LED QHD 165Hz Freesync Curvo",
    url: "https://www.pccomponentes.com/samsung-odyssey-ls32cg552euxen-32-led-qhd-165hz-freesync-curvo",
    price: 256.32,
    star: 3.8,
    seller: "Infopavon",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/samsung_essential_pwrgxf.jpg",
    title:
      "Samsung Essential Monitor LS24C310EAUXEN 24 LED IPS FullHD 75Hz FreeSync",
    url: "https://www.pccomponentes.com/samsung-essential-monitor-ls27c310eauxen-27-led-ips-fullhd-75hz-freesync",
    price: 102.57,
    star: 5,
    seller: "ART",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/phillips_ultra_eiuhgi.jpg",
    title: "Philips 288E2UAE/00 28 LED IPS UltraHD 4K FreeSync",
    url: "https://www.pccomponentes.com/philips-288e2uae-00-28-led-ips-ultrahd-4k-freesync",
    price: 219,
    star: 4,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201535/Proyecto%20DOM/phillips_momentum_lpzdem.jpg",
    title:
      "Philips Momentum 5000 27M1F5800/00 27 LED Nano IPS UltraHD 4K 144Hz",
    url: "https://www.pccomponentes.com/philips-5000-series-27e1n5600he-00-27-led-ips-qhd-75hz-usb-c-webcam",
    price: 399,
    star: 4.1,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/phillips_led_kvimyt.jpg",
    title: "Philips 275V8LA/00 27 LED QHD 75Hz",
    url: "https://www.pccomponentes.com/philips-275v8la-00-27-led-qhd-75hz",
    price: 149.9,
    star: 4.2,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },

  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_rapid_cndudn.jpg",
    title: "MSI G244F 23.8 LED Rapid IPS FullHD 170Hz FreeSync Premium",
    url: "https://www.pccomponentes.com/msi-g244f-238-led-rapid-ips-fullhd-170hz-freesync-premium",
    price: 125,
    star: 4.4,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_curvo_qz6y39.jpg",
    title: "MSI G24C4 E2 23.6 LED FullHD 180 Hz FreeSync Premium Curva",
    url: "https://www.pccomponentes.com/msi-g27c4-e3-27-led-fullhd-180hz-curvo",
    price: 129,
    star: 4.4,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_premium_g9398d.jpg",
    title: "AOC 24G2SAE/BK 23.8 LED FullHD 165Hz FreeSync Premium",
    url: "https://www.pccomponentes.com/aoc-24g2sae-bk-238-led-fullhd-165hz-freesync-premium",
    price: 129.9,
    star: 4.4,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_led_rqtfgy.jpg",
    title: "AOC Q27G2E 27 LED QHD 155Hz FreeSync Premium",
    url: "https://www.pccomponentes.com/aoc-q27g2e-27-led-qhd-155hz-freesync-premium",
    price: 189.9,
    star: 5,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_led_rqtfgy.jpg",
    title: "AOC 27B3HA2 LED IPS 27 FullHD 100Hz",
    url: "https://www.pccomponentes.com/aoc-27b3ha2-led-ips-27-fullhd-100hz",
    price: 109.9,
    star: 4.5,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_pro_lxspsd.jpg",
    title: "MSI Pro MP223 21.5 LED FullHD 100Hz",
    url: "https://www.pccomponentes.com/msi-pro-mp223-215-led-fullhd-100hz",
    price: 79,
    star: 4.8,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/AOC_mate_dgr04u.jpg",
    title: "AOC 24B1H 23.6 LED FullHD Mate",
    url: "https://www.pccomponentes.com/aoc-24b1h-236-led-fullhd-mate",
    price: 79,
    star: 4.2,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/accer_nitro_tkjv5a.jpg",
    title: "Acer Nitro VG0 VG240Y E 23.8 LED IPS 100Hz FreeSync",
    url: "https://www.pccomponentes.com/acer-nitro-vg0-vg240y-e-238-led-ips-fullhd-100hz-freesync",
    price: 89.9,
    star: 5,
    seller: "ART",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/MSI_premium_curve_l4bbjb.jpg",
    title: "MSI G24C4 E2 23.6 LED FullHD 180 Hz FreeSync Premium Curva",
    url: "https://www.pccomponentes.com/monitor-msi-g24c4-e2-236-led-fullhd-180-hz-freesync-premium-curva",
    price: 129,
    star: 4.9,
    seller: "ART",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/acer_ka242_imww2i.jpg",
    title: "Acer KA272EBI 27 LED IPS FullHD 100Hz FreeSync",
    url: "https://www.pccomponentes.com/acer-ka272ebi-27-led-ips-fullhd-100hz-freesync",
    price: 109.9,
    star: 4.7,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
  {
    image:
      "https://res.cloudinary.com/dhawfyfsv/image/upload/v1717201534/Proyecto%20DOM/aaus_ips_nupsey.jpg",
    title: "Asus VZ239HE 23 IPS FullHD",
    url: "https://www.pccomponentes.com/asus-vz239he-23-ips-fullhd",
    price: 104.9,
    star: 4.2,
    seller: "PC componentes",
    delivery: "Envio Gratis",
  },
];

const products = document.querySelector("#products");
const ulscreen = document.createElement("ul");
for (const screen of screens) {
  const imagescreen = document.createElement("a");
  imagescreen.href = screen.url;
  const imgscreen = document.createElement("img");
  imgscreen.src = screen.image;
  imgscreen.alt = screen.title;
  imagescreen.appendChild(imgscreen);

  const titleimage = document.createElement("a");
  titleimage.href = screen.url;
  titleimage.textContent = screen.title;
  const pricescreens = document.createElement("h2");
  pricescreens.textContent = screen.price + " €";

  const starscreens = document.createElement("div");
  const starCount = screen.star;
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    if (i <= starCount) {
      star.className = "fas fa-star"; // Estrella llena
    } else if (i === Math.ceil(starCount) && !Number.isInteger(starCount)) {
      star.className = "fas fa-star-half-alt"; // Media estrella
    } else {
      star.className = "far fa-star"; // Estrella vacía
    }
    starscreens.appendChild(star);
  }
  const sellerscreen = document.createElement("h4");
  sellerscreen.textContent = "Vendido y enviado por ";
  const sellerspan = document.createElement("span");
  sellerspan.textContent = screen.seller;
  sellerspan.classList.add("classspan");
  sellerscreen.appendChild(sellerspan);
  const deliveryscreen = document.createElement("p");
  deliveryscreen.textContent = screen.delivery;
  const liscreen = document.createElement("li");
  liscreen.append(
    imagescreen,
    titleimage,
    pricescreens,
    starscreens,
    sellerscreen,
    deliveryscreen
  );
  ulscreen.appendChild(liscreen);
}

products.appendChild(ulscreen);

const searchfilter = document.querySelector("#filter");

const form = document.createElement("form");
form.action = "";
form.method = "post";
const marca = document.createElement("p");
marca.textContent = "Marca";
form.appendChild(marca);

const marcas = ["Samsung", "Phillips", "MSI", "AOC", "Acer", "Asus"];
marcas.forEach((modelo) => {
  const checkbox = document.createElement("input");
  checkbox.name = "marcas[]";
  checkbox.type = "checkbox";
  checkbox.value = modelo.toLocaleLowerCase();
  const label = document.createElement("label");
  label.textContent = modelo;
  const divcheckbox = document.createElement("div");
  divcheckbox.classList.add("divcheckbox");
  divcheckbox.append(checkbox, label);
  form.appendChild(divcheckbox);
});
searchfilter.appendChild(form);

const formresolution = document.createElement("form");
formresolution.action = "";
formresolution.method = "post";
const Resolución = document.createElement("p");
Resolución.textContent = "Tipos de pantalla";
formresolution.appendChild(Resolución);


const resolutions =["FullHd","QHD","UltraHD","UltraHD 4K"];
resolutions.forEach((resolution) =>{
  const checkboxresolution = document.createElement("input");
  checkboxresolution.name = "resolutions[]";
  checkboxresolution.type = "checkbox";
  checkboxresolution.value = resolution.toLocaleLowerCase();
  const labelresolution = document.createElement("label");
  labelresolution.textContent = resolution;

  const divcheckboxresolution = document.createElement("div");
  divcheckboxresolution.classList.add("divcheckboxresolution");
  divcheckboxresolution.append(checkboxresolution, labelresolution);
  formresolution.appendChild(divcheckboxresolution)
})

searchfilter.appendChild(formresolution);

const formsupplier = document.createElement("form");
formsupplier.action = "";
formsupplier.method = "post";
const psupplier = document.createElement("p");
psupplier.textContent = "Vendedor";
formsupplier.appendChild(psupplier);

const supplier =["PC componentes","ART","Infopavon"];
supplier.forEach((suppliers) =>{
  const checkboxsupplier = document.createElement("input");
  checkboxsupplier.name = "supplier[]";
  checkboxsupplier.type = "checkbox";
  checkboxsupplier.value = suppliers.toLocaleLowerCase();
  const labelsupplier = document.createElement("label");
  labelsupplier.textContent = suppliers;

  const divcheckboxsupplier = document.createElement("div");
  divcheckboxsupplier.classList.add("divcheckboxsupplier");
  divcheckboxsupplier.append(checkboxsupplier, labelsupplier);
  formsupplier.appendChild(divcheckboxsupplier);
})

searchfilter.appendChild(formsupplier);