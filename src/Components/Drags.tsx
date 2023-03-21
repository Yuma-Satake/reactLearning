import { Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";

export const Drags = () => {
  const [DragItem, setDragItem] = useState({ select: 0, drop: 0 });
  const [List, setList] = useState(
    [...Array(10)].map((_, index) => {
      return { id: index, num: index * index };
    })
  );

  return (
    <Table>
      <Typography textAlign='center'>選択されている数は{DragItem.select}</Typography>
      <Typography textAlign='center'>落ちる場所の数は{DragItem.drop}</Typography>
      <TableBody>
        {List.map((item, index) => {
          const SortList = () => {
            const newList = List.splice(DragItem.drop, 0, { id: 1000, num: 10000 });
            console.log(newList);
            setList(newList);
          };
          return (
            <TableRow
              key={item.id}
              draggable={true}
              onDragStart={(e) => {
                // console.log(e.target.rowIndex);
                setDragItem({ ...DragItem, select: index });
              }}
              onDragOver={(event) => event.preventDefault()}
              onDragEnter={() => {
                setDragItem({ ...DragItem, drop: index });
              }}
              onDragEnd={() => {
                SortList();
              }}
            >
              <TableCell>ID：{item.id}</TableCell>
              <TableCell>ID：{item.num}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
