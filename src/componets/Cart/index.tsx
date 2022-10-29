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
import { cartIsClose, increment, decrement, removeCartProducts } from "../../Redux/cartState";

export default function Cart() {
  const cart = useSelector((state: any) => state.add.isOpen);
  const addRender = useSelector((state: any) => state.add.value);
  const addProducts = useSelector((state: any) => state.add.cartItems);
  const dispatch = useDispatch();

  console.log(addProducts);

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
              {addProducts.map((product: any) => {
                return (
                  <Product key={product.id}>
                    <img
                      src={product.photo}
                      alt={Products.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Name>{product.name}</Name>
                    <QntProducts>
                      <Qnt>Qnt:</Qnt>
                      <Buttons>
                        <button onClick={() => dispatch(decrement())}>-</button>
                        <span>{addRender}</span>
                        <button onClick={() => dispatch(increment())}>+</button>
                      </Buttons>
                    </QntProducts>
                    <CartPrice>{product.price}</CartPrice>
                    <CartClose onClick={()=> dispatch(removeCartProducts())} >x</CartClose>
                  </Product>
                );
              })}
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
