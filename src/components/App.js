import React from 'react';
import styled from 'styled-components';

// import logo from '../images/logo.svg';

import koala from '../images/koala.jpeg';
import grizzly from '../images/grizzly.jpg';
import aironi from '../images/aironi.jpg';
import puma from '../images/puma.jpg';
import lemming from '../images/lemming.jpeg';
import tigrotti from '../images/tigrotti.png';

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
  'pulizia scale e bagno',
  'gioco',
  'news e magazzino',
  'pulizia sede',
  'preghiera',
  'canto',
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
  height: 80%;
  width: 100%;

  img {
    border-radius: 50%;
    border: 5px groove #777;
    width: auto;
    height: 70%;
    max-width: 100px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 32%;
  width: 48%;

  h1 {
    font-size: 1.2rem;
    margin: 0;
    text-align: center;
  }
`;
// @media (min-width: 800px) {
//   height: 50%;
//   width: 33%;
// }

const AppLine = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 15%;
  background-color: blue;
`;

const AppMainLine = styled(AppLine)`
  height: 70%;
  background-color: black;
`;

const AppBottomLine = styled(AppLine)`
  background-image: url(${engine});
  background-position: center top;
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
      <AppTopLine>Incarichi</AppTopLine>
      <AppMainLine>
        <AppSide>lato</AppSide>
        <AppContainer>
          {incarichi.map((incarico, index) => (
            <Item>
              <h1>{incarico}</h1>
              <ImgContainer>
                <img src={koala} alt={squadriglie[index]} />
              </ImgContainer>
            </Item>
          ))}
        </AppContainer>
        <AppSide>lato</AppSide>
      </AppMainLine>
      <AppBottomLine />
    </Main>
  );
}

export default App;
