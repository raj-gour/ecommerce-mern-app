import React, { useEffect} from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dipatch = useDispatch();
  const productList = useSelector(state=>state.productList);
  const {loading, error, products} = productList;
  useEffect(() => {
    dipatch(listProducts())
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox/>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
