export const SortList = ({ List, setList, DragItem }) => {
  // const newList = List.splice(DragItem.drop, 1, { select: 1000, drop: 10000 });
  setList([...List, { id: 1000, num: 10000 }]);
};
