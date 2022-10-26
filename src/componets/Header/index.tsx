import Image from "next/image";
import carrinho from "../../assets/cart.svg";
import { Wrapper, Logo, Mks, Span, CartDiv, Quantity } from "../../styles/compontents/header";
// import Cart from '../Cart'
import { useSelector, useDispatch } from 'react-redux'
import { cartIsOpen } from '../Cart/cartState'


export default function Header() {
  const addRender = useSelector((state:any) => state.add.value)
  const dispatch = useDispatch();
  // localStorage.setItem(addRender)


  return (
    <Wrapper>
      <Logo>
        <Mks>MKS</Mks>
        <Span>Sistemas</Span>
      </Logo>

      <CartDiv onClick={()=> dispatch(cartIsOpen())} >
        <Image src={carrinho} alt="icone de carrinho de compras" />
        <Quantity>{addRender}</Quantity>
      </CartDiv>
    </Wrapper>
  );
}
