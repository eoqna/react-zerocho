import React, { useCallback, useContext, useMemo, memo } from "react";
import { CODE, TableContext, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL } from "./MineSweeper";

const getTdStyle = (code) => {
  switch(code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
        color:'white',
      }

    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {
        background: 'white',
        color: 'black',
      }
    
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return {
        background: 'red',
        color: 'white',
      }

    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: 'yellow',
        color: 'black',
      }

    default:
      return {
        background: 'white',
        color: 'black',
      }
  }
};

const getTdText = (code) => {
  switch(code) {
    case CODE.NORMAL:
      return '';

    case CODE.MINE:
      return 'X';

    case CODE.CLICKED_MINE:
      return '펑!';

    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return '!';

    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '?';

    default:
      return code || '';
  }
};

const Td = memo(({ rowIndex, cellIndex }) => {
  console.log('td rendered')
  const { tableData, dispatch, halted } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if(halted) {
      return;
    }
    switch(tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback((e) => {
    e.preventDefault();
    if(halted) {
      return;
    }
    switch( tableData[rowIndex][cellIndex] ) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
        return;

      case CODE.FLAG_MINE:
      case CODE.FLAG:
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
        return;
        
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
        return;

      case CODE.OPENED:
        return;

      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  return <RealTd onClickTd={onClickTd} onRightClickTd={onRightClickTd} data={tableData[rowIndex][cellIndex]} />;
});

const RealTd = memo(({ onClickTd, onRightClickTd, data}) => {
  console.log('real td rendered')
  return (
    <td
      style={getTdStyle(data)}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(data)}
    </td>
  )
});


export default Td;