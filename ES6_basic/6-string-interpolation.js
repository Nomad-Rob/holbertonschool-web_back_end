// This function returns a description of San Francisco's statistics for a specific year.
export default function getSanFranciscoDescription() {
  // Define the year for which the statistics are provided.
  const year = 2017;

  // Define a budget object with income, GDP, and capita values.
  const budget = {
    income: '$119,868',         // Personal income
    gdp: '$154.2 billion',     // Gross Domestic Product (GDP)
    capita: '$178,479',        // GDP per capita
  };

  // Create a description string with placeholders for the year and budget values.
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
