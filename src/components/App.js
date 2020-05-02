import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

// import logo from '../images/logo.svg';

import koala from '../images/sqs/koala.jpeg';
import grizzly from '../images/sqs/grizzly.jpeg';
import aironi from '../images/sqs/aironi.jpeg';
import puma from '../images/sqs/puma.jpeg';
import lemming from '../images/sqs/lemming.jpeg';
import tigrotti from '../images/sqs/tigrotti.jpeg';

import rocket from '../images/rocket.jpg';
import space from '../images/space.jpg';
import engine from '../images/engine.jpg';
import top from '../images/top.jpg';


const logos = {
  koala,
  grizzly,
  aironi,
  puma,
  lemming,
  tigrotti,
}

const FIRST_DAY = moment('2020-04-25').endOf('day');

const squadriglie = [
  'koala',
  'grizzly',
  'aironi',
  'puma',
  'lemming',
  'tigrotti',
];

const incarichi = [
  '📰 italia',
  '🎯 gioco',
  '🍳 cucina',
  '🌍 estero',
  '🙏🏼 preghiera',
  '🎤 canto',
];

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  width: 100%;

  img {
    border-radius: 50%;
    border: 5px groove #777;
    width: auto;
    max-width: 40%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2%;
  height: 30%;
  width: 48%;

  h1 {
    background-color: lightgrey;
    padding: 0.2rem;
    border: 2px dotted grey;
    height: 1.5rem;
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }
`;

const AppLine = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 20%;
  background-color: black;
`;

const AppMainLine = styled(AppLine)`
  height: 65%;
  background-color: black;
`;

const AppBottomLine = styled(AppLine)`
  height: 25%;

  background-image: url(${engine});
  background-position: center top;
  background-repeat: norepeat;
`;

const AppTopLine = styled(AppLine)`
  background-image: url(${top});
  background-position: center;
`;

const AppSide = styled.div`
  display: flex;
  margin: 0;
  height: 100%;
  width: 10%;

  background-image: url(${space});
  background-position: center;

  @media (min-width: 370px) {
    width: 25%;
  }

  @media (min-width: 550px) {
    width: 50%;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-intems: center;
  justify-content: center;
  align-self: stretch;
  margin: 0;
  width: 100%;
  max-width: 330px;
  border-radius: 4%;

  background-image: url(${rocket});
  background-repeat: repeat;
`;

const Table = styled.div`
  width: calc(100% - 2rem);
  border-radius: 20px;

  padding: 1rem;

  background-color: rgba(200, 200, 200, 0.7);
`;

const StyledCel = styled.span`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12%;
  margin: 1%;
`;

const StyledRow = styled.div`
  margin: 0.1rem;
  border: 1px black solid;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(200, 200, 200, 0.5);

  ${StyledRow}:nth-child(2n) {
    background-color: rgba(100, 100, 100, 0.3);
  }
`;

const IncarichiSection = styled.section`
  width: calc(100% - 2rem);
  heigth: auto;
  padding: 1rem;

  background-image: url(${space});
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 0.5rem;
    width: 100%;
    font-weight: bold;
    text-align: center;
  }
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: black;
`;


const scoreIncarichi = [
  ['05/02', '3', '3', '3', '3', '3', '3'],
];



function App() {
  const diffWeeks = Math.trunc(moment.duration(moment().diff(FIRST_DAY)).asWeeks());
  const translateCoef = diffWeeks % 6;
  const sortedSqs = squadriglie.slice(translateCoef, squadriglie.length).concat(squadriglie.slice(0, translateCoef));
  return (
    <Main>
      <AppTopLine />
      <AppMainLine>
        <AppSide />
        <AppContainer>
          {incarichi.map((incarico, index) => (
            <Item key={incarico}>
              <h1>{incarico}</h1>
              <ImgContainer>
                <img src={logos[sortedSqs[index]]} alt={sortedSqs[index]} />
              </ImgContainer>
            </Item>
          ))}
        </AppContainer>
        <AppSide />
      </AppMainLine>
      <AppBottomLine />
      <IncarichiSection>
        <Table>
          <h2>Risultati incarichi</h2>
          <StyledGrid>
            <StyledGrid>
              <StyledRow>
                <StyledCel><strong>Data</strong></StyledCel>
                <StyledCel><strong>Koala</strong></StyledCel>
                <StyledCel><strong>Grizzly</strong></StyledCel>
                <StyledCel><strong>Aironi</strong></StyledCel>
                <StyledCel><strong>Puma</strong></StyledCel>
                <StyledCel><strong>Lemming</strong></StyledCel>
                <StyledCel><strong>Tigrotti</strong></StyledCel>
              </StyledRow>
              {scoreIncarichi.map((scores) => (
                <StyledRow key={scores[0]}>
                  <StyledCel><strong>{scores[0]}</strong></StyledCel>
                  <StyledCel>{scores[1]}</StyledCel>
                  <StyledCel>{scores[2]}</StyledCel>
                  <StyledCel>{scores[3]}</StyledCel>
                  <StyledCel>{scores[4]}</StyledCel>
                  <StyledCel>{scores[5]}</StyledCel>
                  <StyledCel>{scores[6]}</StyledCel>
                </StyledRow>
              ))}
            </StyledGrid>
          </StyledGrid>
        </Table>
      </IncarichiSection>
    </Main>
  );
}

export default App;
