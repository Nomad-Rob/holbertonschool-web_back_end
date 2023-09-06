// This function takes income, gdp, and capita as input and creates a budget object with these properties.
export default function getBudgetObject(income, gdp, capita) {
  // Create a budget object with properties for income, gdp, and capita, using the input values.
  const budget = {
    income,  // Property for income
    gdp,     // Property for GDP
    capita,  // Property for capita
  };

  // Return the created budget object.
  return budget;
}
