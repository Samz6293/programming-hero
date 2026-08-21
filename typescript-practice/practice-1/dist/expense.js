"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalSpend(expenses) {
    return expenses.reduce((previousExpense, expense) => previousExpense + expense.amount, 0);
}
function mostExpensive(expenses) {
    return expenses.reduce((previousExpense, expense) => {
        if (expense.amount > previousExpense) {
            return expense.amount;
        }
        return previousExpense;
    }, 0);
}
function mostExpensiveObject(expenses) {
    return expenses.reduce((previousExpense, expense) => {
        if (expense.amount > previousExpense.amount) {
            return expense;
        }
        return previousExpense;
    });
}
function categoryExpense(expenses, category) {
    const categorized = expenses.filter((expense) => expense.category === category);
    if (categorized.length > 0) {
        return categorized;
    }
    return `No expenses in  "${category}" category`;
}
function calculateCategoryExpense(expenses, category) {
    const categorized = expenses.filter((expense) => expense.category === category);
    if (categorized.length > 0) {
        return categorized
            .reduce((previousExpense, currentExpense) => previousExpense + currentExpense.amount, 0);
    }
    return `No expenses in  "${category}" category`;
}
const expenses = [
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
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
console.log("Most expensive product: ", mostExpensive(expenses));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
console.log("Most expensive product object: ", mostExpensiveObject(expenses));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
console.log("Expense by category: ", categoryExpense(expenses, "Food"));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
console.log("Expense by category: ", categoryExpense(expenses, "Carting"));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
console.log("Expenses in category(total): ", calculateCategoryExpense(expenses, "Transport"));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
console.log("Expenses in category(total): ", calculateCategoryExpense(expenses, "Carting"));
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
//# sourceMappingURL=expense.js.map