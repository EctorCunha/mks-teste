import { Wrapper, Span } from "../../styles/compontents/button";
import bag from "../../assets/shopping-bag.svg";
import Image from "next/image";

export default function Button() {
  return (
    <Wrapper>
      <Image src={bag} alt="Icone que representa uma sacola comercial" />
      <Span>COMPRAR</Span>
    </Wrapper>
  );
}
