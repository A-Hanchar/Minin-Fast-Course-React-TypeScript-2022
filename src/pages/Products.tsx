import { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/useProducts";
import { IProduct } from "../models";

export const Products = () => {
  const { error, isLoading, products, addProduct } = useProducts();

  const { isModalVisible, open, close } = useContext(ModalContext);

  const onCreateProduct = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {products.map(({ id, ...product }) => (
        <Product key={id} product={{ id, ...product }} />
      ))}

      {isModalVisible && (
        <Modal title="Create New Product" onModalClose={close}>
          <CreateProduct createProduct={onCreateProduct} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};
