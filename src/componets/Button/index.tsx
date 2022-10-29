import { useDispatch, useSelector } from "react-redux";
import { addProduct, increment } from "../../Redux/cartState";
import { Wrapper, Span } from "../../styles/compontents/button";
import bag from "../../assets/shopping-bag.svg";
import Image from "next/image";


export default function Button() {
  const dispatch = useDispatch();
  const addCartToProduct = useSelector((state:any) => state.add.cartItems);

  function handleIncrement() {
    dispatch(increment());
    dispatch(addProduct(addCartToProduct));
  }


  return (
    <Wrapper onClick={() => handleIncrement()}>
      <Image src={bag} alt="Icone que representa uma sacola comercial" />
      <Span>COMPRAR</Span>
    </Wrapper>
  );
}
