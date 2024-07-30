import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseList = () => {
  const { state } = useBudget();

  const filteredExpenses = state.currentFilterCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentFilterCategory
      )
    : state.expenses;

  const isEmpty = useMemo(() => !filteredExpenses.length, [filteredExpenses]);

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Listado de Gastos.
          </p>

          {filteredExpenses.map((expense) => (
            <ExpenseDetails key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
