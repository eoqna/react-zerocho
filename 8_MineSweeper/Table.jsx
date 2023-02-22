import React, { useMemo, useContext } from "react";
import { TableContext } from "./MineSweeper";
import Tr from "./Tr";

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((tr, i) => 
          <Tr key={i} rowIndex={i} />
        )}
      </tbody>
    </table>
  )
};

export default Table;