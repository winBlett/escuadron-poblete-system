
export const getAllProducts = async () => {
  try {
    const res = await fetch('../../planes.json');
    return await res.json();
  } catch (error) {
    console.error("Error cargando aviones", error);
  }
};