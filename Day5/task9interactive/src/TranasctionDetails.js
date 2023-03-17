// default transaction details
let Transactiondetails=[
    {
        "transId":1234,
        "transType":"NEFT",
        "transMode":"Debit",
        "transAmount":25000,
        "transDate":"15-03-2023",
        "toPay":"Thiya"
    },
    {
        "transId":5678,
        "transType":"NEFT",
        "transMode":"Credit",
        "transAmount":5000,
        "transDate":"15-03-2023",
        "toPay":"Thivin"
    }
]
// cretae new transaction
export const create=(data)=>
{
    Transactiondetails.push(data)
}
// list all transaction
export const list=()=>
{
    return Transactiondetails;
}
// delete transaction
export const remove=(index)=>
{
    Transactiondetails=Transactiondetails.filter((data,ind)=>
    {
        return ind!==index;
    })
    return Transactiondetails;
}
// customer Account Details
let Customerdetails=[
    {
        "acNumber":"101516404243",
        "acHolder":"Thivin",
        "cusAadhar":1234569874512,
        "cusPan":"ab12cd54",
        "acBalance":5000.15,
        "cusContact":9514594679,
        "cusEmail":"thivinkanth@gmail.com",
        "cusId":"KVB007",
        "cusPassword":"Thivin@5799"
    }
]
export const create1=(data)=>
{
    Customerdetails.push(data)
}
