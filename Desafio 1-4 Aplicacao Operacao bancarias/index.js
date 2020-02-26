const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};


function createTransaction(user, transaction) {

    const type = transaction.type
    const value = transaction.value

    if(type === "credit") {
        user.balance = user.balance + value
    } else if (type === "debit") {
        user.balance = user.balance - value
    }

    user.transactions.push(transaction)
}


function getHigherTransactionByType(users, type) {
    
    let maxValue

    for (let i=0; i<users.transactions.length; i++) {

        const nodeAux = users.transactions[i+1] ? users.transactions[i+1] : users.transactions[i]
        
        if(users.transactions[i].type === type) {
            if(users.transactions[i].value>nodeAux.value) {
                maxValue = users.transactions[i]
            } 
        }
    }
    
    console.log(maxValue);
}

function getAverageTransactionValue(user) {
    let soma = 0
    let media
    for (let transaction of user.transactions) {
       soma = soma + transaction.value
    }
    media = soma/user.transactions.length
    console.log(media);
}

function getTransactionsCount(user) {
    let credit = 0
    let debit = 0

    for(let transaction of user.transactions) {
        if(transaction.type === 'credit') {
            credit++
        } else if(transaction.type === 'debit') {
            debit++
        }
    }

    const obj = {
        'credit': credit,
        'debit': debit
    }

    console.log(obj);
    
}

createTransaction(user, { type: "credit", value: 50 });
createTransaction(user, { type: "credit", value: 120 });
createTransaction(user, { type: "debit", value: 80 });
createTransaction(user, { type: "debit", value: 30 });

console.log(user.balance); 
getHigherTransactionByType(user, "credit");
getHigherTransactionByType(user, "debit");
getAverageTransactionValue(user)
getTransactionsCount(user)