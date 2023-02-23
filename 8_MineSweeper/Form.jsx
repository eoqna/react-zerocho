<<<<<<< HEAD
import React, { useState, useCallback, useContext, memo } from "react";
import { TableContext, START_GAME } from './MineSweeper';

const Form = memo(() => {
=======
import React, { useState, useCallback, useContext } from "react";
import { TableContext, START_GAME } from './MineSweeper';

const Form = () => {
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
  const [ row, setRow ] = useState(10);
  const [ cell, setCell ] = useState(10);
  const [ mine, setMine ] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);

  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);

  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  const onClickBtn = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine]);

  return (
    <div>
      <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
      <input type="number" placeholder="가로" value={cell} onChange={onChangeCell} />
      <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine} />
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
<<<<<<< HEAD
});
=======
};
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953

export default Form;