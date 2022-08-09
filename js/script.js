const button = document.querySelector(".show-results");
const results = document.querySelector(".results");
const expensesList = document.querySelector(".expenses");

const expenses = [
  9.99,
  25.8,
  144.39,
  12.98,
  4.99,
  38.75,
  14.5,
  99.99,
  75.4,
  4.75,
  62.88
];

// Display your expenses in a list
for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`;
  expensesList.append(li);
}