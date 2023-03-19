// default transaction details
let Transactiondetails=[
    {
        "transId":"1234",
        "transType":"NEFT",
        "transMode":"Debit",
        "transAmount":"25000",
        "transDate":"15-03-2023",
        "toPay":"Thiya"
    },
    {
        "transId":"5678",
        "transType":"NEFT",
        "transMode":"Credit",
        "transAmount":"5000",
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
// Read transaction
export const read=(object)=>
{
    return Transactiondetails[object];
}
//Update transaction
export const FetchExact=(index)=>
{
    const temp=Transactiondetails.filter((element)=>
    {
        return element.transId===index
    })
    return temp[0];
}
export const upadate=(data,pos)=>
{
    Transactiondetails[pos]=data;
}