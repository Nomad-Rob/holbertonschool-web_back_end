// This function returns the current year using the Date object.
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

// This function takes income, gdp, and capita as input and creates a budget object for the current year.
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Create a budget object with properties named using the current year and values from the input parameters.
  const budget = {
    [`income-${getCurrentYear()}`]: income, // Property name will be like "income-2023"
    [`gdp-${getCurrentYear()}`]: gdp,       // Property name will be like "gdp-2023"
    [`capita-${getCurrentYear()}`]: capita, // Property name will be like "capita-2023"
  };

  // Return the budget object for the current year.
  return budget;
}
