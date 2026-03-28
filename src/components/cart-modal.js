import { getCart, removefromCart } from "../store/cart.store.js";

export const createCartModal = (renderNav) => {
  const modal = document.createElement("div");

  modal.className = "cart-modal hidden";

  const render = () => {
    const cart = getCart();

    modal.innerHTML = `
      <div class="modal-content">
        ${
          cart.length === 0
            ? "<p>Carrito Vacio</p>"
            : cart
                .map(
                  (product) => `
              <div class="cart-item" data-id="${product.id}">
                <span>${product.title}</span>
                <span>$${product.price}</span>
                <button class="remove-btn" >🗑️</button>
              </div>
            `,
                )
                .join("")
        }
        <button id="close-modal">Cerrar</button>
      </div>
    `;

    modal.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const parent = e.currentTarget.closest(".cart-item");
        const productId = parent.getAttribute("data-id");
        removefromCart(productId);
        renderNav();
        render();
      });
    });

    modal.querySelector("#close-modal").addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  };

  render();

  return {
    element: modal,
    open: () => {
      render();
      modal.classList.remove("hidden");
    },
  };
};
