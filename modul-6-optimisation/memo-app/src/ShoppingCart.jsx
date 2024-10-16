import React, { useState } from "react";

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price.toFixed(2)}
          <button onClick={() => onDeleteProduct(product.id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};

const ProductInput = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productName.trim() === "" ||
      isNaN(productPrice) ||
      Number(productPrice) <= 0
    )
      return;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
    };

    onAddProduct(newProduct);
    setProductName("");
    setProductPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Nazwa produktu"
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Cena produktu"
      />
      <button type="submit">Dodaj Produkt</button>
    </form>
  );
};

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const totalPrice = () => {
    return products
      .reduce((total, product) => total + product.price, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h2>Koszyk Zakupowy</h2>
      <ProductInput onAddProduct={handleAddProduct} />
      <h3>Produkty w koszyku:</h3>
      <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
      <h3>Łączna wartość: ${totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
