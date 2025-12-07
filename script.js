class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
// Product class: basic product information
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Returns total value of this product in stock
  getTotalValue() {
    return this.price * this.quantity;
  }
}
// Product class: basic product information
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Returns total value of this product in stock
  getTotalValue() {
    return this.price * this.quantity;
  }

  // Simple string with product info
  toString() {
    return (
      "Product: " +
      this.name +
      ", Price: $" +
      this.price.toFixed(2) +
      ", Quantity: " +
      this.quantity
    );
  }
}
// Product class: basic product information
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Returns total value of this product in stock
  getTotalValue() {
    return this.price * this.quantity;
  }

  // Simple string with product info
  toString() {
    return (
      "Product: " +
      this.name +
      ", Price: $" +
      this.price.toFixed(2) +
      ", Quantity: " +
      this.quantity
    );
  }

  // Static method to apply discount to all products in array
  static applyDiscount(products, discount) {
    for (let product of products) {
      if (product instanceof Product) {
        product.price = product.price * (1 - discount);
      }
    }
  }
}
// PerishableProduct class: has an expiration date and extends Product
class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity); // call parent constructor
    this.expirationDate = expirationDate;
  }

  // Include expiration date in string
  toString() {
    return (
      "Product: " +
      this.name +
      ", Price: $" +
      this.price.toFixed(2) +
      ", Quantity: " +
      this.quantity +
      ", Expiration Date: " +
      this.expirationDate
    );
  }
}
// Store class: manages inventory of Product and PerishableProduct
class Store {
  constructor(name) {
    this.name = name || "Unnamed Store";
    this.inventory = []; // array of Product or PerishableProduct
  }

  // Add a product to the inventory
  addProduct(product) {
    this.inventory.push(product);
  }

  // Total value of all products in inventory
  getInventoryValue() {
    let total = 0;
    for (let product of this.inventory) {
      total += product.getTotalValue();
    }
    return total;
  }

  // Find product by name (case-insensitive)
  findProductByName(name) {
    const lowerName = name.toLowerCase();
    for (let product of this.inventory) {
      if (product.name.toLowerCase() === lowerName) {
        return product;
      }
    }
    return null;
  }
}