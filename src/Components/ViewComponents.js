import styled from "styled-components";

export const Button = styled.button`
  color: #fff !important;
  width: 300px;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 20px;
  margin: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;

  &:hover,
  [HomeButton] {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export const HomeButton = styled.button`
  color: #fff !important;
  width: 100px;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 20px;
  margin: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  position: absolute;
  top: 50px;
  left: 50px;

  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export const CenterContainer = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;