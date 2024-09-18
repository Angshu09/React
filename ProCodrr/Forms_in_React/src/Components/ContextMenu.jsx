import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setExpense,
  expenses,
  setEditingRowId
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={(e) => {
          setMenuPosition({});
          setEditingRowId(rowId)
          expenses.forEach((e) => {
            if (e.id === rowId) {
              setExpense({
                title: e.title,
                category: e.category,
                amount: e.amount,
                email: "",
              });
            }
          });
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prev) => {
            return prev.filter((expense) => expense.id != rowId);
          }); 
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
