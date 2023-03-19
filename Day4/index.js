// To get Client details
const name = document.getElementById("name");
const profession = document.getElementById("profession");

// To get Client Income Information
const annualIncome = document.getElementById("annual-income");
const epfPpfSavings = document.getElementById("epf-ppf-savings");
const otherIncome = document.getElementById("other-income");
const hraExemption = document.getElementById("hra-exemption");

const taxInformation = document.getElementById("tax-information");
const form = document.getElementsByTagName("form");
// Selecting Form and add Eventlistener onSubmit
form[0].addEventListener("submit", (e) => {
  e.preventDefault();
  let totalIncome = +annualIncome.value + +otherIncome.value;
  let grossIncome =totalIncome -+hraExemption.value -+(epfPpfSavings.value >= 150000 ? 150000 : epfPpfSavings.value);
  taxCalculator(grossIncome);
});

// Tax calculator
function taxCalculator(grossIncome) {
  let taxAmount = 0;

  // Taxable income under 2.5 lakhs
  if (grossIncome <= 250000) {
    document.body.innerHTML = `<div class="card col-lg-6 col-10 m-auto mt-5">
      <div class="card-header">Mr/Ms ${name.value}</div>
      <div class="card-body">
          <p class="fs-4">You don't need to pay tax.</p>
      </div>
    </div>`;
  }
  // Taxable income under 5 lakhs(tax rate = 5%)
  else if (grossIncome <= 500000) {
    taxAmount = (grossIncome - 250000) * 0.05;
    document.body.innerHTML = `<div class="card col-lg-6 col-10 m-auto mt-5">
      <div class="card-header">Mr/Ms ${name.value}</div>
      <div class="card-body">
          <p class="fs-4">According to tax amount based on 5% slab:</p>
          <p class="fs-4">You have to pay ${taxAmount}.</p>
          <p class="fs-5">But According to Income Tax Act,the Rebate under Section 87A, the amount less than 5,00,000 was refundable,if you are a resident individual, but not for an NRI, Hindu Undivided Family(HUF) and firms.</p>
      </div>
    </div>`;
  }
  // Taxable income under 10 lakhs(tax rate = 20%)
  else if (grossIncome <= 1000000) {
    // tax amount for 2,50,000 at 5%  = 12,500
    taxAmount = (grossIncome - 500000) * 0.2 + 12500;
    document.body.innerHTML = `<div class="card col-lg-6 col-10 m-auto mt-5">
      <div class="card-header">Mr/Ms ${name.value}</div>
      <div class="card-body">
      <p class="fs-4">According to tax amount based on 20% slab:</p>
        <ul>
          <li class="fs-4">Your tax amount is ${taxAmount}.</li>
          <li class="fs-4">Plus 4% of CESS tax is ${taxAmount * 0.04}.</li>
          <li class="fs-4">Total tax amount is ${
            taxAmount * 0.04 + taxAmount
          }.</li>
        </ul>
      </div>
    </div>`;
  }
  // Taxable income under 50 lakhs(tax rate = 30%)
  else if (grossIncome < 5000000) {
    //  tax amount for 2,50,000 at 5%  = 12,500
    //  tax amount for 5,00,000 at 20%  = 1,00,000
    //  total tax amount for 100000 = 1,12,500
    taxAmount = (grossIncome - 1000000) * 0.3 + 112500;
    document.body.innerHTML = `<div class="card col-lg-6 col-10 m-auto mt-5">
      <div class="card-header">Mr/Ms ${name.value}</div>
      <div class="card-body">
      <p class="fs-4">According to tax amount based on 30% slab.</p>
        <ul>
          <li class="fs-4">Your tax amount is ${taxAmount}.</li>
          <li class="fs-4">Plus 4% of CESS tax is ${taxAmount * 0.04}.</li>
          <li class="fs-4">Total tax amount is ${
            taxAmount * 0.04 + taxAmount
          }.</li>
        </ul>
      </div>
    </div>`;
  }
  // More than 50 lakhs
  else {
    alert(
      "Your taxable Income is more than 50 lakhs, So you need to pay surcharge based on slab. Visit Official govt website for more details."
    );
  }
}