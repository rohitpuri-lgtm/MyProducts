import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ item }: { item: any }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.thumbnail }} style={styles.image} />
    <Text numberOfLines={2} style={styles.title}>
      {item.title}
    </Text>
    <Text style={styles.price}>${item.price}</Text>
  </View>
);

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    height: 200,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },
});
