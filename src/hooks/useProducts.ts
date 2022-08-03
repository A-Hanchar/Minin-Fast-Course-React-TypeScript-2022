import { IProduct } from "../models";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export function useProducts() {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts(prevProducts => [...prevProducts, product])
  }

  async function fetchProducts(limit: number = 5) {
    try {
      setLoading(true);
      setError("");
      const { data } = await axios.get<IProduct[]>(
        `https://fakestoreapi.com/products?limit=${limit}`
      );

      setProducts(data);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      }

      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { isLoading, products, error, addProduct };
}
