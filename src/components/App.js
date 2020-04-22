import React from 'react';
import styled from 'styled-components';

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

const squadriglie = [
  'koala',
  'grizzly',
  'aironi',
  'puma',
  'lemming',
  'tigrotti',
];

const incarichi = [
  '🧹 bagno e scale',
  '🎯 gioco',
  '📰 news e stock',
  '🧹 pulizia sede',
  '🙏🏼 preghiera',
  '🎤 canto',
];


// const Sqs = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-intems: center;
//   justify-content: center;
// `;

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
  height: 15%;
  background-color: black;
`;

const AppMainLine = styled(AppLine)`
  height: 70%;
  background-color: black;
`;

const AppBottomLine = styled(AppLine)`
  background-image: url(${engine});
  background-position: center top;
  background-repeat: norepeat;
`;

const AppTopLine = styled(AppLine)`
  background-image: url(${top});
  background-position: center;
`;

const AppSide = styled.div`
  display: none;
  margin: 0;
  width: 15%;
  height: 100%;

  background-image: url(${space});
  background-position: center;

  @media (min-width: 370px) {
    display: flex;
  }

  @media (min-width: 550px) {
    width: 40%;
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
  max-width: 400px;
  border-radius: 4%;

  background-image: url(${rocket});
  background-repeat: repeat;
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
`;



function App() {
  return (
    <Main>
      <AppTopLine />
      <AppMainLine>
        <AppSide />
        <AppContainer>
          {incarichi.map((incarico, index) => (
            <Item>
              <h1>{incarico}</h1>
              <ImgContainer>
                <img src={logos[squadriglie[index]]} alt={squadriglie[index]} />
              </ImgContainer>
            </Item>
          ))}
        </AppContainer>
        <AppSide />
      </AppMainLine>
      <AppBottomLine />
    </Main>
  );
}

export default App;
