import { useParams } from "react-router";

export default function ProductDetails() {
  const params = useParams();
  return <h1>Product: {params.productId}</h1>;
}
