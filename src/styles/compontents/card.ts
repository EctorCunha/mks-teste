import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 8rem 8rem 8.5rem;
  gap: 2rem;

  @media (max-width: 1920px) {
    width: 60vw;
    margin: 6rem 2rem 6rem;
  }

  @media (max-width: 1615px) {
    width: 70vw;
    margin: 6rem 2rem 6rem;
  }

  @media (max-width: 480px) {
    margin: 2rem 1rem;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 13.5975rem;
  height: 17.8125rem;
  margin: 0;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--tertiary-color);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  gap: 0.4rem;
`;

export const DivPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 1.625rem;
  width: 100%;
  padding: 0.3rem;
`;

export const NameProduct = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: var(--text-color);
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: .7rem;
  color: var(--tertiary-color);
  width: 5.4rem;
  text-align: center;
  border-radius: 5px;
  background-color: #373737;
`;

export const Description = styled.p`
  padding: 0.3rem;
  font-weight: 300;
  font-size: min(1.2rem, 0.625rem);
  color: var(--text-color);
`;
