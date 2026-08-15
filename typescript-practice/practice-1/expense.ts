interface Expense {
    title: string,
    amount: number,
    category: string
}

function totalSpend(expenses: Expense[]): number {
    return expenses.reduce((previousExpense, expense) => previousExpense + expense.amount, 0);
}

function mostExpensive(expenses: Expense[]): number {
    return expenses.reduce((previousExpense, expense) => {
        if(expense.amount > previousExpense) {
            return expense.amount
        }
        return previousExpense;
    }, expenses[0].amount);
}

const expenses: Expense[] = [
  { title: "Groceries", amount: 4500, category: "Food" },
  { title: "Bus Pass", amount: 1200, category: "Transport" },
  { title: "Restaurant", amount: 1800, category: "Food" },
  { title: "Electricity Bill", amount: 3200, category: "Utilities" },
  { title: "Movie Ticket", amount: 800, category: "Entertainment" },
  { title: "New Shoes", amount: 5500, category: "Shopping" },
  { title: "Internet Bill", amount: 1500, category: "Utilities" },
  { title: "Uber Ride", amount: 950, category: "Transport" }
];

console.log("Total spent: ", totalSpend(expenses));
console.log("Most expensive product: ", mostExpensive(expenses));