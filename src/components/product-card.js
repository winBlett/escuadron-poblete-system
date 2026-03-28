export const createProductCard = (product) => {
  const card = document.createElement("div");

  card.className = "product-card";

  card.innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" alt="${product.title}" />

    <p>${product.description || ""}</p>
    <p><strong>País:</strong> ${product.country || ""}</p>
    <p><strong>Velocidad:</strong> ${product.speed || ""}</p>
    <p><strong>Poder:</strong> ${product.power || ""}</p>
    <p><strong>Costo:</strong> ${product.price}</p>

    <button class="add-btn">Seleccionar avión</button>
  `;

  return card;
};