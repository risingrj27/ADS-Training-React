'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// making application from lectures

const displayMovements = function (movements, sort = false) {
  // console.log("display movements")
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// account1.movements.push(-200)
// displayMovements(account1.movements);

// const julia = [3,5,2,12,7];
// const  kate = [4,1,15,8,3];

// const checkDogs = (juliaData, kateData) =>{
//   const juliaCorrectData = juliaData.slice();
//   juliaCorrectData.splice(0, 1);
//   juliaCorrectData.splice(-2);

//   const dogs = juliaCorrectData.concat(kateData);
//   console.log("julia data",dogs);
//   //Dog number 1 is an adult, and  is 5 years old
//   //or a puppy("Dog number 2 is still puppy")
//   dogs.forEach((dogs, i)=>{
//     if (dogs >= 3){
//       console.log(`Dog number  ${i+1} is an adult and is ${dogs} years old`)
//     }else
//       console.log(`Dog number ${i+1} is still puppy`)

//   });
// }

// checkDogs(julia, kate)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// array methods --------------------------- 27-11-2022
// const arr = ['a','b','c','d','e']

// SLICE method
// console.log(arr.slice(2))
// console.log(arr.slice(-2))
// console.log(arr.slice(2,4))
// console.log(arr.reverse())
// console.log(arr.join('-'))
// console.log(arr.slice(2))

// SPLICE method
//REVERSE method
//concat method
//join method to join array

// to fetch sepecific value from array using index we use AT method
// console.log(arr.at(0)) //it returns string
// console.log(arr[arr.length-1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))
// AT also work for strings
// console.log('abcd'.at(-1))

// ========================== Working with forEach and forOf loop========================

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log("enteries",movements.entries())
// for of loop
// for (const [i ,movement] of movements.entries()){
//   if(movement > 0){
//     console.log("You Deposited",movement)
//   }else {
//     console.log("you withdrawl ",Math.abs(movement))
//   }
// }
// console.log("------------------for  each loop ------------------------")
// for each loop method
// movements.forEach(function(movement, i,arr){
//   if(movement > 0){
//     console.log(arr)
//     console.log("your index ", i+1,"you Deposited", movement)
//   } else {
//     console.log("your index ", i+1 , "you withdrawlas ", Math.abs(movement))
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value,index,array){
//   // console.log(map)
//   // console.log("Index",index,"Value",value)
// })

// // set
// const currentCurrencies = new Set(['USD','EUR','GBP','EUR','USD']);
// console.log(currentCurrencies)

// currentCurrencies.forEach((key,value)=>{
//   console.log(`key= ${key}, value=${value}`)
// })

/////////////////////////////////////////////////////////////////////////////
// map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  const  eurToUsd = 1.1;

// const conversion = movements.map((mov)=>{
//  return mov * eurToUsd;
// // console.log(convert.toFixed(2))

//  })

//  console.log(conversion)

//  const movementDescription = movements.map((mov , i) =>
//    `Movement ${i+1} : you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)} `
//  )

//  console.log(movementDescription.map(e => console.log(e)))

/////////////////////////////////////////////////////////////////////////////////////////
// const createUserName = accs => {
//   accs.forEach(acc => {
//     acc.userName = acc.owner.toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   });
// };
// const user = 'Steven Thomas Williams';

// createUserName(accounts);
// console.log(accounts);

const createUserName = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
  });
};

createUserName(accounts);
// console.log(accounts);

const deposit = movements.filter(mov => {
  return mov > 0;
});

console.log(deposit);

const withdrawal = movements.filter(mov => {
  return mov < 0;
});

console.log(withdrawal);

const calcPrintBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// calcPrintBalance(account1.movements);

// maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    // console.log(acc)
    return acc;
  } else {
    // console.log(mov)
    return mov;
  }
});

console.log(max);
const data1 = [5, 2, 4, 1, 15, 8, 3];
const calcAverageAge = data => {
  const dogAge = data.map(age => {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });
  const humanAge = dogAge.filter(e => e >= 18);
  const averageHum =
    humanAge.reduce((acc, age) => acc + age, 0) / humanAge.length;

  return averageHum;
};

