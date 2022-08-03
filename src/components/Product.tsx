import React, { useState } from "react";
import { IProduct } from "../models";

interface IProductProps {
  product: IProduct;
}

export function Product({
  product: { id, category, description, image, price, rating, title },
}: IProductProps) {
  const [isShowDescription, setIsShowDescription] = useState(false);

  const btnBg = isShowDescription ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2', 'px-4', 'border', btnBg]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={image} alt={title} className="w-1/6" />
      <p>{title}</p>
      <p className="font-bold">{price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setIsShowDescription(prevState => !prevState)}
      >{`${isShowDescription ? "Hide" : "Show"} description`}</button>
      
      {isShowDescription && (
        <div>
          <p className="font-bold">{description}</p>
          <p>Rate: <span style={{fontWeight: 700}}>{rating?.rate}</span></p>
        </div>
      )}
    </div>
  );
}
