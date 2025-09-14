const BASE_URL = 'https://dummyjson.com/products';
const CATEGORY_URL = 'https://dummyjson.com/products/categories';

export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch(CATEGORY_URL);
  const data = await res.json();
  return data;
};

export const fetchProducts = async (
  limit: number,
  skip: number,
  searchTerm: string,
  selectedCategory: string | null,
) => {
  const categoryPart = selectedCategory ? `/category/${selectedCategory}` : '';
  const searchPart = searchTerm ? `/search?q=${searchTerm}` : '';

  const url =
    searchPart.length > 0
      ? `https://dummyjson.com/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`
      : `${BASE_URL}${categoryPart}?limit=${limit}&skip=${skip}`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};
