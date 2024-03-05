"use server";

export async function fetchProducts(page: number) {
  const limit = 24;
  const url = `https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=Women%20Winter&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=${limit}&offset=${
    page * limit
  }&sort=freshness&facets=%20'range'%20%3A%20%5B'new_season'%5D`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9ee3df7b1cmsh751f0c3670e68dfp1f26b2jsn9a8e5aa399e0",
      "X-RapidAPI-Host": "asos10.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    return data.products as Product[];
  } catch (error) {
    console.error(error);
  }
}
