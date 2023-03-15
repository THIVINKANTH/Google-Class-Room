// default transaction details
let Transactiondetails=[
    {
        "transId":1234,
        "transType":"debit",
        "transMode":"NEFT",
        "transAmount":25000,
        "transDate":"15-03-2023",
        "toPay":"Thiya"
    },
    {
        "transId":5678,
        "transType":"Credit",
        "transMode":"NEFT",
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