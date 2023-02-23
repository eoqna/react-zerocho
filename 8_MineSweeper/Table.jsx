<<<<<<< HEAD
import React, { memo, useContext } from "react";
import { TableContext } from "./MineSweeper";
import Tr from "./Tr";

const Table = memo(() => {
=======
import React, { useMemo, useContext } from "react";
import { TableContext } from "./MineSweeper";
import Tr from "./Tr";

const Table = () => {
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
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
<<<<<<< HEAD
});
=======
};
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953

export default Table;