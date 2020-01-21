import React, { useState, useEffect } from "react";
import {
  Container,
  CenterContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
  TableBody
} from "./ViewComponents";
import HomeButtonComponnet from "./HomeButtonComponent";

function ScoreBoard() {
  const [scores, setScores] = useState();

  useEffect(() => {
    const sortedScores = JSON.parse(localStorage.getItem("scores"));
    sortedScores.sort((a, b) => a.time - b.time);
    setScores(sortedScores);
  }, []);

  return (
    <Container>
      <HomeButtonComponnet />
      <CenterContainer>
        {scores === undefined ? (
          "Loading"
        ) : (
          <Table>
            <TableBody>
              <TableRow>
                <TableHeader> No. </TableHeader>
                <TableHeader> Name </TableHeader>
                <TableHeader> Time </TableHeader>
              </TableRow>
              {scores.map((score, i) => {
                return (
                  <TableRow key={i}>
                    <TableData> {i + 1} </TableData>
                    <TableData> {score.name} </TableData>
                    <TableData> {score.time} </TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CenterContainer>
    </Container>
  );
}

export default ScoreBoard;
