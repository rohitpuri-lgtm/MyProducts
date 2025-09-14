import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}) => (
  <View style={styles.categoryContainer}>
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === null && styles.categorySelected,
      ]}
      onPress={() => setSelectedCategory(null)}
    >
      <Text>All</Text>
    </TouchableOpacity>

    {categories.map(cat => (
      <TouchableOpacity
        key={cat}
        style={[
          styles.categoryButton,
          selectedCategory === cat && styles.categorySelected,
        ]}
        onPress={() => setSelectedCategory(cat)}
      >
        <Text>{cat}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CategoryFilter;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 20,
    margin: 4,
  },
  categorySelected: {
    backgroundColor: '#ddd',
  },
});
