import styled from "styled-components";

export const Button = styled.button`
  color: #fff !important;
  width: ${props => (!props.width ? 300 : props.width)}px;
  text-transform: uppercase;
  text-decoration: none;
  background: ${props => (!props.color ? "#60a3bc" : props.color)};
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
  display: block;
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
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  justify-self: center;
  justify-items: center;
  display: flex;
`;

export const NameInput = styled.input.attrs(props => ({
  type: "text",
  required: true
}))`
  width: ${props => (!props.width ? 300 : props.width)}px;
  padding: 10px;
  text-align: center;
`;

export const Paragraph = styled.p`
  align-self: center;
  justify-self: center;
  text-align: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: block;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 300px;
  padding: 10px;
`;
export const TableBody = styled.tbody`
  width: "100%";
  height: "100%";
`;

export const TableRow = styled.tr`
  padding: 5px;
  text-align: center;
  background: #1ac6ff;
  &:nth-child(odd) {
    background: #66d9ff;
  }
`;

export const TableData = styled.td`
  padding: 5px;
  text-align: center;
`;

export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #0099cc;
`;
