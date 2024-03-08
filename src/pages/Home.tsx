import ProductCard from "../components/ProductCard";
import image1 from "../assets/image1.jpg";
import products from "../data/products.json";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <>
      {productsArray.map((product) => (
        <ProductCard
          image={image1}
          name={product.name}
          description={product.description}
          price={product.price}
          rating={4.5}
        />
      ))}

      {/* <ProductCard
        image={image1}
        name="John Doe"
        description="This is a description."
        price={99.99}
        rating={4.5}
      /> */}
    </>
  );
};

export default Home;
