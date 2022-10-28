import { useDispatch } from "react-redux";
import { increment } from "../../Redux/cartState";
import { Wrapper, Span } from "../../styles/compontents/button";
import bag from "../../assets/shopping-bag.svg";
import Image from "next/image";


export default function Button(id:number) {
  const dispatch = useDispatch();


  return (
    <Wrapper onClick={() => dispatch((increment()))}>
      <Image src={bag} alt="Icone que representa uma sacola comercial" />
      <Span>COMPRAR</Span>
    </Wrapper>
  );
}
