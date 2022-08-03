import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { Error } from "./Error";

const productData: Omit<IProduct, "id"> = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 12,
  },
};

interface ICreateProductProps {
  createProduct: (product: IProduct) => void;
}

export function CreateProduct({ createProduct }: ICreateProductProps) {
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data } = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      { ...productData, title: value }
    );

    createProduct(data);
  };

  const handleChangeInputValue = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;

    newValue.trim().length === 0
      ? setValidation("Please Enter Valid Value")
      : setValidation("");

    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
        value={value}
        onChange={handleChangeInputValue}
      />
      {!!validation.length && <Error message={validation} />}

      {!validation.length && !!value && (
        <button
          className="py-2 px-4 border bg-yellow-400 hover:text-white"
          type="submit"
        >
          Create
        </button>
      )}
    </form>
  );
}
