import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const MainWrapperLogin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const LoginWrapper = styled.form`
  margin: 0 auto;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

export const ButtonStyled = styled(Button)`
  color: #ffffff;
  width: 100%;
`;
