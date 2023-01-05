export async function getCategories() {
  const url = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await url.json();
  return response;
}

export async function getProduct(categoryId, query) {
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${ categoryId }&q=${ query }`);
  const response = await url.json();
  return response;
}

export async function getProductById(query) {
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${ query }`);
  const response = await url.json();
  return response;
}