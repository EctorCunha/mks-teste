import styled from "styled-components";

export const CartContainer = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 25.312vw;
  background-color: var(--secondary-color);
  top: 0;
  right: 0;
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 36px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: min(1.688rem, 1.5vw);
  width: 9.375vw;
  height: 6.027vh;
  border-radius: nullpx;

  color: var(--tertiary-color);
`;

export const Close = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.979vw;
  height: 4.09vh;
  border: none;
  border-radius: 50%;
  font-weight: 400;
  font-size: var(1.75rem, 1.5vw);
  background-color: #000000;
  color: var(--tertiary-color);
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--tertiary-color);
  width: 19.739vw;
  height: 10.226vh;
  margin: 70px 60px 28px 47px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  gap: 1rem;
`;

export const Name = styled.p`
  width: 113px;
  height: 33px;
  font-weight: 400;
  font-size: 13px;
`;

export const QntProducts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Qnt = styled.span`
  font-weight: 400;
  font-size: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  height: 19px;
  border-radius: 4px;
  background-color: var(--tertiary-color);
  border: 0.3px solid #bfbfbf;

  button {
    border: none;
    font-weight: 400;
    font-size: 12px;
    background-color: var(--tertiary-color);
  }

  span {
    font-weight: 400;
    font-size: 8px;
  }
`;

export const CartPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
`;

export const CartClose = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  margin: -3rem -11.5rem 3rem 12rem;
  border-radius: 50%;
  font-size: var(1rem, 1vw);
  background-color: #000000;
  color: var(--tertiary-color);
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10.441vh;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 28px;
  color: var(--tertiary-color);
`;

export const Finish = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10.441vh;
  background-color: #000000;
  color: var(--tertiary-color);
  font-weight: 700;
  font-size: 1.75rem;
`;

export const Purchase = styled.p`
  display: flex;
  align-items: flex-end;
`;
