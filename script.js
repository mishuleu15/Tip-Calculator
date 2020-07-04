let calculate = document.getElementById('calculate');

//Calculate Tip
const calculateTip = () => {
  let billAmt = document.getElementById('billamt').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let numOfPeople = document.getElementById('peopleamt').value;
  let each = document.getElementById('each');
  let totalTip = document.getElementById('totalTip');
  let tip = document.getElementById('tip');

  //validate input
  if (billAmt === '' || serviceQual == 0) {
    alert('Please enter values');
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  numOfPeople === '' || numOfPeople <= 1
    ? (each.style.display = 'none')
    : (each.style.display = 'block');

  //Calculate tip
  let total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  totalTip.style.display = 'block';
  tip.innerHTML = total;
};

//Hide the tip amount on load
totalTip.style.display = 'none';
each.style.display = 'none';

//click to call function
calculate.onclick = () => {
  calculateTip();
};
