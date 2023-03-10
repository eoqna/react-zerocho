import React, { memo, useMemo } from "react";
import Tr from './Tr';

const Table = memo(({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((tr, i) => (
          useMemo(
            () => <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
            , [tableData[i]])
        ))}
      </tbody>
    </table>
  );
});

export default Table;