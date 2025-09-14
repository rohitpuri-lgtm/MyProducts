import React from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import ProductCard from '../components/productCard.tsx';
import CategoryFilter from '../components/categoryFilter';
import { useProducts } from '../hooks/useProducts';

const ProductListScreen = () => {
  const {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    loading,
    loadProducts,
  } = useProducts();

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.searchInput}
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={text => {
          setSearchTerm(text);
        }}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ProductCard key={index} item={item} />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => loadProducts()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator size="large" style={{ margin: 16 }} />
          ) : null
        }
        initialNumToRender={10}
        removeClippedSubviews={true}
        getItemLayout={(_data, index) => ({
          length: 200,
          offset: 200 * index,
          index,
        })}
      />
    </View>
  );
};

export default ProductListScreen;
