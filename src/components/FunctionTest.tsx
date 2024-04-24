import { FunctionComponent, Suspense, useRef } from "react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import Card from "./Card";
import ForwardRefDemo from "./ForwardRefDemo";
import Spinner from "./Spinner";
import ReactDOM from "react-dom";

interface Props {}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const FunctionTest: FunctionComponent<Props> = () => {
  const [flag, setFlag] = useState(false);
  const [product, setProduct] = useState([] as Product[]);

  const inputa = useRef<any>(null);

  useEffect(() => {
    inputa.current?.focus();
    inputa.current.style["border"] = "2px solid red";
    console.log((inputa.current.value = "sdsd"));
    return () => {
      // cancel the subscription
      console.log("Act Like ComponentWillUnmount");
    };
  }, []);

  const apiCall = async () => {
    let myData = await fetch("https://dummyjson.com/products/", {
      method: "get",
    });
    console.log("without json", myData);
    let data = await myData.json();
    let products: Product[] = data.products;
    setProduct(products);
  };

  const newApiCallFunction = useCallback(() => {
    apiCall();
  }, []);

  useEffect(() => {
    newApiCallFunction();
  }, [newApiCallFunction]);

  const newMyFunc = useCallback(() => {
    console.log(" I am a plain function!");
  }, []);

  useEffect(() => {
    console.log("Always called! render function");
  });

  useEffect(() => {
    console.log(
      "Act Like ComponentDidUpdate plus componentDidMount onchange of flag"
    );
  }, [flag]);

  function handleNumberClick() {
    setFlag((prev) => !prev);
  }

  return (
    <>
      <h1>Function Component Testing</h1>
      {flag.toString()}
      <button onClick={handleNumberClick}>Click TO Change Flag</button>
      <Suspense fallback={<Spinner />}>
        <div className="row">
          {product.length ? (
            product.map((ele: Product, key) => {
              return <Card key={key} product={ele} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
      </Suspense>
      <div>
        {ReactDOM.createPortal(
          <div>Hello Shrey</div>,
          document.getElementById("abc")! as HTMLElement
        )}
        <ForwardRefDemo name="garg" ref={inputa} />
      </div>
    </>
  );
};

export default FunctionTest;
