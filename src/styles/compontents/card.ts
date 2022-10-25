import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: gray;
  width: 100%;
  height: 100%;
  margin: 217px 150px 206px;
  gap: 2rem;
`;


export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 217.56px;
  height: 285px;
  margin: 0;
  border: none;
  border-radius: 8px;
  background-color: var(--tertiary-color);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  gap: 0.4rem;
`;

export const NameProduct = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: var(--text-color);
`;

export const DivPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 64px;
  border-radius: 5px;

  background-color: #373737;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: var(--tertiary-color);
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 0.625rem;
  color: var(--text-color);
`;