console.log(calcAverageAge(data1));
////////////////////////////////////////////////////////////////////////
const calcDisplaySummery = (movement, rate) => {
  console.log(rate);
  const incomes = movement
    .filter(val => val > 0)
    .reduce((acc, cur) => acc + cur);
  labelSumIn.textContent = `${incomes}€`;
  const outs = movement.filter(val => val < 0).reduce((acc, cur) => acc + cur);
  labelSumOut.textContent = ` ${Math.abs(outs)} €`;

  const interest = movement
    .filter(val => val > 0)
    .map(deposit => (deposit * rate) / 100)
    .filter(val => val >= 1)
    .reduce((acc, cur) => acc + cur);
  labelSumInterest.textContent = `${interest} €`;
};

// calcDisplaySummery(account1.movements);

/////////////////////////////////////////////////////////////////////////
// find method in java script course

const lesserValue = movements.find(mov => mov < 0);
// find return only one element in the array
console.log('lesser', lesserValue);
const filterLesser = movements.filter(mov => mov < 0);
// filter return array of elements
// console.log(filterLesser)
// console.log(accounts)

const oneAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(oneAccount)

//////////////////////////////////////////////////////////////////////////////

const updateUI = acc => {
  //display movements
  displayMovements(acc?.movements);

  calcDisplaySummery(acc.movements, acc?.interestRate);

  calcPrintBalance(acc);
};

// login functionality for bakist app
let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI message
    labelWelcome.textContent = `Weolcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    // console.log('pin');

    containerApp.style.opacity = 100;

    inputLoginPin.value = inputLoginUsername.value = '';
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = ` No Account find`;
  }
});

// transfer button funtionality
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const recevierAcc = accounts.find(acc => {
    return acc.userName === inputTransferTo.value;
  });
  inputTransferAmount.value = inputTransferTo.value = '';

  // console.log(amount, recevierAcc.movements.push(amount));
  // console.log(recevierAcc?.movements);

  if (
    amount > 0 &&
    recevierAcc &&
    currentAccount?.balance >= amount &&
    currentAccount?.userName !== recevierAcc?.userName
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    recevierAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// close account btn functionality
btnClose.addEventListener('click', e => {
  e.preventDefault();
  // console.log("delete")

  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    accounts.splice(index, 1);
    // console.log(accounts)
    inputClosePin.value = inputCloseUsername = '';
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// some and every method in java script course //////////////////////////////////////////////////////

// console.log('movements', movements);

// console.log(movements.includes(-130));

const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);

// every method /////////////////////////////

// console.log(
//   "Every condition false because all value's are not positive",
//   movements.every(mov => mov > 0)
// );
// console.log(
//   'If every value is positive then it return true',
//   account4.movements.every(mov => mov > 0)
// );

const deposits = mov => mov > 0;
// console.log('Some function', movements.some(deposits));
// console.log('Every function', movements.every(deposits));
// console.log('Filter function', movements.filter(deposits));

// flat and flatmap method in array /////////////////////////////////////////////////////////////
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9];
// console.log("flat array method only goes for one level deep",arr.flat())
// console.log("flatmap goes deeper then flatmethod in array",arrDeep.flatMap())

const accountMovements = accounts.map(e => {
  return e.movements;
});

console.log('account movemnts', accountMovements);
// console.log(accountMovements.flat().length);
const accountSum = accountMovements.flat();
const overAllBalance = accountSum.reduce((acc, mov) => {
  return acc + mov;
});
// console.log(overAllBalance);

const allBalance = accountMovements
  .flatMap(acc => acc)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(allBalance);

// const owners = ['Ban', 'Farm', 'Adam', 'Zonas', 'Zack', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements.sort());
movements.sort((a, b) => {
  if (a > b) return 1;
  console.log(a, b);
  if (a < b) return -1;
});

// console.log(movements);


//164 more ways to create &  fill arrays

const arrays = [1,2,3,4,5,6,7];
const x = new Array(4);
x.fill(6,0,4)
console.log(x)

// Array.from  method
const y = Array.from({length:7}, ()=> 1)
console.log(y)
const u = Array.from({length:7},(curr, i) => i+1)
console.log(u)

labelBalance.addEventListener('click', ()=>{
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€','')))
  console.log(movementsUI)
});


const totalDeposit = accounts.map(el => el.movements).flat().filter(mov => mov > 0).reduce((sum,cur) => sum+cur, 0);

console.log(totalDeposit)