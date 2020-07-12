const bill1 = {
    bank: {
        amount: 23
    }
}


const bill2 = {
    bank: {
    }
}


function getBillValueFrom(bill) {
    // return bill.bank.amount.value
    // return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
    //     ? bill.bank.amount.value
    //     : undefined

    return bill?.bank?.amount?.value
}

console.log(getBillValueFrom(bill1));
console.log(getBillValueFrom(bill2));
