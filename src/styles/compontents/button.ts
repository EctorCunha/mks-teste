import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  width: 100%;
  height: 3.433vh;
  border-radius: 0px 0px 8px 8px;
  gap: 1rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition: 0.3s ease-in-out;
  }
`;

export const Span = styled.span`
  /* font-weight: 600; */
  font-size: 0.875rem;
  color: var(--tertiary-color);
`;
