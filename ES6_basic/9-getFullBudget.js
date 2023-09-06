// Import the getBudgetObject function from another module.
import getBudgetObject from './7-getBudgetObject';

// This function takes income, gdp, and capita as input, calculates a budget object using getBudgetObject,
// and extends it to include additional methods for formatting income.
export default function getFullBudgetObject(income, gdp, capita) {
  // Calculate the budget object using the getBudgetObject function.
  const budget = getBudgetObject(income, gdp, capita);

  // Extend the budget object to include two additional methods for formatting income.
  const fullBudget = {
    ...budget, // Spread the properties from the original budget object.
    getIncomeInDollars(income) {
      // Format income as dollars.
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      // Format income as euros.
      return `${income} euros`;
    },
  };

  // Return the extended fullBudget object.
  return fullBudget;
}
