import Image from "next/image";
import cart from "../../assets/cart.svg";
import { Wrapper, Logo, Mks, Span, CartDiv, Quantity } from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Header(props: Props) {
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
