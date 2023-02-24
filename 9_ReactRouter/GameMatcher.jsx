import React from "react";
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NumberBaseball from '../3_NumberBaseball/NumberBaseballClass';
import RSP from '../5_RSP/RSPClass';
import Lotto from '../6_Lotto/LottoClass';

const GameMatcher = () => {
  const location = useLocation();
  const path = location.pathname;

  // if(path === '/game/number-baseball') {
  //   return <NumberBaseball />;
  // } else if(path === '/game/rock-scissors-papper') {
  //   return <RSP />;
  // } else if(path === '/game/lotto-generator') {
  //   return <Lotto />;
  // }
  // return (
  //   <div>
  //     일치하는 게임이 없습니다.
  //   </div>
  // )
  
  return (
    <Routes>
      <Route path='/number-baseball' element={<NumberBaseball />}/>
      <Route path='/rock-scissors-papper' element={<RSP />}/>
      <Route path='/lotto-generator' element={<Lotto />}/>
      <Route path='/index' element={<div>일치하는 게임이 없습니다.</div>}/>
    </Routes>
  )
}

export default GameMatcher;