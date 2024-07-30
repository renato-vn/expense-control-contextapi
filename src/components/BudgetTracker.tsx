import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

const BudgetTracker = () => {
  const { state, dispatch, totalExpenses, remainingBudget } = useBudget();

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

  const resetApp = () => {
    dispatch({ type: "reset-app" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#dc2626" : "#3b82f6",
            trailColor: "#f5f5f5",
            textSize: 8,
            textColor: percentage === 100 ? "#dc2626" : "#3b82f6",
          })}
          text={`${percentage}% Gastados`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={resetApp}
        >
          Resetear App
        </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
};

export default BudgetTracker;
