<<<<<<< HEAD
import React, { memo, useContext } from "react";
import { TableContext } from "./MineSweeper";
import Td from "./Td";

const Tr = memo(({ rowIndex }) => {
=======
import React, { useContext } from "react";
import { TableContext } from "./MineSweeper";
import Td from "./Td";

const Tr = ({ rowIndex }) => {
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0].length && Array(tableData[0].length).fill().map((td, i) => 
        <Td key={i} rowIndex={rowIndex} cellIndex={i} />
      )}
    </tr>
  );
<<<<<<< HEAD
});
=======
};
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953

export default Tr;