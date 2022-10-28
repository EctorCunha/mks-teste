import Image from "next/image";
import carrinho from "../../assets/cart.svg";
import {
  Wrapper,
  Logo,
  Mks,
  Span,
  CartDiv,
  Quantity,
} from "../../styles/compontents/header";
// import Cart from '../Cart'
import { useSelector, useDispatch } from "react-redux";
import { cartIsOpen, setLoading } from "../../Redux/cartState";
import Skeleton from "@mui/material/Skeleton";


export default function Header() {
  const addRender = useSelector((state: any) => state.add.value);
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.add.loading);

  // function handleLoading() {
  //   dispatch(setLoading());
  // }

  return (
    <>
      {!loading ? (
        <Wrapper>
          <Logo>
            <Mks>MKS</Mks>
            <Span>Sistemas</Span>
          </Logo>

          <CartDiv onClick={() => dispatch(cartIsOpen())}>
            <Image src={carrinho} alt="icone de carrinho de compras" />
            <Quantity>{addRender}</Quantity>
          </CartDiv>
        </Wrapper>
      ) : (
          <Skeleton variant="rectangular" width="100%" height={80} />
      )}
    </>
  );
}
