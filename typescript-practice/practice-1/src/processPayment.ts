type Payment = Cash | Card | MobileBanking

interface Cash {
    type: "cash",
    amount: number
};

interface Card {
    type: "card",
    cardNumber: number,
    amount: number
};

interface MobileBanking {
    type: "mobile-banking"
    accountNumber: number,
    amount: number
};

function processPayment(transaction: Payment): string {

    if (transaction.type === "cash") {
        return ` \nTransaction type: ${transaction.type} \nAmount: ${transaction.amount}`;
    }
    else if (transaction.type === "card") {
        const fee: number = 0.02
        const totalAmount: number = transaction.amount + (transaction.amount * fee);
        return ` \nTransaction type: ${transaction.type} \nCard number: ${transaction.cardNumber} \nAmount: ${totalAmount}`;
    }
    else if (transaction.type === "mobile-banking") {
        const fee: number = 0.01
        const totalAmount: number = transaction.amount + (transaction.amount * fee);
        return ` \nTransaction type: ${transaction.type} \nCard number: ${transaction.accountNumber} \nAmount: ${totalAmount}`;
    }
    else {
        return "Transaction Failed! Invalid Payment method";
    }

}

const cashPayment: Cash = { type: "cash", amount: 500 };
const cardPayment: Card = { type: "card", amount: 1000, cardNumber: 4111111111111111 };
const mobilePayment: MobileBanking = { type: "mobile-banking", amount: 750, accountNumber: 900179572064910 };

console.log(processPayment(cashPayment));
console.log(processPayment(cardPayment));
console.log(processPayment(mobilePayment));