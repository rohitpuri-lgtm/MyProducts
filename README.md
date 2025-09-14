# Product List App

A React Native app that displays products from DummyJSON API
 with search, category filters, and lazy loading.

#  🎯 Objective

Create a product listing interface that:

Fetches products from a fake API

Displays them in a grid

Supports search and category-based filtering

Implements infinite scroll (lazy loading) for smooth performance

✅ Features

✅ Display products in a grid layout

✅ Search functionality to find products by name

✅ Filter products by category

✅ Infinite scroll (lazy loading) to load more products as the user scrolls

✅ FlatList performance optimizations:

initialNumToRender

removeClippedSubviews

getItemLayout

# ⚡ Concepts Covered

React Native FlatList usage and optimization

API integration with DummyJSON

Search and filter logic

Infinite scroll / lazy loading

Performance optimization for large lists

# 🚀 Setup & Installation
1️⃣ Prerequisites

Node.js (Recommended ≥16.x)

React Native CLI (without Expo)

Android Studio or Xcode

2️⃣ Clone the Repository
git clone https://github.com/yourusername/product-list-app.git
cd product-list-app

3️⃣ Install Dependencies

npm install


Or with yarn:

yarn install

4️⃣ Run on Android
npx react-native run-android


Or run on iOS:

npx react-native run-ios

# ⚠️ Notes

The app fetches data from DummyJSON API, which is a fake API for testing.

FlatList optimizations ensure smooth scrolling even with large datasets.

📄 License

MIT License
