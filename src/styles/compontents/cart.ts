import styled from "styled-components";

export const CartContainer = styled.aside`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 25.312vw;
  height: 100vh;
  background-color: var(--secondary-color);
  top: 0;
  right: 0;

  @media (max-width: 1920px) {
    width: 25vw;
  }
  @media (max-width: 1325px) {
    width: 35vw;
  }
  @media (max-width: 960px) {
    width: 45vw;
  }
  @media (max-width: 680px) {
    width: 65vw;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2.25rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: min(1.688rem, 1.5vw);
  width: 9.375vw;
  height: 6.027vh;
  border-radius: nullpx;
  color: var(--tertiary-color);
  @media (max-width: 500px) {
    font-size: 2rem;
    width: 50vw;
  }
`;

export const Close = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.562vw;
  height: 3.229vh;
  border: none;
  border-radius: 50%;
  font-weight: 400;
  font-size: var(1.75rem, 1.5vw);
  background-color: #000000;
  color: var(--tertiary-color);
  cursor: pointer;
  @media (max-width: 500px) {
    width: 9vw;
    height: 4vh;
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--tertiary-color);
  width: 19.739vw;
  height: 10.226vh;
  margin: 70px 60px 28px 47px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  gap: 0.3rem;
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export const Name = styled.p`
  width: 6.5rem;
  height: 2.0625rem;
  font-weight: 400;
  font-size: min(1rem, 0.9vw);
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const QntProducts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.4rem 0 -0.6rem;
  
`;

export const Qnt = styled.span`
  font-weight: 400;
  font-size: min(1rem, 0.7vw);
  @media (max-width: 500px) {
    font-size: .8rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3.125rem;
  height: 1.1875rem;
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
    font-size: 0.5rem;
  }

  
`;

export const CartPrice = styled.span`
  font-size: min(1.125rem, 0.7vw);
  font-weight: 700;
  text-align: left;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const CartClose = styled.span`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  margin: -3.5rem -11.5rem 3rem 6rem;
  border-radius: 50%;
  font-size: var(1rem, 1vw);
  background-color: #000000;
  color: var(--tertiary-color);
  @media (max-width: 500px) {
    margin: -3.5rem -18.7rem 3rem 6rem;
  }
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
  cursor: pointer;
`;

export const Purchase = styled.p`
  display: flex;
  align-items: flex-end;
  font-weight: 700;
  font-size: min(1.75rem, 1.5vw);
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;
