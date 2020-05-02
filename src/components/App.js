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

import good from '../images/scores/good.png';
import medium from '../images/scores/medium.png';
import bad from '../images/scores/bad.png';

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

const scoreIncarichi = [
  ['02 Mag', '3', '1', '2', '1', '3', '3'],
];

const getColor = (score) => {
  if (score > 2) return good;
  if (score > 1) return medium;
  return bad;
}

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
  background-repeat: repeat-x;
`;

const AppTopLine = styled(AppLine)`
  background-image: url(${top});
  background-position: center;
  background-repeat: repeat-x;
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
  max-width: 50rem;
  margin: 1rem auto;
  border-radius: 20px;

  padding: 1rem;

  background-color: rgba(200, 200, 200, 0.7);
`;

const ScoreItem = styled.div`
  width: 6rem;
  margin: 1rem;

  display: flex;
  flex-direction: column;

  span {
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span:nth-child(1n) {
    border-radius: 10px 10px 0 0;
    background-color: rgba(100, 100, 100, 0.3);
  }
  span:nth-child(2n) {
    border-radius: 0 0 10px 10px;
    background-color: rgba(200, 200, 200, 0.7);

    img { width: 1rem; }
  }
`;

const ScoreRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 1rem 0;
  border: 2px grey solid;
  border-radius: 15px;

  width: 100%;
  justify-content: center;
  align-items: center;

  h4 {
    width: 100%;
    margin: 0px;
    text-align: center;
  }
`;

const IncarichiSection = styled.section`
  width: calc(100% - 2rem);
  heigth: auto;

  background-image: url(${space});
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0.5rem;
    width: 100%;
    font-weight: bold;
    text-align: center;
  }
`;

const Draw = styled.section`
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

const Main = styled.main`
  width: 100vw;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


function App() {
  const diffWeeks = Math.trunc(moment.duration(moment().diff(FIRST_DAY)).asWeeks());
  const translateCoef = diffWeeks % 6;
  const sortedSqs = squadriglie.slice(translateCoef, squadriglie.length).concat(squadriglie.slice(0, translateCoef));
  return (
    <Main>
      <Draw>
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
      </Draw>
      <IncarichiSection>
        <Table>
          <h1>Punteggi incarichi</h1>
          {scoreIncarichi.map((scores, scoreIndex) => (
            <ScoreRow>
              <h4>Data {scores[0]}</h4>
              {squadriglie.map((sq, index) => (
                <ScoreItem>
                  <span><strong>{sq}</strong></span>
                  <span><img src={getColor(scores[index + 1])} alt={scores[index + 1]} /></span>
                </ScoreItem>
              ))}
            </ScoreRow>
          ))}
        </Table>
      </IncarichiSection>
    </Main>
  );
}

export default App;
