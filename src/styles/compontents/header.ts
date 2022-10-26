import styled from 'styled-components';


export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10.87vh;
  background-color: var(--secondary-color);
  color: var(--tertiary-color);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 1.45vw 0 1.51vw 3.385vw;
`;

export const Mks = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
`;

export const Span = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  margin:  0.4vw 0 0 0.4vw;
`;

export const CartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 4.68vw;
  height: 4.84vh;
  border-radius: 8px;
  margin: 1.813rem 5.5rem 1.688rem 0;
  background: var(--tertiary-color);
  cursor: pointer;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
  color: black;
`;