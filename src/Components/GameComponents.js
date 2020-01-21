import styled from "styled-components";

export const Tries = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  background: #dba100;
  width: 140px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 20px;
  font-size: 18px;
`;

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-self: center;
  justify-self: center;
  justify-items: center;
  align-items: center;
  grid-template-rows: 0.5fr 1fr 1fr 2fr 1fr;
  grid-template-areas:
    "category"
    "hint"
    "password"
    "inputs"
    "missedChars";
`;
export const Category = styled.h1`
  display: block;
  grid-area: category;
  margin: 0;
`;

export const Hint = styled.div`
  grid-area: hint;
  background: white;
  color: black;
  padding: 20px;
  font-size: 18px;
`;

export const PasswordContainer = styled.div`
  grid-area: password;
`;

export const PasswordChar = styled.div`
  height: 40px;
  width: 30px;
  display: inline-block;
  margin: 1px;
  text-align: center;
`;

export const InputChar = styled.input.attrs(props => ({
  type: "text",
  pattern: "[A-Za-z]{1}",
  maxLength: 1,
  required: true
}))`
  padding: 10px;
  width: 200px;
  text-align: center;
`;

export const InputPassword = styled.input.attrs(props => ({
  required: true,
  type: "text"
}))`
  padding: 10px;
  width: 200px;
  text-align: center;
`;

export const Form = styled.form`
  display: block;
`;

export const Inputs = styled.div`
  grid-area: inputs;
  text-align: center;
`;
export const MissedCharsContainer = styled.div`
  grid-area: missedChars;
`;
