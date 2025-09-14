import { useEffect, useState, useCallback } from 'react';
import { fetchCategories, fetchProducts } from '../api/productApi';

const PAGE_LIMIT = 10;

export const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadCategories = useCallback(async () => {
    const data = await fetchCategories();
    setCategories(data);
  }, []);

  const loadProducts = useCallback(
    async (reset = false) => {
      if (loading || (!hasMore && !reset)) return;
      setLoading(true);

      const data = await fetchProducts(
        PAGE_LIMIT,
        reset ? 0 : skip,
        searchTerm,
        selectedCategory,
      );

      setProducts(prev =>
        reset ? data.products : [...prev, ...data.products],
      );
      setSkip(prev => (reset ? PAGE_LIMIT : prev + PAGE_LIMIT));
      setHasMore(data.products.length === PAGE_LIMIT);
      setLoading(false);
    },
    [loading, hasMore, skip, searchTerm, selectedCategory],
  );

  useEffect(() => {
    loadCategories();
    loadProducts(true);
  }, [loadCategories, loadProducts]);

  useEffect(() => {
    loadProducts(true);
  }, [searchTerm, selectedCategory, loadProducts]);

  return {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    loading,
    loadProducts,
  };
};
