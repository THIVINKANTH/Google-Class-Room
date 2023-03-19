// Transaction datas in array of objects
const transactions = [
    {
      transactionId: 123,
      date: new Date("17-03-2023"),
      type: "debit",
      amount: 500,
    },
    {
      transactionId: 1234,
      date: new Date("17-03-2023"),
      type: "credit",
      amount: 600,
    },
  ];
const transactionId=document.getElementById("transId");
const transactiondate=document.getElementById("transDate");
const debitbutton=document.getElementById("debit")
const creditbutton=document.getElementById("credit")
const form=document.getElementsByTagName("transaction");

// form[0].addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let limit=transactionId,transactiondate;
// })

function Limit(attempts)
{
    // let attempts=0
        if(form===transactionId.value&&transactiondate.value)
        {
            if(attempts<3)
            {
                attempts++;
                Limit(attempts);
            }
            else{
                alert('maximum Limit crossed if you continue this transaction extra charges 20 rupees');
            }
        }
        else{
            alert('not working');
        }
    
}