import { addToCart } from "../../store/cart.store.js";
import { createNavbar } from "../../components/navbar.js";
import { getAllProducts } from "../../services/product.service.js";
import { createProductCard } from "../../components/product-card.js";

const app = document.body;

//  NAVBAR + MODAL (YA INCLUYE TODO)
const navbar = createNavbar();
app.prepend(navbar.element);
app.appendChild(navbar.modal);

// CONTENEDOR
const productsContainer = document.getElementById("products-container");

// RENDER PRODUCTOS
const renderProducts = async () => {
  const products = await getAllProducts();

  products.forEach((product) => {
    const card = createProductCard(product);
    const btn = card.querySelector(".add-btn");

    btn.addEventListener("click", () => {
      addToCart(product);
      navbar.update(); // ACTUALIZA CONTADOR
    });

    productsContainer.appendChild(card);
  });
};

renderProducts();