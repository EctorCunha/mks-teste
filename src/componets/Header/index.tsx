import Image from "next/image";
import cart from "../../assets/cart.svg";
import { Wrapper, Logo, Mks, Span, CartDiv, Quantity } from "../../styles/compontents/header";



export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <Mks>MKS</Mks>
        <Span>Sistemas</Span>
      </Logo>

      <CartDiv>
        <Image src={cart} alt="icone de carrinho de compras" />
        <Quantity>0</Quantity>
      </CartDiv>
    </Wrapper>
  );
}
