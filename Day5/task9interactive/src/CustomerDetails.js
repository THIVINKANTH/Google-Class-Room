// customer Account Details
let Customerdetails=[
    {
        "acNumber":"101516404243",
        "acHolder":"Thivin",
        "cusAadhar":1234569874512,
        "cusPan":"ab12cd54",
        "acBalance":"5000.15",
        "cusContact":"9514594679",
        "cusEmail":"thivinkanth@gmail.com",
        "cusId":"ZEAL001",
        "cusPassword":"Thivin@5799"
    },
    {
        "acNumber":"101516404243",
        "acHolder":"Pradeep",
        "cusAadhar":"1234569874512",
        "cusPan":"ab12cd54",
        "acBalance":"5000.15",
        "cusContact":"9514594679",
        "cusEmail":"thivinkanth@gmail.com",
        "cusId":"ZEAL002",
        "cusPassword":"12345"
    }
]
const acnumber=document.getElementById("acnumber");
const acholder=document.getElementById("acholder");
const aadhar=document.getElementById("aadhar");
const pannumber=document.getElementById("pannumber");
const acbalance=document.getElementById("acbalance");
const contact=document.getElementById("contact");
const email=document.getElementById("email");
const cusid=document.getElementById("cusid");
const cuspassword=document.getElementById("cuspassword");

// create new account method
export const create1=(data)=>
{
    Customerdetails.push(data)
}
