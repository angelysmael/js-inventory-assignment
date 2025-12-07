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