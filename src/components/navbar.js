import { getCart } from "../store/cart.store.js";
import { createCartModal } from "./cart-modal.js";

export const createNavbar = () => {
  const nav = document.createElement("nav");

  const modal = createCartModal(render);

  function render() {
    const cart = getCart();

    nav.innerHTML = `
      <div class="navbar">
        
        <div class="logo-box">
          <h2 class="logo">✈ Escuadrón Edwin Poblete</h2>
          <small class="sub">División Aérea Táctica</small>
        </div>

        <button id="cart-btn">
          🛒 (${cart.length})
        </button>

      </div>
    `;

    const btn = nav.querySelector("#cart-btn");

    btn.addEventListener("click", () => {
      modal.open();
    });
  }

  render();

  return {
    element: nav,
    modal: modal.element,
    update: render,
  };
};