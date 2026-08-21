"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
;
function processPayment(transaction) {
    if (transaction.type === "cash") {
        return ` \nTransaction type: ${transaction.type} \nAmount: ${transaction.amount}`;
    }
    else if (transaction.type === "card") {
        const fee = 0.02;
        const totalAmount = transaction.amount + (transaction.amount * fee);
        return ` \nTransaction type: ${transaction.type} \nCard number: ${transaction.cardNumber} \nAmount: ${totalAmount}`;
    }
    else if (transaction.type === "mobile-banking") {
        const fee = 0.01;
        const totalAmount = transaction.amount + (transaction.amount * fee);
        return ` \nTransaction type: ${transaction.type} \nCard number: ${transaction.accountNumber} \nAmount: ${totalAmount}`;
    }
    else {
        return "Transaction Failed! Invalid Payment method";
    }
}
const cashPayment = { type: "cash", amount: 500 };
const cardPayment = { type: "card", amount: 1000, cardNumber: 4111111111111111 };
const mobilePayment = { type: "mobile-banking", amount: 750, accountNumber: 900179572064910 };
console.log(processPayment(cashPayment));
console.log(processPayment(cardPayment));
console.log(processPayment(mobilePayment));
//# sourceMappingURL=processPayment.js.map