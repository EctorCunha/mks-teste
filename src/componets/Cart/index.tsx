import {
  CartContainer,
  Main,
  DivTitle,
  Title,
  Close,
  Products,
  Product,
  Name,
  QntProducts,
  Qnt,
  Buttons,
  CartPrice,
  CartClose,
  Total,
  Price,
  Finish,
  Purchase,
} from "../../styles/compontents/cart";
import { useSelector, useDispatch } from "react-redux";
import { cartIsClose, increment, decrement } from "../../Redux/cartState";

export default function Cart() {
  const cart = useSelector((state: any) => state.add.isOpen);
  const addRender = useSelector((state: any) => state.add.value);
  const dispatch = useDispatch();

  
  return (
    <>
      {cart ? (
        <CartContainer>
          <Main>
            <DivTitle>
              <Title>Carrinho de compras</Title>
              <Close onClick={() => dispatch(cartIsClose())}>x</Close>
            </DivTitle>

            <Products>
              <Product>
                <img
                  src={"https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=2000"}
                  alt="Produto escolhido"
                  style={{ width: "50px", height: "50px" }}
                />
                <Name>Apple watch Series 4 GPS</Name>
                <QntProducts>
                  <Qnt>Qnt:</Qnt>
                  <Buttons>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <span>{addRender}</span>
                    <button onClick={() => dispatch(increment())}>+</button>
                  </Buttons>
                </QntProducts>
                <CartPrice>R$ 399</CartPrice>
                <CartClose>x</CartClose>
              </Product>
            </Products>

            <Total>
              <Price>Total:</Price>
              <Price>R$ 798</Price>
            </Total>
          </Main>

          <Finish>
            <Purchase>Finalizar Compra</Purchase>
          </Finish>
        </CartContainer>
      ) : null}
    </>
  );
}
