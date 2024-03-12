import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../types/products";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
        console.log("Fetching Data");
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          category={product.category}
        />
      ))}
    </>
  );
};

export default Home;
