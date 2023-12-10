import styled from "@emotion/styled";
export const Button = styled.button`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #fff;
  background-color: #0b44cd;
  border: none;
  margin-top: auto;
  transition: background-color 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #3470ff;
  }
`;
