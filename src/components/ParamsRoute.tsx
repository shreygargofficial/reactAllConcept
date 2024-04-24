import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { Product } from "./FunctionTest";

interface Props {}

const ParamsRoute: FunctionComponent<Props> = (props) => {
  const params = useParams();
  const [product, setProduct] = useState({} as Product);
  const apiCall = async () => {
    let myData = await fetch("https://dummyjson.com/products/" + params.id, {
      method: "get",
    });
    let data = await myData.json();
    let product: Product = data;
    console.log('I am in rporp',product)
    setProduct(product);
  };

  const newApiCallFunction = useCallback(() => {
    apiCall();
  }, [params.id]);

  useEffect(() => {
    newApiCallFunction();
  }, [newApiCallFunction]);

  console.log(product)
  return (
    <div style={{width:"400px",margin:'50px auto'}}>
      <Card product={product} />;
    </div>
  );
};

export default ParamsRoute;
