import axios from "axios";

// GET all products
export const getAllProducts = () =>
  axios.get("https://fakestoreapi.com/products");
